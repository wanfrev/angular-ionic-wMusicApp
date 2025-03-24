import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', query);
    // Aquí puedes agregar la lógica de búsqueda
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Buscar..."
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;