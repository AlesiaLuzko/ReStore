import updateBookList from '../../book-list';

import {
  mockedNoStateParams,
  expectedResultForBookRequest,
  mockedSucceedAction,
  mockedFailedAction,
  expectedSucceedResult,
  mockedBookListInitialState,
  expectedFailedResult
} from "../mock-test-data/book-list-data.mock";

describe("updateBookList function", () => {
  it("should get data when state is not defined", () => {
    const bookListData = updateBookList(null, mockedNoStateParams.action);
    expect(bookListData).toBeDefined();
    expect(bookListData).toEqual(mockedBookListInitialState);
  });

  it("should get data after request", () => {
    const bookListData = updateBookList({bookList: mockedBookListInitialState}, {
      type: 'FETCH_BOOKS_REQUEST'
    });
    expect(bookListData).toBeDefined();
    expect(bookListData).toEqual(expectedResultForBookRequest);
  });

  it("should get data for succeed action type", () => {
    const bookListData = updateBookList({bookList: mockedBookListInitialState}, mockedSucceedAction);
    expect(bookListData).toBeDefined();
    expect(bookListData).toEqual(expectedSucceedResult);
  });

  it("should get data for failed action type", () => {
    const bookListData = updateBookList({bookList: mockedBookListInitialState}, mockedFailedAction);
    expect(bookListData).toBeDefined();
    expect(bookListData).toEqual(expectedFailedResult);
  });

  it("should get data by default", () => {
    const bookListData = updateBookList({bookList: mockedBookListInitialState}, {
      type: 'SOME_WRONG_ACTION_TYPE'
    });
    expect(bookListData).toEqual(mockedBookListInitialState);
  });
});