import { Link } from "react-router-dom"

const Headeradmin = () => {
  return (
    <header>
      <div className="logo">
        <Link to={'/'}> <img src='./public/icons/LogoHabitapp.svg' alt="Logo" /></Link>
      </div>
      <div className='options'>
        <Link to='/admin'>Home</Link>
        <Link to='/list'>Listado Propiedades</Link>
        <Link to='/create'>Ingresar Propiedad</Link>
        <Link to='/login'>Cerrar sesion</Link>
      </div>
    </header>
  )
}

export default Headeradmin