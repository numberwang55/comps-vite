import { useEffect } from "react";
import { useState } from "react";
import Button from "../components/Button"

export default function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log("count: ", count);
  }, [count])

  const handleClick = () => {
    setCount(count + 1)
  }

  return <div>
    <h1>Count is {count}</h1>
    <Button onClick={handleClick}></Button>
  </div>
}