import { Link } from "react-router-dom";

export default function Header() {
    const styles = {
        display: "flex",
        gap: "20px",
        padding: "40px",
        border: "2px solid gray",
        borderRadius: "8px",
        width: "fit-content",
        margin: "10px"
    };
    return (
        <div style={styles}>
            <Link to="/">Main page</Link>
            <Link to="/another_page">Another page</Link>
            <Link to="/another_page_two">Another page_two</Link>
        </div>
    );
}
