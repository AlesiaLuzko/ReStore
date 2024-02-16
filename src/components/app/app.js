import Spinner from '../spiner';
import withBookstoreService from '../hoc';

const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks());

  return (
    <div>
      <Spinner />
    </div>
  );
};

export default withBookstoreService()(App);