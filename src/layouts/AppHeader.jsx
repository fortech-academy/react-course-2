import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { Badge, Divider } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AppHeader = ({ width, onDrawerToggle }) => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const cartLength = cart
    .map((item) => item.quantity) //[5,1]
    .reduce((a, b) => a + b, 0);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: {
          sm: `calc(100% - ${width}px)`,
        },
        ml: {
          sm: `${width}px`,
        },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onDrawerToggle}
          sx={{
            mr: 2,
            display: {
              sm: "none",
            },
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap component="div">
          Books
        </Typography>

        <Divider />

        <Badge badgeContent={cartLength} color="primary">
          <Link to="/cart">
            <AddShoppingCart color="action" />
          </Link>
        </Badge>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
