import axios from 'axios';

export const getWeather = async () => {
  const response = await axios.get('http://localhost:8080/weather');
  return response.data;
};
