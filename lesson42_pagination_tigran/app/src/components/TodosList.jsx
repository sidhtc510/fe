
import React from 'react'

export default function TodosList({todos}) {
    console.log(todos);
  return (
    <div>   
        <ul>
            {
                todos.map(elem=>
                        <li key={elem.id}>
                            {elem.title} {elem.id}
                        </li>
                    )
            }
            </ul>    
    </div>
  )
}
