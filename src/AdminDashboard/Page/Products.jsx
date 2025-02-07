import { useState } from "react";
import LoginProduct from "./LoginProduct";

export default function Products() {
  const [Card_Array, setCard_Array] = useState([
    {
      img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60",
      title: "Product 1",
      description: "Amazing Watch",
      price: "232"
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&auto=format&fit=crop&q=60",
      title: "Product 2",
      description: "Another amazing product",
      price: "150"
    },
    {
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
      title: "Product 3",
      description: "This product is worth checking out",
      price: "299"
    },
    {
      img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60",
      title: "Product 1",
      description: "Amazing Watch",
      price: "232"
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&auto=format&fit=crop&q=60",
      title: "Product 2",
      description: "Another amazing product",
      price: "150"
    },
    {
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
      title: "Product 3",
      description: "This product is worth checking out",
      price: "299"
    },
    {
      img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60",
      title: "Product 1",
      description: "Amazing Watch",
      price: "232"
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&auto=format&fit=crop&q=60",
      title: "Product 2",
      description: "Another amazing product",
      price: "150"
    },
    {
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
      title: "Product 3",
      description: "This product is worth checking out",
      price: "299"
    },
    {
      img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60",
      title: "Product 1",
      description: "Amazing Watch",
      price: "232"
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&auto=format&fit=crop&q=60",
      title: "Product 2",
      description: "Another amazing product",
      price: "150"
    },
    {
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
      title: "Product 3",
      description: "This product is worth checking out",
      price: "299"
    }
    
  ]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editData, setEditData] = useState(null);

  const Del_Card = (index) => {
    setCard_Array(Card_Array.filter((_, i) => i !== index));
  };

  const openEditForm = (index) => {
    setEditingIndex(index);
    setEditData(Card_Array[index]);
  };

  const handleEditSubmit = (updatedCard) => {
    const updatedArray = [...Card_Array];
    updatedArray[editingIndex] = updatedCard;
    setCard_Array(updatedArray);
    setEditingIndex(null);
    setEditData(null);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4 bg-gray-100">
      {editingIndex !== null ? (
        <LoginProduct cardData={editData} onSubmit={handleEditSubmit} onCancel={() => setEditingIndex(null)} />
      ) : (
        <div className="w-[80%] p-6 flex flex-col gap-6 items-center">
          <h1 className="text-4xl font-bold text-gray-800">Our Products</h1>

          {/* Cards Container */}
          <div className="w-full flex flex-wrap justify-center gap-6">
            {Card_Array.map((card, index) => (
              <div key={index} className="w-[250px] h-[350px] bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="img w-full h-[180px]">
                  <img src={card.img} alt="Product" className="w-full h-full object-cover rounded-sm" />
                </div>
                <div className="p-3 text-center">
                  <h1 className="text-xl font-bold">{card.title}</h1>
                  <p className="text-sm text-gray-600">{card.description}</p>
                  <p className="text-lg font-semibold text-gray-900">${card.price}</p>
                </div>
                <div className="flex justify-center gap-2 pb-3">
                  <button
                    onClick={() => openEditForm(index)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition font-bold text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => Del_Card(index)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition font-bold text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
