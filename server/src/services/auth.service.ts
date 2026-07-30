// contains business logic
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import AppError from "../utils/AppError.js";
import { generateToken } from "../utils/jwt.js";


export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new AppError("Email already exists", 409);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = generateToken({
    userId: user.id,
    role: user.role,
});

return {
    user,
    token
};

};

export const loginUser = async (
  email: string,
  password: string
) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  const isPasswordCorrect = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordCorrect) {
    throw new AppError("Invalid email or password", 401);
  }

  const token = generateToken({
    userId: user.id,
    role: user.role,
  });

  return {
    user,
    token,
  };
};

export const getCurrentUser = async (userId: string) => {
  const user = await User.findById(userId).select("-password");

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};