import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface State {
  foo: Map<any, any>;
  bar: Set<any>;
}

export const useFooBar = create<State>()(
  devtools(() => ({ foo: new Map(), bar: new Set() }))
);
