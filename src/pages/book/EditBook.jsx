import { Button, CircularProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import BookForm from "./BookForm";
import { useBookById } from "../../hooks/useBookById";
import { putBook } from "../../service/BookService";

const EditBook = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { book } = useBookById(params.bookId);

  const handleCancelClick = () => {
    navigate("/books");
  };

  const handleSaveBook = async (title, author, year, isbn) => {
    const book = { title, authors: author, year, isbn };

    //TODO: implement PUT in backend
    try {
      await putBook(params.bookId, book);
    } catch (error) {
      console.error(error);
    } finally {
      navigate("/books");
    }
  };

  return book ? (
    <div>
      Edit book with id: {params.bookId}
      <BookForm
        formTitle="Edit book"
        book={book}
        buttonLabel="Edit"
        onSaveBook={handleSaveBook}
      />
      <Button
        variant="outlined"
        onClick={handleCancelClick}
        sx={{ mt: "16px" }}
      >
        Cancel
      </Button>
    </div>
  ) : (
    <CircularProgress />
  );
};

export default EditBook;
