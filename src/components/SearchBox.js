import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--orange bg-lightest-orange'
        type='search'
        placeholder='search cats'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;