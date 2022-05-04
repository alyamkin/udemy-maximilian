import { useState } from "react";

import Header from "./layout/Header";
import Meals from "./meals/Meals";
import Cart from "./cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [openCartModal, setOpenCartModal] = useState(false);

  const openCartHandler = () => {
    setOpenCartModal(true);
  };

  const closeCartHandler = () => {
    setOpenCartModal(false);
  };
  return (
    <CartProvider>
      {openCartModal && <Cart onCloseCart={closeCartHandler} />}
      <Header onOpenCart={openCartHandler} />
      <Meals />
    </CartProvider>
  );
};

export default App;
