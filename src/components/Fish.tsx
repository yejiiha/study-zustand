import { useFishStore } from "../store/useFishStore";

export default function Fish() {
  const { salmon, tuna, increaseTuna, deleteEverything, deleteTuna } =
    useFishStore();

  return (
    <>
      <h3>FISH MARKET 🐟</h3>
      <div>salmon: {salmon}</div>
      <div>tuna: {tuna}</div>
      <button onClick={increaseTuna}>tuna + 1</button>
      <button onClick={deleteEverything}>delete everything</button>
      <button onClick={deleteTuna}>delete tuna</button>
    </>
  );
}
