import React, { Component } from "react";
import { goods } from "../../data/wines";
import { GoodIndividualRender } from "../GoodIndividualRender/GoodIndividualRender";
import { useParams } from "react-router-dom";

export default function GoodIndividual() {
  const params = useParams();
  const id = parseInt(params.id);

  return (
    <div>
      {window.scrollTo(0, 0)}
      {goods
        .filter((item) => item.id === id)
        .map((item) => (
          <GoodIndividualRender {...item} key={item.id} />
        ))}
      
    </div>
  )
}
