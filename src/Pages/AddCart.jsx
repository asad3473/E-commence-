import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import medicine from "../assets//Homeimg/medicine.png";

const AddCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Panadol",
      image: medicine,
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      name: "Disprin",
      image: medicine,
      price: 150,
      quantity: 2,
    },
  ]);

  // Quantity Increase
  const increaseQuantity = (id) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Quantity Decrease
  const decreaseQuantity = (id) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Delete Item
  const deleteItem = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto p-6 textColor">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-300">
              <th className="border border-gray-300 p-2">Product</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Quantity</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="text-center">
                {/* Product Column */}
                <td className="border border-gray-300 p-2 flex flex-col sm:flex-row items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                 
                  </div>
                </td>

                {/* Price Column */}
                <td className="border border-gray-300 p-2 text-lg font-bold">
                  ${item.price}
                </td>

                {/* Quantity Column */}
                <td className="border border-gray-300 p-2">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-300 rounded"
                    >
                      -
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-300 rounded"
                    >
                      +
                    </button>
                  </div>
                </td>

                {/* Actions Column */}
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="text-red-500 text-xl"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddCart;