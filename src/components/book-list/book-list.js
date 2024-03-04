import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import BookListItem from '../book-list-item';
import withBookstoreService from '../hoc';
import Spinner from '../spiner';
import ErrorIndicator from '../error-indicator';
import { fetchBooks, bookAddedToCart } from '../../actions';
import './book-list.css';

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem
                book={book}
                onAddedToCart={() => onAddedToCart(book.id)} />
            </li>
          )
        })
      }
    </ul>
  );
}


const BookListContainer = ({ bookstoreService }) => {

  const { books, loading, error } = useSelector(state => state.bookList);
  const dispatch = useDispatch();
  const onAddedToCart = (id) => dispatch(bookAddedToCart(id));

  useEffect( () => {
    fetchBooks(bookstoreService, dispatch)();
  }, [bookstoreService, dispatch]);

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorIndicator />
  }

  return <BookList books={books}
                   onAddedToCart={(id) => onAddedToCart(id)}/>
};

export default withBookstoreService()(BookListContainer);