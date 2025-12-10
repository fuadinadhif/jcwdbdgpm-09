import { z } from "zod";
export declare const registerSchema: z.ZodObject<{
    name: z.ZodString;
    username: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
    role: z.ZodOptional<z.ZodEnum<{
        readonly CUSTOMER: "CUSTOMER";
        readonly EVENT_ORGANIZER: "EVENT_ORGANIZER";
    }>>;
}, z.core.$strip>;
export declare const loginSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=auth.validation.d.ts.map