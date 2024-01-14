import { useBoundStore } from "../store/useBoundStore";

export default function Bound() {
  const {
    count: boundCount,
    increaseCount: boundIncrease,
    decreaseCount: boundDecrease,
  } = useBoundStore();

  return (
    <>
      <h3>bound count</h3>
      <div>{boundCount}</div>
      <div>
        <button onClick={boundIncrease}>+</button>
        <button onClick={boundDecrease}>-</button>
      </div>
    </>
  );
}
