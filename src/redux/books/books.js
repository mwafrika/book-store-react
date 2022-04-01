/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import * as Api from '../../api/index';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FETCH_ALL_BOOK = 'FETCH_ALL_BOOK';

export const reducer = (book = [], action) => {
  switch (action.type) {
    case FETCH_ALL_BOOK:
      console.log(action.payload, 'Try reducer');
      return action.payload;
    case ADD_BOOK:
      return [...book, action.book];
    case REMOVE_BOOK:
      console.log(book, 'DELETE REDUCER');
      return [...book].filter((book) => book.item_id !== action.id);
    default:
      return book;
  }
};

export default reducer;

export const createBook = (book) => async (dispatch) => {
  try {
    await Api.addBook(book);
    dispatch({ type: ADD_BOOK, book });
  } catch (error) {
    console.log(error.message, 'error');
  }
};
export const removeBook = (id) => async (dispatch) => {
  try {
    await Api.deleteBook(id);
    dispatch({ type: REMOVE_BOOK, id });
  } catch (error) {
    console.log(error, 'error');
  }
};

const reformulateData = (data) => {
  const books = Object.entries(data);
  return books.map((element) => ({ item_id: element[0], ...element[1][0] }));
};

export const getAllBooks = () => async (dispatch) => {
  try {
    const { data } = await Api.fetchAll();
    const bookAvailable = reformulateData(data);
    console.log(reformulateData(data), 'formulate data');

    dispatch({
      type: FETCH_ALL_BOOK,
      payload: bookAvailable,
    });
  } catch (err) {
    console.log(err.message);
  }
};
