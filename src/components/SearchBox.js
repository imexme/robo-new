import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='cll'
        type='search'
        placeholder='Search for robots'
        onChange={searchChange}
      />
    </div>

  );
}

export default SearchBox;