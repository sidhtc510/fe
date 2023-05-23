import "./App.css";
import React, { useEffect } from 'react'
import CommentsContainer from './components/CommentsContainer'
import { useDispatch } from "react-redux";
import { commentsAction } from "./store/asyncActions/commentsAction";

export default function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(commentsAction)
  })

  return (
    <div>
      <CommentsContainer />
    </div>
  )
}
