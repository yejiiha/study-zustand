import { usePersistCountStore } from "../store/useCountStore";

export default function PersistCount() {
  const { count, increaseCount, decreaseCount, reset } = usePersistCountStore();

  return (
    <>
      <div>persist count | {count}</div>
      <div>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}
