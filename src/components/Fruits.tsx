import { useFruitStore } from "../store/useFruitStore";

export default function Fruits() {
  const { fruits, addFruits, fruit, inputFruit } = useFruitStore();

  return (
    <>
      <h3>Fruits 🍎🍊🍋🍏🫐🍇</h3>
      <div>I have {fruits.length} fruits!</div>
      <div>fruits: {fruits.join(", ")}</div>
      <input
        type="text"
        value={fruit}
        placeholder="Write down the fruit"
        onChange={(e) => inputFruit(e.target.value)}
      />
      <button onClick={() => addFruits(fruit)}>add</button>
    </>
  );
}
