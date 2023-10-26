import { dataBase } from "../database/config-firebase"
import { collection,addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
 
import Headeradmin from "../helpers/Headeradmin"

const Create = () => {
const [imagenPropiedad, setimagenPropiedad] = useState('')   
const [tipoPropiedad, setTipoPropiedad] = useState('')
const [ubicacionPropiedad, setUbicaccionPropiedad] = useState('')
const [valorPropiedad, setValorPropiedad] = useState('')

const List = useNavigate()

const addPropiedad = async () =>{
  let propiedadCollection = collection(dataBase, 'propiedades')
  let propiedadNueva = {
    imagenPropiedad, tipoPropiedad, ubicacionPropiedad, valorPropiedad
  }
  await addDoc(propiedadCollection, propiedadNueva)
  List('/list')
}
    return (
        <section>
            <Headeradmin/>
            <form>
        <input onChange={(e)=> setTipoPropiedad(e.target.value)} placeholder="Tipo de propiedad" type="text" />
        <input onChange={(e)=> setUbicaccionPropiedad(e.target.value)} placeholder="Ubicacion propiedad" type="text" />
        <input onChange={(e)=> setValorPropiedad(e.target.value)} placeholder="Valor propiedad" type="text" />
        <input onChange={(e)=> setimagenPropiedad(e.target.value)} placeholder="url de la imagen" type="text" />
        <button onClick={addPropiedad} type="button">Agregar Propiedad</button>
      </form>
    </section>
      
    )
}

export default Create   