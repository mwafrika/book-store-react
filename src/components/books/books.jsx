/* eslint-disable jsx-quotes */
import React from 'react';
import Form from './form';
import Book from './book';
import Header from '../header';

const books = () => (
  <div className='main-container'>
    <div className='container'>
      <Header />
      <Book />
      <Form />
    </div>
  </div>
);

export default books;
