import React from "react";

const Container = ({ children, className, ...props }) => {
    props["className"] = ["m-auto w-[740px]", className].join(" ");
    return <div {...props}>{children}</div>;
};

export default Container;
