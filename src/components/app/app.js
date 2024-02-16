import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import {
  HomePage,
  CartPage
} from '../pages';

import Layout from '../layout';

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="cart" element={<CartPage />} />
    </Route>
  ));

  return (
    <RouterProvider router={router}/>
  );
};

export default App;