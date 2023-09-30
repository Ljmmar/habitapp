import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <h1 >Habitapp</h1>

            <div className="logo">
                <Link to={'/'}> <img src='./public/icons/casa.png' alt="Logo" /></Link>


            </div>
            <div className='options'>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/projects'}>Projects</Link>
                <Link to={'/onsale'}>On sale</Link>
            </div>
            <div className="searchh">
                <input type="text"  placeholder="Search"/>
                <span class="icono">&#128269;</span>
            </div>
        </header>
    )
}
export default Header