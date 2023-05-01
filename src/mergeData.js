const mergeData = (stationsData, statusData) => {
    return stationsData.map(station => {
      const matchingStatus = statusData.find(status => status.station_id === station.station_id);
      return {
        ...station,
        ...matchingStatus,
      };
    });
  };
  
  export default mergeData;  