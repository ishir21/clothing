import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      {cartItems.map((item) => (
        <CartItem key={item.id} cartItem={item} />
      ))}
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
