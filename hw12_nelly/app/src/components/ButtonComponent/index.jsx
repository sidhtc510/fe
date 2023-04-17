import React, { useState } from "react";
import Button from '@mui/material/Button';


export default function ButtonComponent() {
  const colorsArray = ["red", "green", "orangered", "blue", '#8e44ad'];
  const [colorIndex, setColorIndex] = useState(0);
  let color = colorsArray[colorIndex];

  const changeColor = () => {
    setColorIndex((colorIndex + 1) % colorsArray.length);
  };

  return (
    <div>
      <div>task2</div>
      <Button variant="contained"style={{ background: color }} onClick={changeColor}>
        Click me
      </Button>

      <div>task1</div>
    </div>
  );
}
