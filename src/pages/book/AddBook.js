import { Button, TextField } from "@mui/material";
import { useInput } from "../../hooks/useInput";

const AddBook = ({ onAddBook }) => {
  const [title, handleTitleChange] = useInput();
  const [author, handleAuthorChange] = useInput();
  const [year, handleYearChange] = useInput();
  const [isbn, handleISBNChange] = useInput();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
    <form onSubmit={handleSubmit}>
      <h1>Add Book</h1>
      <TextField
        variant="outlined"
        label="Title"
        value={title}
        onChange={handleTitleChange}
      ></TextField>
      <TextField
        variant="outlined"
        label="Author"
        value={author}
        onChange={handleAuthorChange}
      ></TextField>
      <TextField
        variant="outlined"
        label="Year"
        value={year}
        onChange={handleYearChange}
      ></TextField>
      <TextField
        variant="outlined"
        label="ISBN"
        value={isbn}
        onChange={handleISBNChange}
      ></TextField>
      <Button variant="contained" onClick={handleAddBook}>
        Add
      </Button>
    </form>
  );
};

export default AddBook;
