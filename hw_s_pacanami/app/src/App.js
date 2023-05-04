import { Context } from './context';
import { peopleDefault } from './data/users';
import './App.css';
import CardsContainer from './components/CardsContainer';
import { useState } from 'react';
import AddFormCard from './components/AddFormCard';


function App() {
 const [people, setPeople] = useState(peopleDefault)

 const remove = (id)=> {
  const newObj = people.filter(el => id !== el.id)
  setPeople(newObj)
 } 

 const addPerson = (obj) => setPeople([...people, obj])

  return (
    <div className="App">
      <Context.Provider value={{people, remove, addPerson}}>
        <AddFormCard />
        <CardsContainer  /> {/*data={peopleDefault}*/}
      </Context.Provider>
    </div>
  );
}

export default App;



//1. создать компонент CardsContainer который получает через context state проходится по нему циклом
// и генерирует Card 
//2. создать компонент card который получает через пропсы данные о деле и отображает их
//3. napisali funkziu remove i povesili slushatel sobitiy na cartu