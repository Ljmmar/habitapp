import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [tipoPropiedad, setTipoPropiedad] = useState('');
  const [ubicacionPropiedad, setUbicacionPropiedad] = useState('');
  const navigate = useNavigate();

  const handleTipoPropiedadChange = (e) => {
    setTipoPropiedad(e.target.value);
  };

  const handleUbicacionPropiedadChange = (e) => {
    setUbicacionPropiedad(e.target.value);
  };

  const handleSearch = () => {
    navigate('/filter-list', {
      state: { tipoPropiedad, ubicacionPropiedad },
    });
  };

  return (
    <section>
      <div className="search-bar">
        <select name="city" value={ubicacionPropiedad} onChange={handleUbicacionPropiedadChange}>         
          <option value="">Seleccionar Ciudad</option>
          <option value="Medellin">Medellin</option>
          <option value="Envigado">Envigado</option>
          <option value="Poblado">Poblado</option>
          <option value="Itagui">Itagüi</option>
          <option value="Sabaneta">Sabaneta</option>
          <option value="Bello">Bello</option>
          <option value="Niquia">Niquia</option>

        </select>
        <select name="type" value={tipoPropiedad} onChange={handleTipoPropiedadChange}>
          <option value="">Seleccionar tipo</option>
          <option value="Casa">Casa</option>
          <option value="Apartamento">Apartamento</option>
          <option value="Loft">Loft</option>
          <option value="lote">Lote</option>
          <option value="Oficina">Oficina</option>
        </select>
        <button onClick={handleSearch}>Buscar</button>
      </div>
    </section>
  );
};

export default Search;

