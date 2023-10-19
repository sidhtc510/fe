
import Container from "../Container";
import HeaderLinks from "../HeaderLinks";

const Header = () => {
    const links =[
        {name: 'home', path: '/'},
        {name: 'products', path: '/product'},
    ]
    return (
        <header>
            <Container className="flex gap-2">
                <HeaderLinks links={links}/>
            </Container>
        </header>
    );
};

export default Header;
