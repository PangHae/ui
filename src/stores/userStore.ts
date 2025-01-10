import { create } from 'zustand';

type UserStore = {
  accessToken: string;
  name: string;
  setUser: (accessToken: string, name: string) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  accessToken: '',
  name: '',
  setUser: (accessToken: string, name: string) => set({ accessToken, name }),
  clearUser: () => set({ accessToken: '', name: '' }),
}));
