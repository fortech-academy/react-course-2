import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart, setCart } from "../../stores/cartSlice";
import { Delete } from "@mui/icons-material";
import { useEffect } from "react";

const CartList = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(setCart([]));
  };

  useEffect(() => {
    console.log(localStorage.getItem("CART"));
  }, []);

  const handleRemoveBook = (book) => {
    localStorage.setItem("CART", "bhdsggdsgdgsdgd");
    dispatch(removeItemFromCart(book));

    const localStorageCart = localStorage.getItem("CART");
    console.log(localStorageCart);
  };

  return (
    <div>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.book.title} - {item.quantity}
            <Delete onClick={() => handleRemoveBook(item)} />
          </li>
        ))}
      </ul>

      <Button onClick={handleClearCart}>Clear cart</Button>
    </div>
  );
};

export default CartList;
