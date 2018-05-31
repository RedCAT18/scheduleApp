import React from 'react';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:8000/api',
  timeout: 10000
});

api.interceptors.request.use(
  async request => {
    request.headers = request.headers || {};

    let token = await AsyncStorage.getItem('token');
    if (token) {
      request.headers.Authrization = token;
    }
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);
