import { Box, TextField, Button } from "@mui/material";
import { useInput } from "../../hooks/useInput";

const BookForm = ({ book, formTitle, onSaveBook, buttonLabel, isReadonly }) => {
  const [title, handleTitleChange] = useInput(book.title);
  const [author, handleAuthorChange] = useInput(book.authors);
  const [year, handleYearChange] = useInput(book.year);
  const [isbn, handleISBNChange] = useInput(book.isbn);

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItem: "center",
        justifyContent: "center",
      }}
    >
      <h1>{formTitle}</h1>
      <TextField
        variant="outlined"
        disabled={isReadonly}
        label="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <TextField
        variant="outlined"
        disabled={isReadonly}
        label="Author"
        value={author}
        onChange={handleAuthorChange}
      />
      <TextField
        variant="outlined"
        disabled={isReadonly}
        label="Year"
        value={year}
        onChange={handleYearChange}
      />
      <TextField
        variant="outlined"
        disabled={isReadonly}
        label="ISBN"
        value={isbn}
        onChange={handleISBNChange}
      />
      {!!buttonLabel && (
        <Button
          variant="contained"
          onClick={() => onSaveBook(title, author, year, isbn)}
          sx={{
            maxWidth: "100px",
          }}
        >
          {buttonLabel}
        </Button>
      )}
    </Box>
  );
};

export default BookForm;
