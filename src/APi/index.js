/* eslint-disable import/prefer-default-export */
import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Hv9c4qLdQDZsZVD5KU1I/books';

console.log(`${url}apps/Hv9c4qLdQDZsZVD5KU1I/books`, 'my url');

export const fetchAll = () => axios.get(url);

// https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Hv9c4qLdQDZsZVD5KU1I/books
