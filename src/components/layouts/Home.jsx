import Header from "../helpers/Header"

import Footer from "../helpers/Footer"
import Search from "../helpers/Search"


import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { dataBase } from "../database/config-firebase";
import { useEffect, useState } from 'react';

const Home = () => {
  const [propiedades, setPropiedades] = useState([])

  const getPropiedades = async () => {
    const propiedadesCollection = collection(dataBase, 'propiedades')
    const data = await getDocs(propiedadesCollection)

    setPropiedades(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

  };


  const deletePropiedades = async (id) => {
    let propiedadEliminar = doc(dataBase, "propiedades", id)
    await deleteDoc(propiedadEliminar)
    getPropiedades()

  }

  useEffect(() => {

    getPropiedades()
  }, [])

  return (
    <section>
      <Header />
      <Search />


      <section className="galeria">
        {propiedades.map((propiedad) => (

          <section className="cards" key={propiedad.id}>
            <img className="imagenes" src={propiedad.imagenPropiedad} alt={propiedad.tipoPropiedad} />
            <p>{propiedad.tipoPropiedad}</p>
            <p>{propiedad.ubicacionPropiedad}</p>
            <p>{propiedad.valorPropiedad}</p>

          </section>
        ))
        }
      </section>

      <Footer />
    </section>
  )
}
export default Home