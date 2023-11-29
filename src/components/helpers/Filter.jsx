import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { dataBase } from '../database/config-firebase';
import { Link } from "react-router-dom"

const Filter = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const { tipoPropiedad, ubicacionPropiedad } = location.state;

  useEffect(() => {
    // Logica de la consulta
    let searchQuery = collection(dataBase, 'propiedades');

    // Se Agregan condiciones solo si los parámetros no están vacíos
    if (tipoPropiedad) {
      searchQuery = query(searchQuery, where('tipoPropiedad', '==', tipoPropiedad));
    }

    if (ubicacionPropiedad !== '') {
      searchQuery = query(searchQuery, where('ubicacionPropiedad', '==', ubicacionPropiedad));
    }

    const fetchData = async () => {
      const data = await getDocs(searchQuery);
      setResults(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchData();
  }, [tipoPropiedad, ubicacionPropiedad]);

  return (
    <div>
      <h2 className='busqueda'>Resultados de la búsqueda</h2>

      <div className="galeria">

        {results.length === 0 ? (
          <p>No se encontraron resultados de su búsqueda.</p>
        ) : (
          results.map((propiedad) => (
            <section className="cards" key={propiedad.id}>
              <Link to={'/details/' + propiedad.id}>  <img className="imagenes" src={propiedad.imagenPropiedad} alt={`Imagen de ${propiedad.tipoPropiedad}`} /></Link>
              <ul>
                <p>Codigo de propiedad: {propiedad.codigoPropiedad}</p>
                <li>
                  Tipo de Propiedad: {propiedad.tipoPropiedad}
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
                <li>
                  Descripción: {propiedad.descripcionPropiedad}
                </li>
              </ul>
              <section>
                <button type='buttom'><Link to={'/details/' + propiedad.id}>Ver mas</Link></button>
              </section>

            </section>
          ))
        )}
      </div>
    </div>
  );
};

export default Filter;
