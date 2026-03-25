import React from 'react'
import './SearchBar.css' // ✅ Import CSS

function SearchBar({setSearch}) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="🔍 Search by name or email..."
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
