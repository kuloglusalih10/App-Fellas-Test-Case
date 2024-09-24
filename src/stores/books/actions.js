import store from "..";
import {_setBooks, _addBook, _fetchBooks} from ".";

export const setBooks = data => store.dispatch(_setBooks(data));
export const addBook = data => store.dispatch(_addBook(data));
export const fetchBooks = data => store.dispatch(_fetchBooks(data));

