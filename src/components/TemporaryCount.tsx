import { useTemporaryCountStore } from "../store/useCountStore";

export default function TemporaryCount() {
  const {
    count: tempCount,
    increaseCount: tempIncrease,
    decreaseCount: tempDecrease,
    reset: tempReset,
  } = useTemporaryCountStore();

  return (
    <>
      <div>temporary count | {tempCount}</div>
      <div>
        <button onClick={tempIncrease}>+</button>
        <button onClick={tempDecrease}>-</button>
      </div>
      <div>
        <button onClick={tempReset}>Reset</button>
      </div>
    </>
  );
}
