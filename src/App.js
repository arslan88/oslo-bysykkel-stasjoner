import React, { useState, useEffect } from 'react';
import { fetchStations, fetchStatus } from './api';
import mergeData from './mergeData';
import StationsList from './StationsList';

function App() {
  const [stations, setStations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stationsData = await fetchStations();
        const statusData = await fetchStatus();
        const mergedData = mergeData(stationsData, statusData);
        const filteredData = mergedData.filter(station => station.is_installed !== 0);
        setStations(filteredData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div className="App">
      <StationsList stations={stations} />
    </div>
  );
}

export default App;
