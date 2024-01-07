import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing

interface CountState {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
  reset: () => void;
}

export const usePersistCountStore = create<CountState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increaseCount: () =>
          set(({ count }) => ({
            count: count + 1,
          })),
        decreaseCount: () =>
          set(({ count }) => ({
            count: count - 1,
          })),
        reset: () => set({ count: 0 }),
      }),
      {
        name: "count-storage",
      }
    )
  )
);

export const useTemporaryCountStore = create<CountState>()(
  devtools((set) => ({
    count: 0,
    increaseCount: () =>
      set(({ count }) => ({
        count: count + 1,
      })),
    decreaseCount: () =>
      set(({ count }) => ({
        count: count - 1,
      })),
    reset: () => set({ count: 0 }),
  }))
);
