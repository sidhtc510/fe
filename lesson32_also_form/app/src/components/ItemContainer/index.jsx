import React from "react";
import Item from "../Item";

export default function ItemContainer({ people }) {

  let sumAge = people.reduce((acc, person) => acc += person.age, 0);
 
  return (
    
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age (Amount-{sumAge}, Average-{Math.round(sumAge/people.length)})</th>
          </tr>
        </thead>
        <tbody>
          {people.map((el) => (
            <Item key={el.id} {...el} />
          ))}
        </tbody>
      </table>
     
  );
}
