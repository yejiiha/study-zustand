import { create } from "zustand";
import { StateStorage, createJSONStorage, persist } from "zustand/middleware";
import { defaultStore } from "./useCountStore";

const hashStorage: StateStorage = {
  getItem: (key): string => {
    const searchParams = new URLSearchParams(window.location.hash.slice(1));
    const storedValue = searchParams.get(key) ?? "";

    return JSON.parse(storedValue);
  },
  setItem: (key, newValue): void => {
    const searchParams = new URLSearchParams(window.location.hash.slice(1));
    searchParams.set(key, JSON.stringify(newValue));
    window.location.hash = searchParams.toString();
  },
  removeItem: (key): void => {
    const searchParams = new URLSearchParams(window.location.hash.slice(1));
    searchParams.delete(key);
    window.location.hash = searchParams.toString();
  },
};

export const useBoundStore = create(
  persist(defaultStore, {
    name: "count-state", // unique name
    storage: createJSONStorage(() => hashStorage),
  })
);
