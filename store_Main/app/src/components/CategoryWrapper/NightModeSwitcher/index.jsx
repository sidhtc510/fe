import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {nightModeAction} from '../../../store/reducers/nightModeReducer'

export default function NightModeSwitcher() {
      const dispatch = useDispatch();
      const { nightMode } = useSelector((state) => state);


      return (
            <div>
                  <button onClick={()=>dispatch(nightModeAction())}>
                        {nightMode ? "Day mode" : "Night mode"}
                  </button>
            </div>
      );
}
