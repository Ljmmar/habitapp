import { dataBase } from "../database/config-firebase";
import { collection, updateDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Headeradmin from "../helpers/Headeradmin";


export const Edit = () => {
    const [tipoPropiedad, setTipoPropiedad] = useState('');
    const [ubicacionPropiedad, setUbicaccionPropiedad] = useState('');
    const [valorPropiedad, setValorPropiedad] = useState('');

    const List = useNavigate();

    let { id } = useParams();

    const updatePropiedad = async () => {
        let propiedadCollection = getDoc(doc(dataBase, "propiedades", id))
        let propiedadNueva = {
            tipoPropiedad,
            ubicacionPropiedad,
            valorPropiedad
        }
        await updateDoc(propiedadCollection, propiedadNueva)
        List('/list')
    }

    const getPropiedades = async () => {
        let propiedadCollection = await getDoc(doc(dataBase, "propiedades", id))
        let data = propiedadCollection.data();

        setTipoPropiedad(data.tipoPropiedad);
        setUbicaccionPropiedad(data.ubicacionPropiedad);
        setValorPropiedad(data.valorPropiedad);
    }
    useEffect(() => {
        getPropiedades(id)
    }, [id])


    return (
        <section className="create-section" >
            <Headeradmin />
            <form className="create-form">
                <input value={tipoPropiedad} onChange={(e) => setTipoPropiedad(e.target.value)} placeholder="Tipo de propiedad" type="text" />
                <input value={ubicacionPropiedad} onChange={(e) => setUbicaccionPropiedad(e.target.value)} placeholder="Ubicaccion propiedad" type="text" />
                <input value={valorPropiedad} onChange={(e) => setValorPropiedad(e.target.value)} placeholder="valor propiedad" type="text" />
                <button onClick={updatePropiedad} type="button">Editar Propiedad</button>
            </form>
        </section>
    )
}

export default Edit
