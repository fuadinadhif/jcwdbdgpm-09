import { z } from "zod";
import { RoleType } from "../generated/prisma/enums.js";
export const registerSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    username: z.string().max(20, "Username cannot be more than 20 characters"),
    email: z.email("Invalid email format"),
    password: z
        .string()
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[\d]/, "Password must containt at least one number")
        .regex(/[^a-zA-Z0-9]/, "Password must contain at least one symbol"),
    role: z.enum(RoleType).optional(),
});
export const loginSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
});
//# sourceMappingURL=auth.validation.js.map