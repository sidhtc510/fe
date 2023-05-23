import React from "react";
import { useDispatch } from "react-redux";
import { fetchSingleUser } from "../../store/asyncActions/userAction";

export default function LoadUser() {
  const dispatch = useDispatch();

  const handler = (e) => {
    e.preventDefault();
    const id = +e.target.userId.value;
    dispatch(fetchSingleUser(id));
  };

  return (
    <form onSubmit={handler}>
      <input type="number" name="userId" />
      <button>Load</button>
    </form>
  );
}
