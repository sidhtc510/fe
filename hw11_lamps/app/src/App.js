import "./App.css";
import Header from "./components/Header";
import IntroWrapper from "./components/IntroWrapper";
import ActualOrder from "./components/ActualOrder";
import Footer from "./components/Footer";
import ModalWindowForActualOrder from "./components/ModalWindowForActualOrder";
import { useState } from "react";

function App() {
  const [modalState, setModalState] = useState(false);
  return (
    <div>
      <ModalWindowForActualOrder {...{modalState, setModalState}}/>
      <Header />
      <IntroWrapper />
      <ActualOrder {...{modalState, setModalState}}/>
      <Footer />
    </div>
  );
}

export default App;
