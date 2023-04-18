import { useState } from "react";
import "./App.css";
import CardsContainer from "./components/CardsContainer";
import { words } from "./data/words.js";
import Triggers from "./components/Triggers";
import AddCard from "./components/AddCard";

function App() {
  const [cards, setCards] = useState(words);

  const change_to_eng = () => {
    setCards(
      cards.map((el) => {
        el.lang = "eng";
        return el;
      })
    );
  };

  const change_to_rus = () => {
    setCards(
      cards.map((el) => {
        el.lang = "rus";
        return el;
      })
    );
  };

  const change_single_item = (id) => {
    setCards(
      cards.map((el) => {
        if (el.id === id) {
          if (el.lang === "rus") {
            el.lang = "eng";
          } else if (el.lang === "eng") {
            el.lang = "rus";
          }
        }
        return el;
      })
    );
  };

  const addCardF = (e) => {
    e.preventDefault();

    cards.push({
      id: Date.now(),
      rus: e.target.rus.value,
      eng: e.target.eng.value,
      lang: "eng"
    });

  setCards(cards.map(el=>{
    return el
  }))

  e.target.eng.value = ''
  e.target.rus.value = ''


  };

  return (
    <div>
      <AddCard addCardF={addCardF} />
      <CardsContainer
        cards={cards}
        change_single_item={change_single_item}
        key={cards.id}
      />
      <Triggers {...{ change_to_eng, change_to_rus }} />
    </div>
  );
}

export default App;
