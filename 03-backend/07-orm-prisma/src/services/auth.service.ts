import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import fs from "fs/promises";

import { prisma } from "../configs/prisma.config.js";
import { AppError } from "../errors/app.error.js";
import { type IExistingUser, type IRegister } from "../types/auth.d.js";
import { resend } from "../configs/resend.config.js";
import Handlebars from "handlebars";
import { renderTemplate } from "../utils/email.util.js";

export class AuthService {
  async register({ name, username, email, password, role }: IRegister) {
    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ username, email }] },
    });
    if (existingUser) throw new AppError(400, "User already exist");

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        username,
        email,
        password: hashedPassword,
        ...(role && { role: role }),
      },
      omit: { password: true },
    });

    await this.sendWelcomeEmail(user.name, user.email);

    return user;
  }

  async validateUser(username: string, password: string) {
    const existingUser = await prisma.user.findUnique({
      where: { username },
    });
    if (!existingUser) throw new AppError(400, "Username or password wrong");

    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isValidPassword) throw new AppError(400, "Username or password wrong");

    return existingUser;
  }

  async generateToken(existingUser: IExistingUser) {
    const payload = {
      name: existingUser.name,
      email: existingUser.email,
      role: existingUser.role,
    };

    const authToken = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    return authToken;
  }

  async sendWelcomeEmail(name: string, email: string) {
    const html = await renderTemplate("welcome", { name });

    const { data, error } = await resend.emails.send({
      from: "Eventify <eventify@purwadhika.my.id>",
      to: [email],
      subject: "Welcome to Eventify",
      html,
    });

    if (error) {
      console.error(error);
    }
  }
}
