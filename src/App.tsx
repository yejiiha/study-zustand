import React from "react";
import "./App.css";
import {
  usePersistCountStore,
  useTemporaryCountStore,
} from "./store/useCountStore";
import { useShallow } from "zustand/react/shallow";
import { useFishStore } from "./store/useFishStore";

export default function App() {
  const { count, increaseCount, decreaseCount, reset } = usePersistCountStore();
  const {
    count: tempCount,
    increaseCount: tempIncrease,
    decreaseCount: tempDecrease,
    reset: tempReset,
  } = useTemporaryCountStore();
  const { nuts } = useTemporaryCountStore(
    useShallow(({ count }) => ({ nuts: count }))
  );
  const { salmon, tuna, increaseTuna, deleteEverything, deleteTuna } =
    useFishStore();

  return (
    <div className="App">
      <h1>Study Zustand</h1>

      <div>persist count | {count}</div>

      <div>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
      </div>

      <div>
        <button onClick={reset}>Reset</button>
      </div>

      <br />

      <div>temporary count | {tempCount}</div>

      <div>
        <button onClick={tempIncrease}>+</button>
        <button onClick={tempDecrease}>-</button>
      </div>

      <div>
        <button onClick={tempReset}>Reset</button>
      </div>

      <br />

      <div>{nuts}</div>

      <br />

      <h3>FISH MARKET 🐟</h3>
      <div>salmon: {salmon}</div>
      <div>tuna: {tuna}</div>
      <button onClick={increaseTuna}>tuna + 1</button>
      <button onClick={deleteEverything}>delete everything</button>
      <button onClick={deleteTuna}>delete tuna</button>
    </div>
  );
}
