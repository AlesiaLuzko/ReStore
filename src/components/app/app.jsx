import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import {
  HomePage,
  CartPage,
} from '../pages';

import Layout from '../layout/layout';
import './app.css';

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="cart" element={<CartPage />} />
    </Route>,
  ));

  return (
    <main className="app">
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
