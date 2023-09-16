import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <h1 >Habitapp</h1>

            <div className="logo">
            <Link to={'/'}> <img src='./public/icons/casa.png' alt="Logo" /></Link>
            

            </div>
            <div className='options'>
                <Link to={'/'}>Home</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/projects'}>Projects</Link>
                <Link to={'/onsale'}>On sale</Link>
            </div>
        </header>
    )
}
export default Header