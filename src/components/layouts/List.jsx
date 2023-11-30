import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { dataBase } from "../database/config-firebase";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Headeradmin from '../helpers/Headeradmin'
import 'bootstrap/dist/css/bootstrap.min.css'

const List = () => {
    const [propiedades, setPropiedades] = useState([])

    const getPropiedades = async () => {
        const propiedadesCollection = collection(dataBase, 'propiedades')
        const data = await getDocs(propiedadesCollection)

        setPropiedades(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    };

    
    const deletePropiedades = async (id) => {
        
        await Swal.fire({
            title: "Está seguro de eliminar?",
            text: "Esta acción no se puede revertir!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#439158",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminar!"
        }).then(async (result)=>{
            if (result.isConfirmed){
                let propiedadEliminar = doc(dataBase, "propiedades", id)

                await deleteDoc(propiedadEliminar)
                getPropiedades()
                Swal.fire({
                    title: "Eliminado!",
                text: "El registro ha sido borrado.",
                    icon: "success"
                })
            }
        })         
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
                        <img class="card-img-top" src={propiedad.imagenPropiedad} alt={propiedad.tipoPropiedad} />
                        <p>Codigo de propiedad: {propiedad.codigoPropiedad}</p>
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