export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Jane Eyre',
      author: 'Charlotte Brontë',
      price: 39,
      coverImage: 'https://m.media-amazon.com/images/I/81pwJjgcwwL._SL1500_.jpg'
    },
    {
      id: 2,
      title: 'Hatter\'s Castle',
      author: 'Archibald Cronin',
      price: 44,
      coverImage: 'https://m.media-amazon.com/images/I/71ovIS-Qg3L._SL1500_.jpg'
    }
  ];

  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data)
      }, 700)
    });
  };
};