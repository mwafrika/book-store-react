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

    setBook({
      title: '',
      author: '',
      category: '',
    });
  };

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section className='w-5/6 mx-auto py-4'>
        <h1 className='text-gray-400 font-bold'>ADD NEW BOOK</h1>
      </section>
      <form
        onSubmit={handleSubmit}
        className='flex form mx-auto sm:w-5/6 justify-between xxxs:justify-start xs:justify-start xxxs:flex-col xs:flex-col xxxs:gap-y-2 xs:gap-y-2 xxxs:w-3/4 xs:w-3/4 xxs:justify-start xxs:flex-col xxs:gap-y-2 xxs:w-3/4'
      >
        <input
          type='text'
          placeholder='Book title'
          required
          className='border-2 w-1/4 py-2 px-2 rounded-sm xxxs:w-full xxs:w-full xs:w-full'
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
          className='border-2 w-1/5 py-2 px-2 rounded-sm xxxs:w-full xxs:w-full xs:w-full'
        />
        <select
          name='category'
          id='category'
          className='border-2 w-1/4 py-2 px-2 rounded-sm xxxs:w-full xxs:w-full xs:w-full text-gray-400'
          onChange={handleChange}
          required
        >
          <option value={category}>Select a category</option>
          <option>Fiction</option>
          <option>Non-Fiction</option>
          <option>Children</option>
        </select>
        <input
          type='submit'
          value='Add book'
          className='w-48 cursor-pointer bg-sky-500 text-white border-0 rounded-md xxxs:w-full xs:w-full xxxs:py-2 xxs:w-full xxs:py-2 xs:py-2'
        />
      </form>
    </>
  );
};

export default books;
