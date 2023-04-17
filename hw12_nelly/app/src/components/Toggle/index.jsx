import React, { useState } from "react";
import s from "./style.module.css";

// export default function Toggle() {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleToggle = () => {
//     setIsChecked(!isChecked);
//   };

//   return (
//     <div>
//       <label className="switch">
//         <input type="checkbox" checked={isChecked} onChange={handleToggle} />
//         <span className="slider round">{isChecked ? "On" : "Off"}</span>
//       </label>
//     </div>
//   );
// }


export default function Toggle() {
const [isChecked, setIsChecked] = useState(true)

  return (
    <div>
      <div>
        <label className="switch">
          <input type="checkbox" checked={isChecked} onChange={()=>setIsChecked(!isChecked)}/>
          <span className="slider round">{isChecked ? "On" : "Off"}</span>
        </label>
      </div>
    </div>
  );
}
