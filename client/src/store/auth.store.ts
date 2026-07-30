import { create } from "zustand";
import { authService } from "../services/auth.service";
import type {User} from "../types/auth";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

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
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  async login(email, password) {
    set({ isLoading: true });
  
    try {
      const response = await authService.login({
        email,
        password,
      });
  
      set({
        user: response.data.data.user,
        isAuthenticated: true,
      });
    } catch (error) {
      set({
        user: null,
        isAuthenticated: false,
      });
  
      throw error;
    } finally {
      set({
        isLoading: false,
      });
    }
  },

  async register(name, email, password) {
    set({ isLoading: true });
  
    try {
      const response = await authService.register({
        name,
        email,
        password,
      });
  
      set({
        user: response.data.data.user,
        isAuthenticated: true,
      });
    } catch (error) {
      set({
        user: null,
        isAuthenticated: false,
      });
  
      throw error;
    } finally {
      set({
        isLoading: false,
      });
    }
  },

  async logout() {
    await authService.logout();

    set({
      user: null,
      isAuthenticated: false,
    });
  },

  async fetchCurrentUser() {
    try {
      const response = await authService.getCurrentUser();

      set({
        user: response.data.data.user,
        isAuthenticated: true,
      });
    } catch {
      set({
        user: null,
        isAuthenticated: false,
      });
    }
  },
}));