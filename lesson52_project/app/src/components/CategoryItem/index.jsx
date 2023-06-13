import React from "react";
import { Link } from "react-router-dom";

export default function CategoryItem({ title }) {
    return (
        <Link to={`/products/${title}`} className="category">
            {title}
        </Link>
    );
}
