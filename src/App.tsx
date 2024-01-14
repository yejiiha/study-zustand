import React from "react";
import "./App.css";
import Fruits from "./components/Fruits";
import PersistCount from "./components/PersistCount";
import TemporaryCount from "./components/TemporaryCount";
import Fish from "./components/Fish";
import FooBar from "./components/FooBar";
import Bound from "./components/Bound";
import ShallowCount from "./components/ShallowCount";

export default function App() {
  return (
    <div className="App">
      <h1>Study Zustand</h1>

      <PersistCount />

      <div className="divider" />

      <TemporaryCount />
      <ShallowCount />

      <div className="divider" />

      <Fish />

      <div className="divider" />

      <FooBar />

      <div className="divider" />

      <Bound />

      <div className="divider" />

      <Fruits />
    </div>
  );
}
