export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Jane Eyre',
      author: 'Charlotte Brontë',
      price: 35,
      coverImage: 'https://m.media-amazon.com/images/I/81pwJjgcwwL._SL1500_.jpg'
    },
    {
      id: 2,
      title: 'Hatter\'s Castle',
      author: 'Archibald Cronin',
      price: 31,
      coverImage: 'https://m.media-amazon.com/images/I/71ovIS-Qg3L._SL1500_.jpg'
    },
    {
      id: 3,
      title: 'The Picture of Dorian Gray',
      author: 'Oscar Wilde',
      price: 21,
      coverImage: 'https://m.media-amazon.com/images/I/71pSOV0A+VL._SL1338_.jpg'
    },
    {
      id: 4,
      title: 'Martin Eden',
      author: 'Jack London',
      price: 38,
      coverImage: 'https://m.media-amazon.com/images/I/81VS+BBqa4L._SL1500_.jpg'
    },
    {
      id: 5,
      title: 'La Citadelle',
      author: 'Archibald Cronin',
      price: 33,
      coverImage: 'https://m.media-amazon.com/images/I/71aD5pcKYBL._SL1500_.jpg'
    },
    {
      id: 6,
      title: 'The Forgotten Garden',
      author: 'Kate Morton',
      price: 40,
      coverImage: 'https://m.media-amazon.com/images/I/81wf6dmw6kL._SL1500_.jpg'
    },
    {
      id: 7,
      title: 'The name of the wind',
      author: 'Patrick Rothfuss',
      price: 38,
      coverImage: 'https://m.media-amazon.com/images/I/611iKJa7a-L._SL1168_.jpg'
    },
    {
      id: 8,
      title: 'Le Comte de Monte-Cristo',
      author: 'Alexandre Dumas',
      price: 45,
      coverImage: 'https://m.media-amazon.com/images/I/71ZcP22phyL._SL1429_.jpg'
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Smt bad happened'));
        } else {
          resolve(this.data);
        }
      }, 700)
    });
  };
};