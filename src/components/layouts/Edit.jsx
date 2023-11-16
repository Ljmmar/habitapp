import { dataBase } from "../database/config-firebase";
import { collection, updateDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Headeradmin from "../helpers/Headeradmin";


export const Edit = () => {
    const [imagenPropiedad, setimagenPropiedad] = useState(null);
    const [tipoPropiedad, setTipoPropiedad] = useState('');
    const [ubicacionPropiedad, setUbicaccionPropiedad] = useState('');
    const [valorPropiedad, setValorPropiedad] = useState('');

    const List = useNavigate();

    let { id } = useParams();
    return (
        <div>Edit</div>
    )
}
