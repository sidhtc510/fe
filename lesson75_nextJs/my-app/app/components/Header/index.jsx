
import Container from "../Container";
import HeaderLinks from "../HeaderLinks";

const Header = () => {
    const links =[
        {name: 'home', path: '/'},
        {name: 'products', path: '/product'},
        {name: 'users', path: '/users'},
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
