import session from "../session.ts"
import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function loginMiddleware(req: Request, res: Response, next: NextFunction) {
    next();
}