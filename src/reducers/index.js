
const initialState = {
  books: [
    {
      id: 1,
      title: 'Jane Eyre',
      author: 'Charlotte Brontë'
    },
    {
      id: 2,
      title: 'Hatter\'s Castle',
      author: 'Archibald Cronin'
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED' :
      return {
        books: action.payload
      };

    default:
      return state;
  }
};

export default reducer;