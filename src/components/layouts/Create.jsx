import { dataBase } from "../database/config-firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import Headeradmin from "../helpers/Headeradmin";

const Create = () => {
  const [imagenPropiedad, setimagenPropiedad] = useState(null);
  const [tipoPropiedad, setTipoPropiedad] = useState('');
  const [ubicacionPropiedad, setUbicaccionPropiedad] = useState('');
  const [valorPropiedad, setValorPropiedad] = useState('');

  const List = useNavigate();

  const addImageUpload = async () => {
    const storage = getStorage();
    const storageRef = ref(storage, `property_images/${imagenPropiedad.name}`);
    await uploadBytes(storageRef, imagenPropiedad);
    return getDownloadURL(storageRef);
  };

  const addPropiedad = async () => {

      const imageUrl = await addImageUpload ();

      const propiedadCollection = collection(dataBase, 'propiedades');

      const propiedadNueva = {
        imagenPropiedad: imageUrl,
        tipoPropiedad,
        ubicacionPropiedad,
        valorPropiedad
      };

      await addDoc(propiedadCollection, propiedadNueva);
      List('/list');
    
  };

  return (
    <section className="create-section">
      <Headeradmin />
      <form className="create-form">
        <input onChange={(e) => setTipoPropiedad(e.target.value)} placeholder="Tipo de propiedad" type="text"/>
        <input onChange={(e) => setUbicaccionPropiedad(e.target.value)} placeholder="Ubicacion propiedad" type="text"/>
        <input onChange={(e) => setValorPropiedad(e.target.value)} placeholder="Valor propiedad" type="text"/>
        <input onChange={(e) => setimagenPropiedad(e.target.files[0])} type="file"/>
        <button onClick={addPropiedad} type="button"> Agregar Propiedad  </button>
      </form>
    </section>
  );
};

export default Create;