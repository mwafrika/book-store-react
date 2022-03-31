/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

export const fetchAll = () => axios.get(`${url}/apps/${process.env.APP_ID}/books`);
