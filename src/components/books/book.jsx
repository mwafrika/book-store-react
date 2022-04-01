/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-quotes */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, getAllBooks } from '../../redux/books/books';

const book = () => {
  const post = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  const handleClick = (id, e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  return (
    <>
      {post.map((book, index) => (
        <div
          key={index}
          className='book-card gap-y-8 flex flex-row items-center justify-between'
        >
          <section className='flex flex-col justify-between gap-y-8'>
            <div>
              <p className='text-sm text-sky-500'>{book.title}</p>
              <p className=' text-xl font-bold'>{book.author}</p>
              <p className='text-sm text-sky-500'>{book.category}</p>
            </div>
            <ul className='flex  items-center gap-4'>
              <li className='text-sm text-sky-500 w-20 cursor-pointer border-r-gray-100 border-r-2'>
                Comment
              </li>
              <li className='text-sm text-sky-500 w-20 cursor-pointer border-r-gray-100 border-r-2'>
                <button
                  className='cursor-pointer'
                  onClick={(e) => handleClick(book.item_id, e)}
                  type='button'
                >
                  Remove
                </button>
              </li>
              <li className='text-sm text-sky-500 w-20 cursor-pointer'>Edit</li>
            </ul>
          </section>
          <section className='flex gap-x-4 border-r-2 border-r-gray-100 w-1/3 py-3'>
            <div className='circle' />
            <div>
              <p className='text-3xl'>64 $</p>
              <p className='text-gray-400'>Completed</p>
            </div>
          </section>
          <section className='flex justify-between flex-col gap-y-8'>
            <div>
              <p className='text-gray-400'>CURRENT CHAPTER</p>
              <p>Chapter 17</p>
            </div>
            <button
              type='submit'
              className='px-10 py-2 rounded-md text-white bg-sky-500'
            >
              Update progress
            </button>
          </section>
        </div>
      ))}
    </>
  );
};

export default book;
