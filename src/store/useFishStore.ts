import omit from "lodash-es/omit";
import { create } from "zustand";

interface FishState {
  salmon: number;
  tuna: number;
  increaseTuna: () => void;
  deleteEverything: () => void;
  deleteTuna: () => void;
}

export const useFishStore = create<FishState>()((set) => ({
  salmon: 1,
  tuna: 2,
  increaseTuna: () =>
    set(({ tuna }) => ({
      tuna: tuna + 1,
    })),
  deleteEverything: () => set({}, true), // clears the entire store, actions included
  deleteTuna: () => set((state) => omit(state, ["tuna"]), true),
}));
