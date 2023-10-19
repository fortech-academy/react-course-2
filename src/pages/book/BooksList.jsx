import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import BookItem from "./BookItem";
import "../../styles/BooksList.css";
import { useEnabledBooks } from "../../hooks/useEnabledBooks";

const BooksList = () => {
  const { books, getAllBooks } = useEnabledBooks();

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
          <BookItem book={book} key={book.id} onGetBooks={getAllBooks} />
        ))
      )}
    </Stack>
  );
};

export default BooksList;
