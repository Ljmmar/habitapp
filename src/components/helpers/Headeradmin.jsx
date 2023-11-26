import { Link } from "react-router-dom"

const Headeradmin = () => {
  return (
    <section className="headerr">
       <div className="logo">
                <Link to={'/'}> <img src='./public/icons/logoH.png' alt="Logo" /></Link>
            </div>
    <header>
    
      <div className='options'>
        <Link to='/admin'>Home</Link>
        <Link to='/list'>Listado Propiedades</Link>
        <Link to='/create'>Ingresar Propiedad</Link>
      </div>
      <div className='options'>
      <Link to='/login'>Cerrar sesion</Link>
      </div>
    </header>
    </section>
  )
}

export default Headeradmin