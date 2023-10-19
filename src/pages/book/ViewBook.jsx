import { useParams } from "react-router-dom";
import { useBookById } from "../../hooks/useBookById";
import { CircularProgress } from "@mui/material";
import BookForm from "./BookForm";

const ViewBook = () => {
  const { bookId } = useParams();
  const { book } = useBookById(bookId);

  return book ? (
    <BookForm formTitle="View book" book={book} isReadonly={true} />
  ) : (
    <CircularProgress />
  );
};

export default ViewBook;
