"use client";  // This directive ensures the file is treated as a client component

import React, { useState, useEffect } from 'react';

const Filter = ({ setFilteredGames, games }) => {
  // State to manage the selected platform for filtering
  const [selectedPlatform, setSelectedPlatform] = useState("All");

  // Effect to filter games based on the selected platform
  useEffect(() => {
    // Filter games to ensure they have complete data
    let filtered = games.filter(game => game.title && game.platform && game.score && game.genre && game.editors_choice);

    // Further filter games based on the selected platform
    if (selectedPlatform !== "All") {
      filtered = filtered.filter(game => game.platform === selectedPlatform);
    }

    // Update the filtered games state
    setFilteredGames(filtered);
  }, [selectedPlatform, games, setFilteredGames]);

  // Create a set of unique platforms from the games data, filtering out empty strings or undefined values
  const platforms = Array.from(new Set(games.map(game => game.platform).filter(Boolean)));

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <label htmlFor="platform-select" className='text-3xl'>Sort by Platform: </label>
      <select
        id="platform-select"
        value={selectedPlatform}
        className='bg-slate-800 text-3xl border-transparent rounded'
        onChange={(e) => setSelectedPlatform(e.target.value)}
        style={{ marginLeft: '10px' }}
      >
        <option value="All">All</option>
        {platforms.map((platform, index) => (
          <option key={index} value={platform}>{platform}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
