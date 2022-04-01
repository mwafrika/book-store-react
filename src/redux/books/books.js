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
      return book.filter((book) => book.item_id !== action.id);
    // return [...book].filter((book) => book.id !== action.id);
    default:
      return book;
  }
};

export default reducer;

export const createBook = (book) => async (dispatch) => {
  try {
    const { data } = await Api.addBook(book);
    console.log(data, 'ADD BOOK');
    dispatch({ type: ADD_BOOK, book: data });
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

export const getAllBooks = () => async (dispatch) => {
  try {
    const { data } = await Api.fetchAll();
    // const Keys = Object.entries(data).map((book) => Object.values(book)[0]);
    // const Values = Object.values(data).flat().forEach((book) => book);
    // const combinedValues = [Object.values(data)];

    // const mapValues = [...Values, { item_id: Keys }];

    const payload = Object.values(data).flat();
    const [keys] = Object.keys(data).map((key) => key);
    const mapValues = payload.map((book) => ({ ...book, item_id: keys })); // combine keys and values using entries
    

    Object.entries(data).map(([item_id, mapValues]) => ({
      item_id,
      ...mapValues,
    }));

    console.log(mapValues, 'keys and values');

    const checkPayload = payload.flat().map((book) => ({
      ...book,
      item_id: keys[0],
    }));
    console.log(checkPayload[1], 'checkPayload');

    dispatch({
      type: FETCH_ALL_BOOK,
      payload: mapValues,
    });
  } catch (err) {
    console.log(err.message);
  }
};
