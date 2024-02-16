export default class BookstoreService {

  getBooks() {
    return [
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
    ];
  };
};