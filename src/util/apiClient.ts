import axios from 'axios';

import { keysToCamel } from './convert';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_LOCAL_URL,
});

export const fetchClient = axios.create({
  baseURL: process.env.API_BASE_URL,
});

fetchClient.interceptors.response.use((response) => {
  response.data = keysToCamel(response.data);
  return response;
});
