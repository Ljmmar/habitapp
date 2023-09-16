import Header from "../helpers/Header"
import { galeria } from "../config/database"
import Footer from "../helpers/Footer"
import Search from "../helpers/Search"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <section>
      <Header />
      <Search />
      <section className="galeria">
        {
          galeria.map((img) => (
            <div className="cards">
              <img className="imagenes" src={img.img} alt="" />
              <h1>{img.nombre}</h1>
              <ul>
                <li >{img.d1}</li>
                <li >{img.d2}</li>
                <li >{img.d3}</li>
                <li >{img.d4}</li>
              </ul>
              <Link to={''}>{img.link}</Link>
            </div>
          ))
        }
      </section>
      <Footer />
    </section>
  )
}
export default Home