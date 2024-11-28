import axios from 'axios';

const API_BASE_URL = 'https://example.com/api';

export const fetchCafes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cafes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cafes:', error);
    return [];
  }
};
