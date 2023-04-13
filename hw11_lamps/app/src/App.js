import "./App.css";
import Header from "./components/Header";
import IntroWrapper from "./components/IntroWrapper";
import ActualOrder from "./components/ActualOrder";
import Footer from "./components/Footer";
import ModalWindowForActualOrder from "./components/ModalWindowForActualOrder";

function App() {
  return (
    <div>
      <ModalWindowForActualOrder />
      <Header />
      <IntroWrapper />
      <ActualOrder />
      <Footer />
    </div>
  );
}

export default App;
