import React, { useState } from "react";

export default function ButtonComponent() {
  const colorsArray = ["red", "green", "yellow", "blue"];
  const [colorIndex, setColorIndex] = useState(0);
  let color = colorsArray[colorIndex];

  const changeColor = () => {
    setColorIndex((colorIndex + 1) % colorsArray.length);
  };

  return (
    <div>
      <div>task2</div>
      <button style={{ background: color }} onClick={changeColor}>
        click me
      </button>

      <div>task1</div>
    </div>
  );
}
