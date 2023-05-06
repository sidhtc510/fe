import React from "react";

export default function Pagination(props) {
  const { setCurrentPage, countElem, currentPage } = props;

  const numberPage = [];

  for (let i = 1; i <= countElem; i++) {
    numberPage.push(i);
  }

  const formHandle = (e) => {
    if (e.key === "Enter")
      setCurrentPage(e.target.value > countElem ? countElem : e.target.value);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        {numberPage.map((elem) => (
          <div
            key={elem.id}
            onClick={() => setCurrentPage(elem)}
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: currentPage === elem ? "brown" : "purple",
              textAlign: "center",
              color: "white",
              cursor: "pointer",
            }}
          >
            {elem}
          </div>
        ))}
      </div>
      <input onKeyDown={formHandle} type="text" placeholder="enter nuber" />
    </div>
  );
}
