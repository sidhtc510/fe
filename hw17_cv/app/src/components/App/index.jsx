import AboutMe from "../AboutMe";
import Home from "../Home";
import Nav from "../Nav";
import Wrapper from "../Wrapper";


function App() {
    return (
        <div>
            <Wrapper>
                <Nav />
                <Home />
                <AboutMe />
            </Wrapper>
        </div>
    );
}

export default App;
