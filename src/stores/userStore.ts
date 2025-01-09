import { create } from 'zustand';

type User = { id: number; name: string };

export const useUserStore = create<User>((set) => ({
  id: -1,
  name: '',
  setUser: (id: number, name: string) => set({ id, name }),
  clearUser: () => set({ id: 0, name: '' }),
}));
