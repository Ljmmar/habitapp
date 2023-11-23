import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to={'/'}> <img src='./public/icons/LogoHabitapp.svg' alt="Logo" /></Link>
            </div>
            <div className='options'>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/projects'}>Projects</Link>
                <Link to={'/onsale'}>On sale</Link>
            </div>
      
        </header>
    )
}
export default Header