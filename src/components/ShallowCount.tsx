import { useShallow } from "zustand/react/shallow";
import { useTemporaryCountStore } from "../store/useCountStore";

export default function ShallowCount() {
  const { nuts } = useTemporaryCountStore(
    useShallow(({ count }) => ({ nuts: count }))
  );

  return (
    <>
      <h3>shallow count</h3>
      <div>{nuts}</div>
    </>
  );
}
