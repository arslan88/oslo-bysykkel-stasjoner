import axios from 'axios';

export const fetchStations = async () => {
  const response = await axios.get('https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json');
  return response.data.data.stations;
};

export const fetchStatus = async () => {
  const response = await axios.get('https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json');
  return response.data.data.stations;
};
