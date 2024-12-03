"use client";  // This directive ensures the file is treated as a client component

import React, { useState, useEffect } from 'react';
import axios from "axios";
import Filter from "./components/Filter/Filter";
import Search from "./components/Search/Search";
import Games from "./components/Games/Games";

export default function Home() {
  // State to manage games data, filtered games, and loading status
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch games data when the component mounts
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"
        );
        const data = response.data || [];
        console.log("Fetched Games Data:", data);  // Debug log to show fetched data
        setGames(data); // Set fetched games data
        setFilteredGames(data); // Set filtered games data initially to all games
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching games:", error); // Log any errors
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchGames(); // Call the fetchGames function
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Search component for filtering games by title */}
      <Search setFilteredGames={setFilteredGames} games={games} />
      
      {/* Filter component for filtering games by platform */}
      <Filter setFilteredGames={setFilteredGames} games={games} />
      
      {/* Games component for displaying the list of games */}
      <Games filteredGames={filteredGames} loading={loading} />
    </div>
  );
}
