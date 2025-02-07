import { useState } from "react";

export default function LoginProduct({ cardData, onSubmit, onCancel }) {
  const [title, setTitle] = useState(cardData.title);
  const [description, setDescription] = useState(cardData.description);
  const [price, setPrice] = useState(cardData.price);
  const [img, setImg] = useState(cardData.img);
  const [imgFile, setImgFile] = useState(null);

  const handleSubmit = () => {
    if (imgFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onSubmit({ img: reader.result, title, description, price });
      };
      reader.readAsDataURL(imgFile);
    } else {
      onSubmit({ img, title, description, price });
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-900 bg-opacity-75">
      <div className="w-[400px] bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Edit Product</h2>
        
        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Product Image</label>
          <input type="file" accept="image/*" className="mb-2" onChange={(e) => setImgFile(e.target.files[0])} />
          <input
            type="text"
            placeholder="Or enter image URL"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md"
          ></textarea>
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-600 text-white font-bold rounded-md hover:bg-green-500 transition"
          >
            Submit
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-600 text-white font-bold rounded-md hover:bg-gray-500 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
