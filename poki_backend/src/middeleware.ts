import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
const JWT_SECRET = "Secret";
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
   const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({ message: "No authorization header" });
    }

    // Expecting format: "Bearer <token>"
    const token = authHeader.split(" ")[1];
    
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as string;
        req.userId = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
};