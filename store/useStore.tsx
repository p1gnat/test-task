import { create } from "zustand";

type StoreState = {
  name: string;
  setName: (name: string) => void;
};

type PasswordState = {
  passwordLength: number;
  useBigLetters: boolean;
  useSmallLetters: boolean;
  useNumbers: boolean;
  useSpecialSymbols: boolean;
  avoidRepetition: boolean;
  setPasswordLength: (length: number) => void;
  toggleBigLetters: () => void;
  toggleSmallLetters: () => void;
  toggleNumbers: () => void;
  toggleSpecialSymbols: () => void;
  toggleAvoidRepetition: () => void;
};

export const useStore = create<StoreState>((set) => ({
  name: "",
  setName: (name: string) => set({ name }),
}));
export const usePasswordStore = create<PasswordState>((set) => ({
  passwordLength: 12,
  useBigLetters: true,
  useSmallLetters: true,
  useNumbers: true,
  useSpecialSymbols: true,
  avoidRepetition: false,
  setPasswordLength: (length) => set({ passwordLength: length }),
  toggleBigLetters: () =>
    set((state) => ({ useBigLetters: !state.useBigLetters })),
  toggleSmallLetters: () =>
    set((state) => ({ useSmallLetters: !state.useSmallLetters })),
  toggleNumbers: () => set((state) => ({ useNumbers: !state.useNumbers })),
  toggleSpecialSymbols: () =>
    set((state) => ({ useSpecialSymbols: !state.useSpecialSymbols })),
  toggleAvoidRepetition: () =>
    set((state) => ({ avoidRepetition: !state.avoidRepetition })),
}));
