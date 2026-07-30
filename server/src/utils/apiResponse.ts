import { Response } from "express";

interface SuccessResponseOptions<T> {
  res: Response;
  statusCode?: number;
  message: string;
  data?: T;
}

interface ErrorResponseOptions {
  res: Response;
  statusCode: number;
  message: string;
  errors?: unknown;
}

export const successResponse = <T>({
  res,
  statusCode = 200,
  message,
  data,
}: SuccessResponseOptions<T>) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const errorResponse = ({
  res,
  statusCode,
  message,
  errors,
}: ErrorResponseOptions) => {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
};