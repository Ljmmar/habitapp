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
            <section>
                {
                    propiedades.map((propiedad) => (
                        <section key={propiedad.id}>
                            {/* <img src={propiedad.imagenPropiedad} alt="" /> */}
                            <p>{propiedad.tipoPropiedad}</p>
                            <p>{propiedad.ubicacionPropiedad}</p>
                            <p>{propiedad.valorPropiedad}</p>
                            <section>
                                <button onClick={() => { deletePropiedades(propiedad.id) }} type='buttom'>Eliminar</button>
                                <button type='buttom'><Link to={'/editar-propiedad/' + propiedad.id}>Editar</Link></button>
                            </section>
                        </section>
                    ))
                }
            </section>
        </section>
    )
}

export default List