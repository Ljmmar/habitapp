import { dataBase } from "../database/config-firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "../helpers/Header"
import Footer from "../helpers/Footer"



export const Details = () => {
    const [tipoPropiedad, setTipoPropiedad] = useState('');
    const [ubicacionPropiedad, setUbicaccionPropiedad] = useState('');
    const [valorPropiedad, setValorPropiedad] = useState('');
    const [imagenPropiedad, setimagenPropiedad] = useState('');
    const [habitacionesPropiedad, sethabitacionesPropiedad] = useState('');
    const [banosPropiedad, setBanosPropiedad] = useState('');
    const [parqueaderoPropiedad, setParqueaderoPropiedad] = useState('');
    const [descripcionPropiedad, setDescripcionPropiedad] = useState('');


    let { id } = useParams();



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
        <section className="details-section">
            <Header />
            <div className="details-container">
                <div className="property-details">
                    <ul>
                    <img className="property-image" src={imagenPropiedad} alt={tipoPropiedad} />
                    <p>{descripcionPropiedad}</p>
                    </ul> 
                    <ul>
                        <p> {tipoPropiedad}</p>
                        <p>Valor; {valorPropiedad}</p>
                        <p>Locacion: {ubicacionPropiedad}</p>
                        <p>Habitaciones: {habitacionesPropiedad}</p>
                        <p>Baños: {banosPropiedad}</p>
                        <p>Parqueaderos: {parqueaderoPropiedad}</p>            
                    </ul>        
                </div>
                <div className="customer-details">
                    <form className="customer-form">
                        <input type="text" name="nombre" placeholder="Nombre" />
                        <br />
                        <input type="tel" name="celular" placeholder="Celular" />
                        <br />
                        <input type="email" name="correo" placeholder="Correo" />
                        <br />
                        <textarea name="mensaje" placeholder="Dejanos un mensaje"></textarea>
                        <br />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
 
            <Footer />     
        </section>
    );
};

export default Details;