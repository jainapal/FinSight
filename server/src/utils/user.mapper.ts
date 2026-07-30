import { IUser } from "../models/user.model.js";

export const toUserResponse = (user: IUser) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  role: user.role,
  isVerified: user.isVerified,
  avatar: user.avatar ?? null,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});