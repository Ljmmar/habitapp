import React from 'react';
import Header from '../helpers/Header';
import Footer from '../helpers/Footer';
import Search from '../helpers/Search';
import Filter from '../helpers/Filter';

const FilterList = () => {
  return (
    <div>
      <Header />
      <Search />
      <Filter />
      <Footer />
    </div>
  );
};

export default FilterList;
