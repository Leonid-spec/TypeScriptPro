
import { useState } from "react";
import "./Lesson04.css";

export default function Lesson04():JSX.Element {
  //     let count =0;
  // const handlePlus = () => {
  //     count++;
  //     console.log(count);
  // }

  //   let result = useState(0);
  //   let count = result[0];
  //   let setCount = result[1];

  const [count, setCount] = useState<number>(0);

  const handlePlus = ():void => {
    setCount((prev) => prev + 1);
  };
  const handleMinus = ():void => {
    setCount((prev) => prev - 1);
  };
  const [isSwitched, setIsSwitched] = useState(false);

  const handleSwitch = () => {
    setIsSwitched((prev) => !prev);
  };

  return (
    <div>
      <h2>React useState() hook ⚓</h2>
      <div className="counter">
        <button onClick={handleMinus}>-</button>
        <span>{count}</span>
        <button onClick={handlePlus}>+</button>
        <div>
          <button className="switch" onClick={handleSwitch}>
            {isSwitched ? "Day " : "Night "}
          </button>
        </div>
      </div>
    </div>
  );
}
