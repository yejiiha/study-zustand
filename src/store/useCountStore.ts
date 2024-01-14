import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing

type State = {
  count: number;
};

type Action = {
  increaseCount: () => void;
  decreaseCount: () => void;
  reset: () => void;
};

const initialState: State = {
  count: 0,
};

export const defaultStore: StateCreator<
  State & Action,
  [["zustand/devtools", never]],
  []
> = (set) => ({
  count: 0,
  increaseCount: () =>
    set(({ count }) => ({
      count: count + 1,
    })),
  decreaseCount: () =>
    set(({ count }) => ({
      count: count - 1,
    })),
  reset: () => set(initialState),
});

export const usePersistCountStore = create<State & Action>()(
  devtools(
    persist(defaultStore, {
      name: "count-storage",
    })
  )
);

export const useTemporaryCountStore = create<State & Action>()(
  devtools(defaultStore)
);
