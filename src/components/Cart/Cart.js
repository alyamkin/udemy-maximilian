import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    dispatch(cartActions.addItemToCart({ item }));
  };

  const removeItemHandler = (id) => {
    dispatch(cartActions.removeItemFromCart({ id }));
  };

  const cartItems = items.map((item) => {
    const total = item.price * item.quantity;
    return (
      <CartItem
        key={item.id}
        addItem={addItemHandler.bind(this, item)}
        removeItem={removeItemHandler.bind(this, item.id)}
        item={{
          id: item.id,
          title: item.title,
          quantity: item.quantity,
          total: total,
          price: item.price,
        }}
      />
    );
  });
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartIsVisible && <ul>{cartItems}</ul>}
    </Card>
  );
};

export default Cart;
