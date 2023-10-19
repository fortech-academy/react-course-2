import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import BookItem from "./BookItem";
import "../../styles/BooksList.css";
import { getBooks } from "../../service/BookService";

const BooksList = () => {
  const [books, setBooks] = useState([]);

  const handleGetBooks = async () => {
    try {
      const books = await getBooks();
      setBooks(books);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleGetBooks();
  }, []);

  return (
    <Stack
      direction="row"
      sx={{
        flexWrap: "wrap",
        gap: "3rem",
      }}
    >
      {books.length === 0 ? (
        <Box className="center-flex-container ">
          <CircularProgress />
        </Box>
      ) : (
        books.map((book) => (
          <BookItem book={book} key={book.id} onGetBooks={handleGetBooks} />
        ))
      )}
    </Stack>
  );
};

export default BooksList;
