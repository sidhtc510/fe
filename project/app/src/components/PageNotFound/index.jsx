import img from "./404.png";

import React from "react";

import Wrapper from "../UI/Wrapper";

export default function PageNotFound() {
    return (
        <Wrapper style={{ display: "flex", justifyContent: "center" }}>
            <img src={img} alt="" />
        </Wrapper>
    );
}
