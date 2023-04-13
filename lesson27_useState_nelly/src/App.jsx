import { useState } from "react";
import WinesContainer from "./components/WinesContainer/WinesContainer";
import { wine } from "./data/wine";

function App() {
  const [cards, setCards] = useState(wine);
  const deleteCard = (id) => setCards(cards.filter((el) => el.id !== id));

  return (
    <div>
      <WinesContainer cards={cards} delete_card={deleteCard} />
    </div>
  );
}

export default App;
