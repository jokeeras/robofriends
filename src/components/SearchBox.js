import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input
            className='pa3 ba searchBg'
            type='search'
            placeholder='Search robots...'
            onChange={searchChange} 
            />
        </div>
    );
}

export default SearchBox;