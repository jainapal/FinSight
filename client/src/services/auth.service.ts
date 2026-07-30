import api from "../api/axios";
import type { ApiResponse, AuthUserResponse } from "../types/auth";

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const authService = {
  register: (data: RegisterData) =>
    api.post<ApiResponse<AuthUserResponse>>(
      "/auth/register", data
    ),

  login: (data: LoginData) =>
    api.post<ApiResponse<AuthUserResponse>>(
      "/auth/login", data
    ),

  logout: () =>
    api.post("/auth/logout"),

  getCurrentUser: () =>
    api.get<ApiResponse<AuthUserResponse>>("/auth/me"),
};