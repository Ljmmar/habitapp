import { Link } from "react-router-dom"

const Header = () => {
    return (
        <section className="headerr">
            <div className="logo">
                <Link to={'/'}> <img src='./public/icons/logoH.png' alt="Logo" /></Link>
            </div>
        <header className="he">
            
            <div className='options'>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/projects'}>Projects</Link>
                <Link to={'/onsale'}>On sale</Link>
            </div>
            <div>
            <Link to={'/login'}> <img src='./public/icons/user.png' alt="Logo" /></Link>   
            </div>
        </header>
        </section>
    )
}
export default Header