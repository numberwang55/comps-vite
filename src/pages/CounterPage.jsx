import { useState } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

export default function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleChange = (event) => {
    setValueToAdd(+event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setCount(count + valueToAdd)
    setValueToAdd(0)
  }

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Add a custom amount!</label>
        <input
          value={valueToAdd || ""}
          onChange={handleChange}
          aria-label="input box"
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add</Button>
      </form>
    </Panel>
  );
}
