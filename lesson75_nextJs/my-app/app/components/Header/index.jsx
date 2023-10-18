import Link from "next/link";
import Container from "../container";

const Header = () => {
    return (
        <header>
            <Container className="flex gap-2">
                <Link href="/" className="border-b-2 border-orange-600">
                    home
                </Link>
                <Link href="/product" className="border-b-2 border-orange-600">
                    product
                </Link>
            </Container>
        </header>
    );
};

export default Header;
