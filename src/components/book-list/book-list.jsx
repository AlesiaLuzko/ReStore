import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import BookListItem from '../book-list-item/book-list-item';
import withBookstoreService from '../hoc/with-bookstore-service';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import { fetchBooks, bookAddedToCart } from '../../actions';
import './book-list.css';

const BookList = ({ books, onAddedToCart }) => (
  <ul className="book-list">
    {
      books.map((book) => (
        <li key={book.id}>
          <BookListItem
            book={book}
            onAddedToCart={() => onAddedToCart(book.id)}
          />
        </li>
      ))
    }
  </ul>
);

function BookListContainer({ bookstoreService }) {
  const { books, loading, error } = useSelector((state) => state.bookList);
  const dispatch = useDispatch();
  const onAddedToCart = (id) => dispatch(bookAddedToCart(id));

  useEffect(() => {
    fetchBooks(bookstoreService, dispatch)();
  }, [bookstoreService, dispatch]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <BookList
      books={books}
      onAddedToCart={(id) => onAddedToCart(id)}
    />
  );
}

export default withBookstoreService()(BookListContainer);
