/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../../redux/books/books';

const books = () => {
  const [book, setBook] = useState({
    completed: 64,
    chapter: 20,
    chapterTitle: '',
    item_id: uuidv4(),
    title: '',
    author: '',
    category: '',
  });
  const { author, title, category } = book;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      completed: 64,
      chapter: 20,
      chapterTitle: 'Harry porter',
      item_id: uuidv4(),
      title,
      author,
      category,
    };

    dispatch(createBook(newBook));
    setBook(newBook);
  };
  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className='flex form mx-auto justify-between'>
      <input
        type='text'
        placeholder='Book title'
        required
        className='border-2 w-1/4 py-2 px-2 rounded-sm'
        name='title'
        value={title}
        onChange={handleChange}
      />
      <input
        type='text'
        name='author'
        value={author}
        placeholder='Book author'
        onChange={handleChange}
        required
        className='border-2 w-1/5 py-2 px-2 rounded-sm'
      />
      <input
        name='category'
        id='category'
        className='border-2 w-1/4 py-2 px-2 rounded-sm'
        placeholder='Category'
        value={category}
        onChange={handleChange}
        required
      />
      <input
        type='submit'
        value='Add book'
        className='w-48 cursor-pointer bg-sky-500 text-white border-0 rounded-md'
      />
    </form>
  );
};

export default books;
