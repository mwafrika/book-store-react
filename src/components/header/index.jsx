import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faBars,
  faCircleUser,
} from '@fortawesome/free-solid-svg-icons';
/* eslint-disable jsx-quotes */

const header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header className='h-20 flex justify-between bg-slate-500 text-slate-500 px-5 items-center header sm:px-32 sm:justify-between xxs:justify-end xs:justify-end xxs:px-5 xxxs:justify-end xxxs:px-5 xs:px-5'>
      <nav className='w-1/3 sm:w-auto'>
        <ul className='flex justify-between items-center gap-x-6 xxxs:hidden xxs:hidden xs:hidden'>
          <li className='text-xl text-sky-500'>
            <NavLink to='/'>BookStore CMS</NavLink>
          </li>
          <li>
            <NavLink to='/'>Books</NavLink>
          </li>
          <li>
            <NavLink to='/categories'>Categories</NavLink>
          </li>
        </ul>
        <ul
          className={`hidden justify-between items-center gap-x-6 ${
            open
              ? 'xxxs:flex xxs:flex xs:flex'
              : 'xxxs:hidden xxs:hidden xs:hidden'
          }`}
        >
          <li className='text-xl text-sky-500'>
            <NavLink to='/'>BookStore CMS</NavLink>
          </li>
          <li>
            <NavLink to='/'>Books</NavLink>
          </li>
          <li>
            <NavLink to='/categories'>Categories</NavLink>
          </li>
        </ul>
      </nav>
      <div className='flex xxxs:hidden xxs:hidden xs:hidden text-4xl text-sky-500'>
        <FontAwesomeIcon icon={faCircleUser} />
      </div>
      <button
        type='button'
        onClick={handleClick}
        className='hidden xxxs:flex xxs:flex xs:flex'
      >
        {open ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
    </header>
  );
};

export default header;
