import {} from "express";
import { AuthService } from "../services/auth.service.js";
import { registerSchema, loginSchema } from "../validations/auth.validation.js";
const authService = new AuthService();
export class AuthController {
    async register(req, res, next) {
        try {
            const { name, username, email, password, role } = registerSchema.parse(req.body);
            const user = await authService.register({
                email,
                username,
                password,
                name,
                role,
            });
            res.status(201).json(user);
        }
        catch (error) {
            next(error);
        }
    }
    async login(req, res, next) {
        try {
            const { username, password } = loginSchema.parse(req.body);
            const user = await authService.validateUser(username, password);
            const authToken = await authService.generateToken(user);
            res
                .status(200)
                .cookie("authenticationToken", authToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 1000 * 60 * 60 * 24,
            })
                .json({ message: "Login success" });
        }
        catch (error) {
            next(error);
        }
    }
    async logout(req, res) {
        req.currentUser = null;
        res
            .status(200)
            .clearCookie("authenticationToken")
            .json({ message: "Logout success" });
    }
}
//# sourceMappingURL=auth.controller.js.map