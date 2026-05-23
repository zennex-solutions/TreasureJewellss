import React, { useState, useEffect } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  //  Replace with backend/cart context later
  useEffect(() => {
    const data = [
      {
        id: 1,
        name: "Ethereal Diamond Necklace",
        price: 4999,
        image:
          "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
        quantity: 1,
      },
      {
        id: 2,
        name: "Minimal Gold Ring",
        price: 1999,
        image:
          "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
        quantity: 2,
      },
    ];

    setCartItems(data);
  }, []);

  const updateQuantity = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page min-h-screen bg-[#faf7f5] py-10 px-4">
      <div className="cart-container max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* LEFT - ITEMS */}
        <div className="cart-items md:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 mb-4">
                Your cart is empty.
              </p>
              <button className="px-6 py-2 bg-black text-white rounded-full hover:opacity-80">
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="cart-item flex items-center gap-6 bg-white p-4 rounded-xl shadow-sm mb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-500">₹{item.price}</p>

                  <div className="flex items-center gap-3 mt-3">
                    <button
                      className="px-3 py-1 border rounded"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-3 py-1 border rounded"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="text-sm text-red-500 mt-3 hover:underline"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>

                <div className="font-semibold">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))
          )}
        </div>

        {/* RIGHT - SUMMARY (ONLY WHEN ITEMS EXIST) */}
        {cartItems.length > 0 && (
          <div className="cart-summary bg-white p-6 rounded-xl shadow-sm h-fit sticky top-24">
            <h2 className="text-xl font-semibold mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between mb-2 text-gray-600">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between mb-4 text-gray-600">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between font-semibold text-lg border-t pt-4">
              <span>Total</span>
              <span>₹{subtotal}</span>
            </div>

            <button
              className="w-full mt-6 py-3 bg-black text-white rounded-full hover:opacity-90 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;