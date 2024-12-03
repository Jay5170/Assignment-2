"use client";  // This directive ensures the file is treated as a client component

import React, { useState, useEffect } from 'react';

const Search = ({ setFilteredGames, games }) => {
  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Effect to filter games based on the search query
  useEffect(() => {
    // Filter games to ensure they have complete data
    let filtered = games.filter(game => game.title && game.platform && game.score && game.genre && game.editors_choice);

    // Further filter games based on the search query
    if (searchQuery) {
      filtered = filtered.filter(game => game.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // Update the filtered games state
    setFilteredGames(filtered);
  }, [searchQuery, games, setFilteredGames]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <label htmlFor="search-input" className='text-4xl'>Search by Title: </label>
      <input
        id="search-input"
        className='rounded bg-slate-800 text-2xl'
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a game title..."
        style={{ marginLeft: '10px' }}
      />
    </div>
  );
};

export default Search;
