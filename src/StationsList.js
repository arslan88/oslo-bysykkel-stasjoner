import React from 'react';

function StationsList({ stations }) {
  return (
    <div style={{ padding: '20px 40px' }}>
      <h1>Oslo Bysykkel Stations</h1>
      {stations.map((station, index) => (
        <div key={station.station_id} style={{ marginBottom: '10px', borderBottom: index !== stations.length - 1 ? '1px solid gray' : 'none', paddingBottom: '10px' }}>
          <p>{station.name}</p>
          <p>Available bikes: {station.num_bikes_available}</p>
          <p>Available locks: {station.num_docks_available}</p>
        </div>
      ))}
    </div>
  );
}

export default StationsList;
