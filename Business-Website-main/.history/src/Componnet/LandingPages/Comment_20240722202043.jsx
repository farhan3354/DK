// Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions/cartActions'; // Adjust paths as needed

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity(id, quantity));
  };

  return (
    <div className="relative p-4 border rounded-lg bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-between items-center mb-2">
              <span>{item.name}</span>
              <span>${item.price} x {item.quantity}</span>
              <button 
                className="text-red-500" 
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="font-bold mt-4">Total: ${total.toFixed(2)}</p>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
