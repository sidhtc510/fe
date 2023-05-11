import React from "react";

export default function Test() {
  //   const products = [
  //     { id: 1, title: "велосипед", price: 4300, discount: 5 },
  //     { id: 2, title: "ролики", price: 400, discount: 10 },
  //     { id: 3, title: "самокат", price: 500, discount: 7 },
  //     { id: 4, title: "лыжи", price: 2300, discount: 5 },
  //     { id: 5, title: "коньки", price: 720, discount: 12 },
  //     { id: 6, title: "сноуборд", price: 1200, discount: 5 },
  //   ];

  const products = [
    {
      id: 1,
      title: "велосипед",
      price: 4300,
      discount: 5,
      marks: [5, 4, 4, 5, 4, 5],
    },
    { id: 2, title: "ролики", price: 400, discount: 10, marks: [2, 3, 2] },
    {
      id: 3,
      title: "самокат",
      price: 500,
      discount: 7,
      marks: [4, 4, 3, 4, 5],
    },
    { id: 4, title: "лыжи", price: 2300, discount: 5, marks: [3, 3, 4, 3, 2] },
    {
      id: 5,
      title: "коньки",
      price: 720,
      discount: 12,
      marks: [3, 4, 4, 4, 4],
    },
    { id: 6, title: "сноуборд", price: 1200, discount: 5, marks: [] },
  ];


//   сформировать массив из объектов со свойствами title и avgMark (средняя оценка)
//   сформировать массив из объектов со свойствами title и avgMark (средняя оценка)


// const result = products.reduce((acc, {marks}) => acc + marks.reduce((acc, item) => (acc +item, 0), 0)); 



  return (
    <div>
      {/* {console.log(products.map(el=>el.title))} */}
      {/* {console.log(products.map(({title, price})=>({title, price})))} */}
      {/* {console.log(products.map(({title, price, discount})=>({title, price: price-(price*discount/100)})))} */}
      {/* {console.log(products.filter((el) => el.discount >= 10))} */}
      {/* {console.log(products.filter((el) => el.discount >= 10).map(el=>el.title))} */}
      {/* {console.log(products.reduce((acc, el) => acc + el.price, 0))} */}
      {/* {console.log(products.reduce((acc, el) => acc + el.price-el.price*el.discount/100, 0))} */}
      {/* {console.log(products.filter((el) => el.discount === 5).reduce((acc, el) => acc + el.price-el.price*el.discount/100,0))} */}

      {/* {console.log(
        products.map(({ title, marks }) => ({
          title,
          avgMarks: (marks.reduce((acc, el) => acc + el, 0) / marks.lenght) || null,
        }))
      )} */}

      {/* {console.log(
        products.map((el) => el.marks).reduce((acc, el) => acc + el, 0)
      )} */}

      {
      // console.log(Math.max(...products.map(el=>el.marks.length)))

      
      }
    </div>
  );
}
