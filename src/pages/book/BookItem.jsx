import { Stack, Typography } from "@mui/material";
import CircleBackgroundIcon from "../../components/CircleBackgroundIcon";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { useState } from "react";
import ConfirmDeleteBookDialog from "./ConfirmDeleteBookDialog";
import { deleteBook } from "../../service/BookService";

export default function BookItem({ book, onGetBooks }) {
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState(`../../images/${book.id}.jpg`);

  const handleImgError = () => {
    setSrc("../../images/no-image.jpg");
  };

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  const handleDeleteBook = async () => {
    const bookId = book.id;

    try {
      await deleteBook(bookId);
      onGetBooks();
    } catch (err) {
      console.error(err);
    } finally {
      handleCloseDialog();
    }
  };

  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={0.5}
      className="book-cover-width"
    >
      <div className="book-cover-container">
        <img
          className="book-cover book-cover-width book-cover-height"
          src={src}
          onError={handleImgError}
          loading="lazy"
          alt="Book cover"
        />
        <Stack
          direction="row"
          alignItems="center"
          spacing={4}
          className="middle"
        >
          <Link to={`/books/${book.id}`}>
            <CircleBackgroundIcon icon={VisibilityIcon} color="white" />
          </Link>
          <Link to={`/books/${book.id}/edit`}>
            <CircleBackgroundIcon icon={EditIcon} color="white" />
          </Link>
          <CircleBackgroundIcon
            icon={DeleteSharpIcon}
            color="white"
            onClick={handleOpenDialog}
          />
          <ConfirmDeleteBookDialog
            book={book}
            isOpen={isOpen}
            onDelete={handleDeleteBook}
            onClose={handleCloseDialog}
          />
        </Stack>
      </div>

      <Typography sx={{ fontWeight: "bold" }}>
        <Link to={"/books/" + book.id}>
          {book.title} - {book.authors}
        </Link>
      </Typography>
    </Stack>
  );
}
