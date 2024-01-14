import { useFooBar } from "../store/useMapStore";

export default function FooBar() {
  const { foo, bar } = useFooBar();

  const doSomething = () => {
    useFooBar.setState((prev) => ({
      foo: new Map(prev.foo).set("newKey", "newValue"),
      bar: new Set(prev.bar).add("newKey"),
    }));
  };

  return (
    <>
      <h3>Map</h3>
      foo: {foo} | bar: {bar}
      <button onClick={doSomething}>update foo bar</button>
    </>
  );
}
