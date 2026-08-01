import { create } from "zustand";
import { authService } from "../services/auth.service";
import type {User} from "../types/auth";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  login: (
    email: string,
    password: string
  ) => Promise<void>;

  register: (
    name: string,
    email: string,
    password: string
  ) => Promise<void>;

  logout: () => Promise<void>;

  fetchCurrentUser: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  async login(email, password) {
    set({ 
      isLoading: true ,
      error: null,
    });
  
    try {
      const response = await authService.login({
        email,
        password,
      });
  
      set({
        user: response.data.data.user,
        isAuthenticated: true,
        error: null,
      });
    } catch (error) {
      set({
        user: null,
        isAuthenticated: false,
        error: "Invalid email or password",
      });
  
      throw error;
    } finally {
      set({
        isLoading: false,
      });
    }
  },

  async register(name, email, password) {
    set({ 
      isLoading: true ,
      error: null,
    });
  
    try {
      const response = await authService.register({
        name,
        email,
        password,
      });
  
      set({
        user: response.data.data.user,
        isAuthenticated: true,
        error: null,
      });
    } catch (error) {
      set({
        user: null,
        isAuthenticated: false,
        error: "Something went wrong",
      });
  
      throw error;
    } finally {
      set({
        isLoading: false,
      });
    }
  },

  async logout() {
    try{
      await authService.logout();
    } finally{
      set({
        user: null,
        isAuthenticated: false,
        error: null,
      });
    }

    
  },

  async fetchCurrentUser() {
    set({
      isLoading: true,
    });
    try {
      const response = await authService.getCurrentUser();

      set({
        user: response.data.data.user,
        isAuthenticated: true,
        error: null,
      });
    } catch {
      set({
        user: null,
        isAuthenticated: false,
      });
    } finally {
      set({
        isLoading: false,
      });
    }
  },

  clearError() {
    set({
      error: null,
    });
  },
}));