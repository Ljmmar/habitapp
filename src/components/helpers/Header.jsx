import { Link } from "react-router-dom"

const Header = () => {
    return (
        <section className="headerr">
            <div className="logo">
                <Link to={'/'}> <img src='./public/icons/logoH.png' alt="Logo" /></Link>
            </div>
        <header > 
            <div className='options'>
                <Link to={'/contact'}>Contacto</Link>
                <Link to={'/projects'}>Projectos</Link>
                <Link to={'/onsale'}>En Venta</Link>
            </div>
            <div>
            <Link to={'/login'}> <img src='./public/icons/user.png' alt="Logo" /></Link>   
            </div>
        </header>
        </section>
    )
}
export default Header