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
      return [...book].filter((book) => book.id !== action.id);
    default:
      return book;
  }
};

export default reducer;

export const createBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id) => ({ type: REMOVE_BOOK, id });

export const getAllBooks = () => async (dispatch) => {
  try {
    const { data } = await Api.fetchAll();
    const payload = Object.values(data).flat();
    console.log(payload, 'book STrooore');
    dispatch({
      type: FETCH_ALL_BOOK,
      payload,
    });
  } catch (err) {
    console.log(err.message);
  }
};
