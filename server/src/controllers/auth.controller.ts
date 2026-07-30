// handles HTTP resquest / response
import { Request, Response } from "express";
import { registerSchema, loginSchema } from "../validators/auth.validator.js";
import { registerUser, loginUser } from "../services/auth.service.js";
import asyncHandler from "../utils/asyncHandler.js";
import { getCurrentUser } from "../services/auth.service.js";
import { toUserResponse } from "../utils/user.mapper.js";
import { setAuthCookie, clearAuthCookie } from "../utils/cookie.js";
import { successResponse } from "../utils/apiResponse.js";



export const register = asyncHandler(async (req: Request, res: Response) => {
  const validatedData = registerSchema.parse(req.body);

  const {user, token} = await registerUser(
    validatedData.name,
    validatedData.email,
    validatedData.password
  );

  setAuthCookie(res, token);
  successResponse({
    res,
    statusCode: 201,
    message: "User registered successful",
    data: {
      user: toUserResponse(user),
    },
  });
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const validatedData = loginSchema.parse(req.body);

  const { user, token } = await loginUser(
    validatedData.email,
    validatedData.password
  );

  setAuthCookie(res, token);
  successResponse({
    res,
    message: "Login successful",
    data: {
      user: toUserResponse(user),
    },
  });
});

export const me = asyncHandler(async (req: Request, res: Response) => {
  const user = await getCurrentUser(req.user!._id.toString());

  successResponse({
    res,
    message: "Current user fetched successfully",
    data: {
      user: toUserResponse(user),
    }
  });
});

export const logout = asyncHandler(async (_, res) => {
  clearAuthCookie(res);

  successResponse({
    res,
    message: "Logged out successfully",
  });
});