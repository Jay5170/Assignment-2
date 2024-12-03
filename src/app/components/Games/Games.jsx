"use client";  // This directive ensures the file is treated as a client component

import React from 'react';

const Games = ({ filteredGames, loading }) => {
  console.log("Games Component Rendered");  // Debug log to indicate the component has rendered

  if (loading) {
    return <div className="text-center">Loading...</div>; // Show loading state if data is still being fetched
  }

  if (!filteredGames.length) {
    return <div className="text-center">No games available</div>; // Show message if no games are available
  }

  return (
    <div className='ml-14'> {/* Adjust margin for better layout */}
      <h1 className='flex justify-center text-4xl text-orange-400'>Games List</h1> {/* Title styling */}
      <ul className='flex flex-wrap'> {/* Flex container for the list of games */}
        {filteredGames.map((game, index) => (
          <li key={index} className="border rounded-lg p-4 shadow-md m-2 w-96"> {/* List item styling */}
            <h3 className="font-bold text-lg text-orange-400">{game.title}</h3> {/* Game title */}
            <p>Platform: {game.platform}</p> {/* Game platform */}
            <p>Score: {game.score}</p> {/* Game score */}
            <p>Genre: {game.genre}</p> {/* Game genre */}
            <p>Editor's Choice: {game.editors_choice}</p> {/* Editor's choice */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Games;
