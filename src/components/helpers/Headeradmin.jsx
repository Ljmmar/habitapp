import { Link } from "react-router-dom"

const Headeradmin = () => {
  return (
    <header>
        <nav>
            <Link to='/admin'>Home</Link>
            <Link to='/list'>Listado Propiedades</Link>
            <Link to='/create'>Ingresar Propiedad</Link>
        </nav>
    </header>
  )
}

export default Headeradmin