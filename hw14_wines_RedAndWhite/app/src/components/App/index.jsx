import { useEffect, useState } from "react";
import "../../App.css";
import { wines_white, wines_red } from "../../data/req.js";

function App() {
  const [winesRedState, setWinesRedState] = useState([]);
  const [winesWhiteState, setWinesWhiteState] = useState([]);

useEffect(()=>{
  wines_red(setWinesRedState)
},[])

useEffect(()=>{
  wines_white(setWinesWhiteState)
},[])

  return (
    <div>
      {console.log(winesRedState)}
      {console.log(winesWhiteState)}
    </div>
  );
}

export default App;

// Используя api по ссылке https://sampleapis.com/api-list/wines, отрисовать карточки напитков двух категорий - Red wines и White wines. Для этого вам понадобится отправить два запроса, создать два состояния и отрисовать два контейнера - для красных и белых вин.
// Для выполнения задачи вам понадобятся хуки useState() и useEffect()
