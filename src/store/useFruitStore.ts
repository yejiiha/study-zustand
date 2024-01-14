import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface FruitsState {
  fruits: string[];
  fruit: string;
  inputFruit: (value: string) => void;
  addFruits: (fruit: string) => void;
}

export const useFruitStore = create<FruitsState>()(
  devtools((set) => ({
    fruits: ["apple", "banana", "orange"],
    fruit: "",
    inputFruit: (value) =>
      set({
        fruit: value,
      }),
    addFruits: (fruit) => {
      set((state) => ({
        fruits: [...state.fruits, fruit],
      }));
    },
  }))
);
