import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";

//isOpen, handleClose, onDelete => props
const ConfirmDeleteBookDialog = ({ book, isOpen, onClose, onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Confirm Delete?</DialogTitle>
      <DialogContent>
        <Typography>{`Are you sure you want to delete this book:`}</Typography>
        <Typography sx={{ fontWeight: "bold" }}>{book.title}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleDelete} variant="contained" color="primary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteBookDialog;
