import Headeradmin from "../helpers/Headeradmin"
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { dataBase } from "../database/config-firebase";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {

  const [customers, setCostumers] = useState([])

  const getCustomers = async () => {
    const customerCollection = collection(dataBase, "clientes")
    const data = await getDocs(customerCollection)
    setCostumers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
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
            </ul>
          </section>
        ))}
      </section>

    </section>
  )
}

export default Admin