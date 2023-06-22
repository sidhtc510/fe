import CreateCardsList from "../CreateCardsList";
import CreatorsContainer from "../CreatorsContainer";
import Discover from "../Discover";
import Footer from "../Footer";
import Nav from "../Nav";
import SuperHotDrops from "../SuperHotDrops";

function App() {
    return (
        <>
            <Nav />
            <Discover />
            <CreateCardsList />
            <CreatorsContainer />
            <SuperHotDrops />
            <Footer />
        </>
    );
}

export default App;
