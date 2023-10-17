import { Link, Stack, Typography } from "@mui/material";
import CircleBackgroundIcon from "../../components/CircleBackgroundIcon";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";

export default function BookItem({ book }) {
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
          src={`../../images/${book.id}.jpg`}
          loading="lazy"
          alt="Book cover"
        />
        <Stack
          direction="row"
          alignItems="center"
          spacing={4}
          className="middle"
        >
          <CircleBackgroundIcon icon={VisibilityIcon} color="white" />
          <CircleBackgroundIcon icon={EditIcon} color="white" />
          <CircleBackgroundIcon icon={DeleteSharpIcon} color="white" />
        </Stack>
      </div>

      <Typography sx={{ fontWeight: "bold" }}>
        <Link color="black" href="#" underline="none">
          {book.title} - {book.authors}
        </Link>
      </Typography>
    </Stack>
  );
}
