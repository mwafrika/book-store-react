/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../../redux/books/books';

const book = () => {
  const [book, setBook] = useState({
    bookName: '',
    category: '',
    bookAuthor: '',
  });
  const { bookAuthor, bookName, category } = book;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      bookName,
      category,
      bookAuthor,
      completed: 64,
      chapter: 20,
      chapterTitle: 'Harry porter',
    };
    dispatch(createBook(newBook));
    setBook({
      bookName: '',
      category: '',
      bookAuthor: '',
    });
  };
  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='flex w-3/4 mx-auo'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Book title'
          required
          className='w-48 border-2'
          name='bookName'
          value={bookName}
          onChange={handleChange}
        />
        <input
          type='text'
          name='bookAuthor'
          value={bookAuthor}
          placeholder='Book author'
          onChange={handleChange}
          required
        />
        <input
          name='category'
          id='category'
          className='w-48'
          placeholder='Book title'
          value={category}
          onChange={handleChange}
          required
        />
        <input
          type='submit'
          value='Add book'
          className='w-48 cursor-pointer bg-slate-400'
        />
      </form>
    </div>
  );
};

export default book;
