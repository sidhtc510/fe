import React, { useContext } from 'react'
import { Context } from '../../context';

export default function AddFormCard() {

    const {addPerson} =useContext(Context)

    const submit = event => {
        event.preventDefault();

        const person = {
            id: Date.now(),
            name: event.target.name.value,
            surname: event.target.surname.value,
            age: event.target.age.value
        }
        addPerson(person)
        event.target.reset();
        
    }
  return (
    <form className='formAddItem' onSubmit={submit}>
        <input type="text" placeholder='Name' name='name'/>
        <input type="text" placeholder='Surname' name='surname'/>
        <input type="text" placeholder='Age' name='age'/>
        <button>Add</button>
    </form>
  )
}
