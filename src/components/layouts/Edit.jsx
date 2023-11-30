import { dataBase } from "../database/config-firebase";
import { collection, updateDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Swal from "sweetalert2";
import Headeradmin from "../helpers/Headeradmin";


export const Edit = () => {


    const [tipoPropiedad, setTipoPropiedad] = useState('');
    const [ubicacionPropiedad, setUbicaccionPropiedad] = useState('');
    const [valorPropiedad, setValorPropiedad] = useState('');
    const [habitacionesPropiedad, sethabitacionesPropiedad] = useState('');
    const [banosPropiedad, setBanosPropiedad] = useState('');
    const [parqueaderoPropiedad, setParqueaderoPropiedad] = useState('');
    const [descripcionPropiedad, setDescripcionPropiedad] = useState('');
    const [imagenPropiedad, setimagenPropiedad] = useState('');

    const List = useNavigate();

    let { id } = useParams();

    const updatePropiedad = async () => {
        let propiedadCollection = (doc(dataBase, "propiedades", id))
        let propiedadNueva = {
            tipoPropiedad,
            ubicacionPropiedad,
            valorPropiedad,
            habitacionesPropiedad,
            banosPropiedad,
            parqueaderoPropiedad,
            descripcionPropiedad
        }

        const result = await Swal.fire({
            title: "Quieres guardar los cambios?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Guardar",
            denyButtonText: `No guardar`,
        });

        if (result.isConfirmed) {
            
            await updateDoc(propiedadCollection, propiedadNueva);
            List("/list");
            Swal.fire("Registro guardado!", "", "satisfactoriamente");
        } else if (result.isDenied) {
            
            Swal.fire("Los cambios no se guardaron", "", "info");
        }
        
        
    }

    const getPropiedades = async (id) => {
        let propiedadCollection = await getDoc(doc(dataBase, "propiedades", id))
        let data = propiedadCollection.data();

        setimagenPropiedad(data.imagenPropiedad)
        setTipoPropiedad(data.tipoPropiedad);
        setUbicaccionPropiedad(data.ubicacionPropiedad);
        setValorPropiedad(data.valorPropiedad);
        setBanosPropiedad(data.banosPropiedad)
        sethabitacionesPropiedad(data.habitacionesPropiedad)
        setParqueaderoPropiedad(data.parqueaderoPropiedad)
        setDescripcionPropiedad(data.descripcionPropiedad)

    }
    useEffect(() => {
        getPropiedades(id)
    }, [id])


    return (
        <div>
            <Headeradmin />
     
        <section className="create-section" >
            
            <img className="property-image" src={imagenPropiedad} alt={tipoPropiedad} />
            <form className="create-form">
                <input value={tipoPropiedad} onChange={(e) => setTipoPropiedad(e.target.value)} placeholder="Tipo de propiedad" type="text" />
                <input value={ubicacionPropiedad} onChange={(e) => setUbicaccionPropiedad(e.target.value)} placeholder="Ubicaccion propiedad" type="text" />
                <input value={valorPropiedad} onChange={(e) => setValorPropiedad(e.target.value)} placeholder="valor propiedad" type="text" />
                <input value= {habitacionesPropiedad} onChange={(e) => sethabitacionesPropiedad(e.target.value)} placeholder="Habitaciones" type="text" />
                <input value= {banosPropiedad} onChange={(e) => setBanosPropiedad(e.target.value)} placeholder="Baños" type="text" />
                <input value= {parqueaderoPropiedad} onChange={(e) => setParqueaderoPropiedad(e.target.value)} placeholder="Parqueadero" type="text" />
                <textarea value= {descripcionPropiedad} onChange={(e) => setDescripcionPropiedad(e.target.value)} placeholder="Descripcion"  />
                <button onClick={updatePropiedad} type="button">Editar Propiedad</button>
            </form>
        </section>
        </div>
    )
}

export default Edit
