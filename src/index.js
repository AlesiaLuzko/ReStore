import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import BookstoreService from './services/bookstore-service';
import {  BookstoreServiceProvider } from './components/bookstore-service-context';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const bookstoreService = new BookstoreService();

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />} />
));

root.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookstoreServiceProvider value={bookstoreService}>
        <RouterProvider router={router} />
      </BookstoreServiceProvider>
    </ErrorBoundary>
  </Provider>
);