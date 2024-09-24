import { useSelector } from "react-redux";

export const useBooks = () => useSelector(state => state.books.books);
export const useBookIsLoading= () => useSelector(state => state.books.isLoading);
export const useBookIsSuccess = () => useSelector(state => state.books.isSuccess);
export const useBookIsError = () => useSelector(state => state.books.isError);


