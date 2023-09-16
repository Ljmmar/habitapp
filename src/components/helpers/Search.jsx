const Search =()=>{
    return(
        <section>
        <div className="search-bar">
          <select name="city" id="city">
            <option value="">Select City</option>
            <option value="1">Medellin</option>
            <option value="2">Envigado</option>
            <option value="3">Poblado</option>
            <option value="4">Itagui</option>
            <option value="5">Sabaneta</option>
            <option value="6">Bello</option>
          </select>
          <select name="type" id="type">
            <option value="">Select type</option>
            <option value="1">House</option>
            <option value="2">Apartment</option>
            <option value="3">Loft</option>
            <option value="4">Store</option>
            <option value="4">Office</option>
          </select>
          <button>Search</button>
        </div>
     </section>
    )
}

export default Search