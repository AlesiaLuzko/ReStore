import BookstoreService from '../../../services/bookstore-service';

const mockBookstoreService = new BookstoreService();

// Mocked state for tests

const mockedBookListInitialState = {
  books: [],
  loading: true,
  error: null,
}

// Mocked params

const mockedNoStateParams = {
  state: undefined,
  action: null
};

const mockedSucceedAction = {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: mockBookstoreService
};

const mockedFailedAction = {
    type: 'FETCH_BOOKS_FAILURE',
    payload: "ERROR"
};

// Expected results

const expectedResultForBookRequest = {
  books: [],
  loading: true,
  error: null,
};

const expectedSucceedResult = {
  books: mockBookstoreService,
  loading: false,
  error: null,
};

const expectedFailedResult = {
  books: [],
  loading: false,
  error: "ERROR",
};

export {
  mockedBookListInitialState,
  mockedNoStateParams,
  expectedResultForBookRequest,
  mockedSucceedAction,
  mockedFailedAction,
  expectedFailedResult,
  expectedSucceedResult
}