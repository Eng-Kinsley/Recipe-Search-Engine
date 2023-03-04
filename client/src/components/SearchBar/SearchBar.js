import React, { useState } from 'react';

function SearchBar(props) {
  const [searchInput, setSearchInput] = useState('');

  function handleChange(event) {
    setSearchInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.searchRecipes(searchInput);
    setSearchInput('');
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter ingredients"
          value={searchInput}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
