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

type CalculatorState = {
  x: string; // The current input/display value
  p1: string; // The first operand
  p2: string; // The operation symbol
  d: number; // The operation (e.g., 1 = "+", 2 = "-", etc.)

  // Number input handlers
  x1: () => void;
  x2: () => void;
  x3: () => void;
  x4: () => void;
  x5: () => void;
  x6: () => void;
  x7: () => void;
  x8: () => void;
  x9: () => void;
  x0: () => void;

  // Toggle sign (+/-)
  xm: () => void;

  // Add decimal point
  xa: () => void;

  // Clear all inputs
  xc: () => void;

  // Delete (Backspace)
  xce: () => void;

  // Percentage function
  xpercent: () => void;

  // Set operations
  xp: () => void;
  xmm: () => void;
  xd: () => void;
  xz: () => void;

  // Perform calculation when "=" is pressed
  equal: () => void;

  // Update the display manually
  xt: (value: string) => void;
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

const useCalculator = create<CalculatorState>((set) => ({
  x: "", // The current input/display value
  p1: "", // The first operand
  p2: "", // The operation symbol
  d: 0, // The operation (e.g., 1 = "+", 2 = "-", etc.)

  // Number input handlers
  x1: () => set((state) => ({ x: state.x + "1" })),
  x2: () => set((state) => ({ x: state.x + "2" })),
  x3: () => set((state) => ({ x: state.x + "3" })),
  x4: () => set((state) => ({ x: state.x + "4" })),
  x5: () => set((state) => ({ x: state.x + "5" })),
  x6: () => set((state) => ({ x: state.x + "6" })),
  x7: () => set((state) => ({ x: state.x + "7" })),
  x8: () => set((state) => ({ x: state.x + "8" })),
  x9: () => set((state) => ({ x: state.x + "9" })),
  x0: () => set((state) => ({ x: state.x + "0" })),

  // Toggle sign (+/-)
  xm: () => set((state) => ({ x: (parseFloat(state.x) * -1).toString() })),

  // Add decimal point
  xa: () =>
    set((state) => ({ x: state.x.includes(".") ? state.x : state.x + "." })),

  // Clear all inputs
  xc: () => set(() => ({ x: "", p1: "", p2: "", d: 0 })),

  // Delete (Backspace)
  xce: () => set((state) => ({ x: state.x.slice(0, -1) })),

  // Percentage function
  xpercent: () =>
    set((state) => ({ x: (parseFloat(state.x) / 100).toString() })),

  // Set operations
  xp: () => set((state) => ({ p1: state.x, x: "", d: 1, p2: "+" })),
  xmm: () => set((state) => ({ p1: state.x, x: "", d: 2, p2: "-" })),
  xd: () => set((state) => ({ p1: state.x, x: "", d: 3, p2: "/" })),
  xz: () => set((state) => ({ p1: state.x, x: "", d: 4, p2: "*" })),

  equal: () =>
    set((state) => {
      const num1 = parseFloat(state.p1);
      const num2 = parseFloat(state.x);
      let result = "";

      switch (state.d) {
        case 1:
          result = (num1 + num2).toString();
          break;
        case 2:
          result = (num1 - num2).toString();
          break;
        case 3:
          result = (num1 / num2).toString();
          break;
        case 4:
          result = (num1 * num2).toString();
          break;
        default:
          result = state.x;
      }

      return { x: result, p1: "", p2: "", d: 0 };
    }),

  // Update the display manually
  xt: (value) => set({ x: value }),
}));

export default useCalculator;
