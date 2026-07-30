import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import AppError from "../utils/AppError.js";
import { errorResponse } from "../utils/apiResponse.js";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    return errorResponse({
      res,
      statusCode: 400,
      message: "Validation failed",
      errors: err.issues,
    });
  }

  if (err instanceof AppError) {
    return errorResponse({
      res,
      statusCode: err.statusCode,
      message: err.message,
    });
  }

  console.error(err);

  return errorResponse({
    res,
    statusCode: 500,
    message: "Internal Server Error",
  });
};