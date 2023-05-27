import React from "react";

import { Link } from "react-router-dom";

const capitalized = (letter) => {
  return letter.charAt(0).toUpperCase() + letter.slice(1);
};

export default function Category({ name }) {
  return (
    <>
   

      <Link to={`/products/${name}`}>
        <div className="category_card">
          <p>{capitalized(name)}</p>
        </div>
      </Link>
    </>
  );
}
