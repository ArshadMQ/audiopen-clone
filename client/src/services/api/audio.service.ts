import axios from 'axios';
import { BASE_URL } from '../CONSTANTS';

export const GENERATE = (payload: any) => {
  const data = axios
    .post(BASE_URL + '/generate', payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => response)
    .catch(error => error);
  return data;
};

export const SAVE_NOTE = (payload: any) => {
  const data = axios
    .post(BASE_URL + '/savednote', payload)
    .then(response => response)
    .catch(error => error);
  return data;
};
