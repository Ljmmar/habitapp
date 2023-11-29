import Header from "../helpers/Header"
import { dataBase } from "../database/config-firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react"

export const Contact = () => {
    const [nombrecliente, setNombrecliente] = useState('');
    const [numerocliente, setNumerocliente] = useState('');
    const [correocliente, setCorreocliente] = useState('');
    const [mensajecliente, setMensajecliente] = useState('');


    const addcustomerdata = async () => {
        const customerCollection = collection(dataBase, 'clientes');
        const clientenuevo = {
            nombrecliente,
            numerocliente,
            correocliente,
            mensajecliente
        };
        await addDoc(customerCollection, clientenuevo);
        alert('Propiedad ingresada correctamente');

    };
    return (
        <section>
            <Header />
            <h3>Contact</h3>
            <ul>
                <li>Email: Habitapp@gmail.com</li>
                <li>Phone: (123) 456-7890</li>
            </ul>
            <div className="customer-details">
                    <form className="customer-form">
                        <input onChange={(e) => setNombrecliente(e.target.value)} type="text" placeholder="Nombre" />
                        <br />
                        <input onChange={(e) => setNumerocliente(e.target.value)} type="text" placeholder="Celular" />
                        <br />
                        <input onChange={(e) => setCorreocliente(e.target.value)} type="email" placeholder="Correo" />
                        <br />
                        <textarea onChange={(e) => setMensajecliente(e.target.value)} placeholder="Dejanos un mensaje"></textarea>
                        <br />
                        <button onClick={addcustomerdata} type="button">Enviar</button>
                    </form>
                </div>
        </section>
    )
}
export default Contact