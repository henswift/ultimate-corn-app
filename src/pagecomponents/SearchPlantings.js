import React, { useContext } from 'react';
import { AppContext } from '../store/AppContext';

// Map of all of the plantings to return anything that matches the query. 
function SearchPlantings() {
    const {setApp} = useContext(AppContext);

    const search = () => {
        let searchTerm = prompt('What are you searching for?');
        setApp({type: 'search', payload: searchTerm})
    };

  return (
    <button onClick={search}>Search</button>
  );
};

export default SearchPlantings