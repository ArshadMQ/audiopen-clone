import axios from 'axios';
import { BASE_URL } from '../CONSTANTS';

export const LOGIN = (payload: any) => {
  const data = axios
    .post(BASE_URL + '/users/signin', payload)
    .then(response => response)
    .catch(error => error);
  return data;
};

export const SIGNUP = (payload: any) => {
  const data = axios
    .post(BASE_URL + '/users/signup', payload)
    .then(response => response)
    .catch(error => error);
  return data;
};
