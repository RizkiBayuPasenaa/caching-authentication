import { create } from "zustand";

interface LoginState {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

export const useIsLogin = create<LoginState>((set) => ({
  isLogin: false,
  setIsLogin: (isLogin) => set({ isLogin }),
}));