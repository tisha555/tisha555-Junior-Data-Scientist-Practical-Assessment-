import axios from 'axios';

const API_URL = 'http://localhost:5000/api/patients';

export const getPatients = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getPatientById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const getVitalsByPatientId = async (id) => {
  const response = await axios.get(`${API_URL}/${id}/vitals`);
  return response.data;
};
