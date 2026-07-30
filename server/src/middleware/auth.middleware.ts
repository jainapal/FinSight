//protect routes
import { Request, Response, NextFunction } from "express";
import User from "../models/user.model.js";
import AppError from "../utils/AppError.js";
import { verifyToken } from "../utils/jwt.js";
import asyncHandler from "../utils/asyncHandler.js";

export const authenticate = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("Cookies:", req.cookies);
console.log("Cookie Header:", req.headers.cookie);
    const token = req.cookies.token;

    if (!token) {
      throw new AppError("Not authenticated", 401);
  }

    const decoded = verifyToken(token);

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      throw new AppError("User not found", 401);
    }

    req.user = user;
    console.log("Authenticated User:", req.user?.email);
console.log("Authenticated User ID:", req.user?._id.toString());

    next();
  }
);