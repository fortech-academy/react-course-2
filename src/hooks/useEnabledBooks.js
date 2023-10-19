import { useEffect, useState } from "react";
import { getBooks } from "../service/BookService";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setBooks } from "../stores/bookSlice";

export const useEnabledBooks = () => {
  const books = useSelector((state) => state.bookReducer.books);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getAllBooks = async () => {
    try {
      setIsLoading(true);
      const books = await getBooks();
      dispatch(setBooks(books));
      setIsError(false);
    } catch (e) {
      console.error(e);
      setIsError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return { books, isLoading, isError, getAllBooks };
};
