import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/app/app';
import ErrorBoundary from './components/error-boundary/error-boundary';
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/bookstore-service-context/bookstore-service-context';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const bookstoreService = new BookstoreService();

root.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookstoreServiceProvider value={bookstoreService}>
        <App />
      </BookstoreServiceProvider>
    </ErrorBoundary>
  </Provider>,
);
