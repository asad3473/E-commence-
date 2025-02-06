export default function Products() {
  let Card_Array = [
    {
      img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      title: "Product 1",
      description: "This is Description About the product",
      price: "$232"
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&auto=format&fit=crop&q=60",
      title: "Product 2",
      description: "Another amazing product",
      price: "$150"
    },
    {
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
      title: "Product 3",
      description: "This product is worth checking out",
      price: "$299"
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&auto=format&fit=crop&q=60",
      title: "Product 4",
      description: "Best choice for you",
      price: "$199"
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&auto=format&fit=crop&q=60",
      title: "Product 5",
      description: "Affordable and stylish",
      price: "$180"
    },
    {
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
      title: "Product 6",
      description: "High-quality product",
      price: "$275"
    }
  ];

  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4">
      <div className="w-[80%] p-6 flex flex-col gap-6 items-center 
        max-[950px]:mt-[100px] max-[950px]:mb-[100px] max-[670px]:gap-12">
          <h1 className="text-4xl font-bold text-gray-800">Our Products</h1>
        
        {/* Cards Container */}
        <div className="w-full flex flex-wrap justify-center gap-6">
          
          {Card_Array.map((card, index) => (
            <div 
              key={index} 
              className="w-[250px] h-[350px] bg-white shadow-md shadow-blue-500 
              transform hover:scale-105 transition duration-400 rounded-lg overflow-hidden"
            >
              <div className="img w-full h-[180px]">
                <img src={card.img} alt="Product" className="w-full h-full object-cover rounded-sm" />
              </div>
              <div className="card-content flex flex-col items-center justify-center text-center p-3">
                <h1 className="text-xl font-bold">{card.title}</h1>
                <p className="text-sm text-gray-600">{card.description}</p>
                <p className="text-lg font-semibold text-gray-900">{card.price}</p>
              </div>
              <div className="flex justify-center gap-2 pb-3">
                <button className="px-4 py-2 bg-amber-700 text-white rounded-lg shadow-md hover:bg-amber-600 transition font-bold text-sm">
                  Edit
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-500 transition font-bold text-sm">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
