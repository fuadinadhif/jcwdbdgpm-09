import { type IExistingUser, type IRegister } from "../types/auth.d.js";
export declare class AuthService {
    register({ name, username, email, password, role }: IRegister): Promise<{
        name: string;
        username: string;
        email: string;
        role: import("../generated/prisma/enums.js").RoleType;
        id: string;
        bio: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    validateUser(username: string, password: string): Promise<{
        name: string;
        username: string;
        email: string;
        password: string;
        role: import("../generated/prisma/enums.js").RoleType;
        id: string;
        bio: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    generateToken(existingUser: IExistingUser): Promise<string>;
    sendWelcomeEmail(name: string, email: string): Promise<void>;
}
//# sourceMappingURL=auth.service.d.ts.map