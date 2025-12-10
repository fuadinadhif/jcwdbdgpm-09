import {} from "express";
import jwt from "jsonwebtoken";
export async function verifyToken(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        const bearerToken = authHeader?.split(" ")[1];
        const cookieToken = req.cookies?.authenticationToken;
        const authToken = bearerToken || cookieToken;
        if (!authToken)
            return res
                .status(401)
                .json({ message: "Unauthenticated. Please login first" });
        const verifiedToken = jwt.verify(authToken, process.env.JWT_SECRET);
        req.currentUser = verifiedToken;
        next();
    }
    catch (error) {
        res.status(401).json({ message: "Expired or invalid token" });
    }
}
export function roleGuard(...allowedRoles) {
    return (req, res, next) => {
        const role = req.currentUser?.role;
        if (!role) {
            return res
                .status(401)
                .json({ message: "Unathenticated. Please login first" });
        }
        if (!allowedRoles.includes(role)) {
            return res.status(403).json({
                message: "Forbidden. You are not authorized to access this route",
            });
        }
        next();
    };
}
//# sourceMappingURL=auth.middleware.js.map