import React from "react";
import { useSelector } from "react-redux";
import CommentItem from '../CommentItem'

export default function CommentsContainer() {
  const comments = useSelector(state => state.comments);
console.log(comments);
  return <div>{
    comments.map(el=> <CommentItem {...el} key={el.id} />)
    }</div>;
}
