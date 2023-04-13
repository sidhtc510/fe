import React, { useState } from 'react'

export default function SomeComponent() {
    const [backgroundColor, setBackgroundColor] = useState('white');

    const handleClick = () => {
      setBackgroundColor('blue');
    };
  
    return (
      <div onClick={handleClick} style={{ backgroundColor }}>
       Some Component
      </div>
    );
}
