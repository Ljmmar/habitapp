import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { dataBase } from "../database/config-firebase";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Headeradmin from '../helpers/Headeradmin'

const List = () => {
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
            <Headeradmin />
            <section className="galeria">
                {propiedades.map((propiedad) => (

                    <section className="cards" key={propiedad.id}>
                        <img className="imagenes" src={propiedad.imagenPropiedad} alt={propiedad.tipoPropiedad} />
                        <ul>
                            <li>
                                {propiedad.tipoPropiedad}
                            </li>
                            <li>
                              Locacion: {propiedad.ubicacionPropiedad}
                            </li>
                            <li>
                                Valor: {propiedad.valorPropiedad}
                            </li>
                            <li>
                               Habitaciones: {propiedad.habitacionesPropiedad}
                            </li>
                            <li>
                               Baños: {propiedad.banosPropiedad}
                            </li>
                            <li>
                               Parqueaderos: {propiedad.parqueaderoPropiedad}
                            </li>
                        </ul>
                        <p>{propiedad.descripcionPropiedad}</p>
                        <section>
                            <button onClick={() => { deletePropiedades(propiedad.id) }} type='buttom'>Eliminar</button>
                            <button type='buttom'><Link to={'/edit/' + propiedad.id}>Editar</Link></button>
                        </section>
                    </section>
                ))
                }
            </section>
        </section>
    )
}

export default List