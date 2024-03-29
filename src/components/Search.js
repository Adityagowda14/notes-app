import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({handleSearchNote}) => {
  return (
    <div className='search'>
        <MdSearch className='search-icons' size='1.3em'/>
        <input 
            onchange={(event) => handleSearchNote(event.target.value)}
            className='search-input'
            type='text' 
            placeholder='Type to search'/>
    </div>
  )
}

export default Search