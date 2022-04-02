/* eslint-disable jsx-quotes */
import React from 'react';
import Form from './form';
import Book from './book';
import Header from '../header';

const books = () => (
  <div className='main-container sm:w-full h-screen'>
    <div className='container sm:w-full xxxs:w-full'>
      <Header />
      <Book />
      <Form />
    </div>
  </div>
);

export default books;
