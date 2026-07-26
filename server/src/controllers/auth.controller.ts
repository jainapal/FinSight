// handles HTTP resquest / response
import { Request, Response } from "express";
import { registerSchema } from "../validators/auth.validator.js";
import { registerUser } from "../services/auth.service.js";

export const register = async (req: Request, res: Response) => {
  try {
    const validatedData = registerSchema.parse(req.body);

    const user = await registerUser(
      validatedData.name,
      validatedData.email,
      validatedData.password
    );

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
      return;
    }

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};