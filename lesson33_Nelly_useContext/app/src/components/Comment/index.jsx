import React, { useContext } from "react";
import { Context } from "../../context";

export default function Comment({ id, comment, post_id }) {
  const { delete_comment } = useContext(Context);

  return <div onClick={() => delete_comment(post_id, id)}>{comment}</div>;
}
