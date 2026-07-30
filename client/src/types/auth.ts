export interface User {
    id: string;
    name: string;
    email: string;
    role: "user" | "admin";
    isVerified: boolean;
    avatar: string | null;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
  }

  export interface AuthUserResponse{
    user: User;
  }