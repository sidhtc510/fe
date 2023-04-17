import React, { useState } from 'react'

export default function SomeComponent() {
    const [backgroundColor, setBackgroundColor] = useState('white');

    const handleClick = (el) => {
      setBackgroundColor(el);
    };
  
    return (
      <div onClick={()=>handleClick('orange')} style={{ backgroundColor }}>
       Some Component
      </div>
    );
}
