/* eslint-disable jsx-quotes */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../header';
import { checkStatus } from '../../redux/categories/categories';

const index = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categoryReducer);
  const handleClick = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      <Header />
      <div className='flex justify-start items-center ml-5 gap-x-4'>
        <button
          type='button'
          className='bg-slate-400'
          onClick={() => handleClick()}
        >
          Check status
        </button>
        <h1>{status}</h1>
      </div>
    </>
  );
};

export default index;
