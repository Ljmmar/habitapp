import Headeradmin from "../helpers/Headeradmin"
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { dataBase } from "../database/config-firebase";
import { useEffect, useState } from 'react';


const Admin = () => {

  const [customers, setCostumers] = useState([])

  const getCustomers = async () => {
    const customerCollection = collection(dataBase, "clientes")
    const data = await getDocs(customerCollection)
    setCostumers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  const deletesolicitud = async (id) => {
    let solicitudeliminar = doc(dataBase, "clientes", id)
    await deleteDoc(solicitudeliminar)
    getCustomers()
  }

  useEffect(() => {
    getCustomers()
  }, [])

  return (
    <section >
      <Headeradmin />
      <section className="galeria">
        {customers.map((customer) => (
          <section className="cards" key={customer.id}>
            <ul>
              <li>
                {customer.nombrecliente}
              </li>
              <li>
                {customer.numerocliente}
              </li>
              <li>
                {customer.correocliente}
              </li>
              <li>
                {customer.mensajecliente}
              </li>
              <button onClick={() => { deletesolicitud(customer.id) }} type='buttom'>Eliminar</button>
            </ul>
          </section>
        ))}
      </section>

    </section>
  )
}

export default Admin