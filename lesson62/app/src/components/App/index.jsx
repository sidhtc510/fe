import { useEffect } from "react";
import { fetchServices } from "../../store/slice/servicesSlice";
import { fetchSeanses } from "../../store/slice/seansesSlice";

import Contacts from "../Contacts";
import Main from "../Main";
import Nav from "../Nav";
import News from "../News";
import Seanses from "../Seanses";
import Services from "../Services";
import { useDispatch } from "react-redux";
import { fetchNews } from "../../store/slice/newsSlice";
import Test from "../Test";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchServices());
        dispatch(fetchSeanses());
        dispatch(fetchNews());
    }, [dispatch]);

    return (
        <>
            <Nav />
            <Main />
            <Services />
            <Seanses />
            <News />
            <Contacts />
            <Test />
        </>
    );
}

export default App;
