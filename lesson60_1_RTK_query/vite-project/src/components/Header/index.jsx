import { Link } from "react-router-dom"

function Header() {
    const style = {
        display:'flex',
        gap:'5px',
        fontSize: '22px',
    }
    const linkStyle = {
        textDecoration: 'underline',
        color: 'black'
    }
  return (
    <div style={style}>
        <Link style={linkStyle} to='/'>Home page</Link>
        <Link style={linkStyle} to='/cart'>Cart</Link>
    </div>
  )
}

export default Header