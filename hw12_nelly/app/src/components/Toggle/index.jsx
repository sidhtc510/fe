import React, { useState } from "react";
import s from "./style.module.css";
import { Checkbox } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';

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
  const [isChecked, setIsChecked] = useState(true);

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <span className="slider round">{isChecked ? "On" : "Off"}</span>
        </label>
      </div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label={checked ? "On (mui)" : "Off  (mui)"}
      />
    </div>
  );
}
