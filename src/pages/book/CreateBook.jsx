import { useNavigate } from "react-router-dom";
import { postBook } from "../../service/BookService";
import BookForm from "./BookForm";
import { openSnackbar } from "../../stores/snackbarSlice";
import { useDispatch } from "react-redux";

const CreateBook = () => {
  const initialBook = {
    title: "",
    authors: "",
    year: "",
    isbn: "",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddBook = async (title, author, year, isbn) => {
    const book = {
      title: title,
      authors: author,
      year: Number(year),
      isbn: isbn,
    };

    try {
      await postBook(book);
      dispatch(openSnackbar({ message: "Book added successfully" }));
      navigate("/books");
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  return (
    <BookForm
      formTitle="Add book"
      book={initialBook}
      buttonLabel="Add"
      onSaveBook={handleAddBook}
    />
  );
};

export default CreateBook;
