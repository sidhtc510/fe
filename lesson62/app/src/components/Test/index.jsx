import React, { useEffect, useRef } from "react";

export default function Test() {
    useEffect(() => console.log(elem), []);

    const elem = useRef();
    return <div ref={elem}></div>;
}
