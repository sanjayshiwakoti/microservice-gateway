import axios from 'axios';

export const login = payload => {
  return axios.post(`${process.env.MSA_AUTH}/auth/login`, payload).then(response => response.data);
};

export const authenticate = accessToken => {
  return axios.post(`${process.env.MSA_AUTH}/auth/authenticate`, { accessToken }).then(response => response.data);
};
