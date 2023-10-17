import { useInput } from "../../hooks/useInput";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const AddBook = ({ onAddBook }) => {
  const [title, handleTitleChange] = useInput();
  const [author, handleAuthorChange] = useInput();
  const [year, handleYearChange] = useInput();
  const [isbn, handleISBNChange] = useInput();

  const handleAddBook = () => {
    const book = {
      title: title,
      author: author,
      year: year,
      isbn: isbn,
    };

    onAddBook(book);
  };

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
      <h1>Add Book</h1>
      <TextField
        variant="outlined"
        label="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <TextField
        variant="outlined"
        label="Author"
        value={author}
        onChange={handleAuthorChange}
      />
      <TextField
        variant="outlined"
        label="Year"
        value={year}
        onChange={handleYearChange}
      />
      <TextField
        variant="outlined"
        label="ISBN"
        value={isbn}
        onChange={handleISBNChange}
      />
      <Button
        variant="contained"
        onClick={handleAddBook}
        sx={{
          maxWidth: "100px",
        }}
      >
        Add
      </Button>
    </Box>
  );
};

export default AddBook;
