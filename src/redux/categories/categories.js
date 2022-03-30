const ADD_CATEGORY = 'ADD_CATEGORY';
const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
const CHECK_STATUS = 'CHECK_STATUS';

const reducer = (categories = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...categories, action.book];
    case REMOVE_CATEGORY:
      return [...categories].filter((book) => book.id !== action.id);
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return categories;
  }
};

export default reducer;

export const addCategory = (category) => ({ type: ADD_CATEGORY, category });
export const removeCategory = (id) => ({ type: REMOVE_CATEGORY, id });
export const checkStatus = () => ({ type: CHECK_STATUS });
