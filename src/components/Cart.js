import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { Removefromcart } from "../utility/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(Removefromcart(id));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem key={item.card.info.id} item={item} onRemove={handleRemoveItem} />
            ))
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}
        </div>
      </div>
      <div className="w-full lg:w-1/3">
        <CartSummary
          subtotal={cartItems.reduce((total, item) => total + item.card.info.price, 0)}
          shipping={50}
          tax={cartItems.reduce((total, item) => total + item.card.info.price, 0) * 0.1}
        />
      </div>
    </div>
  );
};

export default Cart;
