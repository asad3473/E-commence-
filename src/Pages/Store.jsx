import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

const Store = () => {
  return (
    <div>
      <div className="p-4">
        {/* Container for the cards */}
        <div className="flex flex-wrap justify-center gap-6 w-full min-h-screen">
          
          {/* First Row: Three Cards */}
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {/* Card 1 */}
            <div className="card w-[300px] h-[450px] shadow-md relative overflow-hidden">
              <div className="w-full h-[80%] relative">
                <img
                  className="w-full h-[90%] object-cover rounded-t-md cursor-pointer transform transition-transform duration-300 hover:scale-[1.2]"
                  src="http://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Long Coat"
                />
                <span className="absolute top-2 right-2">
                  <CiHeart className="bg-orange-400 p-[3px] text-[50px] rounded-sm text-white cursor-pointer" />
                </span>
              </div>
              <div className="content flex justify-between items-center p-4">
                <div>
                  <h3 className="font-bold text-2xl">Long Coat</h3>
                  <span>$200.00</span>
                </div>
                <button className="px-4 py-2 text-white bg-orange-400 rounded-sm text-3xl hover:bg-orange-300 cursor-pointer">
                  <MdOutlineLocalGroceryStore />
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card w-[300px] h-[450px] shadow-md relative overflow-hidden">
              <div className="w-full h-[80%] relative">
                <img
                  className="w-full h-[90%] object-cover rounded-t-md cursor-pointer transform transition-transform duration-300 hover:scale-[1.2]"
                  src="http://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Long Coat"
                />
                <span className="absolute top-2 right-2">
                  <CiHeart className="bg-orange-400 p-[3px] text-[50px] rounded-sm text-white cursor-pointer" />
                </span>
              </div>
              <div className="content flex justify-between items-center p-4">
                <div>
                  <h3 className="font-bold text-2xl">T Shirt</h3>
                  <span>$200.00</span>
                </div>
                <button className="px-4 py-2 text-white bg-orange-400 rounded-sm text-3xl hover:bg-orange-300 cursor-pointer">
                  <MdOutlineLocalGroceryStore />
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card w-[300px] h-[450px] shadow-md relative overflow-hidden">
              <div className="w-full h-[80%] relative">
                <img
                  className="w-full h-[90%] object-cover rounded-t-md cursor-pointer transform transition-transform duration-300 hover:scale-[1.2]"
                  src="http://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Long Coat"
                />
                <span className="absolute top-2 right-2">
                  <CiHeart className="bg-orange-400 p-[3px] text-[50px] rounded-sm text-white cursor-pointer" />
                </span>
              </div>
              <div className="content flex justify-between items-center p-4">
                <div>
                  <h3 className="font-bold text-2xl">Long Coat</h3>
                  <span>$200.00</span>
                </div>
                <button className="px-4 py-2 text-white bg-orange-400 rounded-sm text-3xl hover:bg-orange-300 cursor-pointer">
                  <MdOutlineLocalGroceryStore />
                </button>
              </div>
            </div>
          </div>

          {/* Second Row: Three Cards */}
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {/* Card 4 */}
            <div className="card w-[300px] h-[450px] shadow-md relative overflow-hidden">
              <div className="w-full h-[80%] relative">
                <img
                  className="w-full h-[90%] object-cover rounded-t-md cursor-pointer transform transition-transform duration-300 hover:scale-[1.2]"
                  src="http://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Long Coat"
                />
                <span className="absolute top-2 right-2">
                  <CiHeart className="bg-orange-400 p-[3px] text-[50px] rounded-sm text-white cursor-pointer" />
                </span>
              </div>
              <div className="content flex justify-between items-center p-4">
                <div>
                  <h3 className="font-bold text-2xl">Long Coat</h3>
                  <span>$200.00</span>
                </div>
                <button className="px-4 py-2 text-white bg-orange-400 rounded-sm text-3xl hover:bg-orange-300 cursor-pointer">
                  <MdOutlineLocalGroceryStore />
                </button>
              </div>
            </div>

            {/* Card 5*/}
            <div className="card w-[300px] h-[450px] shadow-md relative overflow-hidden">
              <div className="w-full h-[80%] relative">
                <img
                  className="w-full h-[90%] object-cover rounded-t-md cursor-pointer transform transition-transform duration-300 hover:scale-[1.2]"
                  src="http://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Long Coat"
                />
                <span className="absolute top-2 right-2">
                  <CiHeart className="bg-orange-400 p-[3px] text-[50px] rounded-sm text-white cursor-pointer" />
                </span>
              </div>
              <div className="content flex justify-between items-center p-4">
                <div>
                  <h3 className="font-bold text-2xl">Long Coat</h3>
                  <span>$200.00</span>
                </div>
                <button className="px-4 py-2 text-white bg-orange-400 rounded-sm text-3xl hover:bg-orange-300 cursor-pointer">
                  <MdOutlineLocalGroceryStore />
                </button>
              </div>
            </div>

            {/* Card 6 */}
            <div className="card w-[300px] h-[450px] shadow-md relative overflow-hidden">
              <div className="w-full h-[80%] relative">
                <img
                  className="w-full h-[90%] object-cover rounded-t-md cursor-pointer transform transition-transform duration-300 hover:scale-[1.2]"
                  src="http://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Long Coat"
                />
                <span className="absolute top-2 right-2">
                  <CiHeart className="bg-orange-400 p-[3px] text-[50px] rounded-sm text-white cursor-pointer" />
                </span>
              </div>
              <div className="content flex justify-between items-center p-4">
                <div>
                  <h3 className="font-bold text-2xl">Long Coat</h3>
                  <span>$200.00</span>
                </div>
                <button className="px-4 py-2 text-white bg-orange-400 rounded-sm text-3xl hover:bg-orange-300 cursor-pointer">
                  <MdOutlineLocalGroceryStore />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Last Section */}
      <div className="w-[80%] mx-auto px-[50px] pt-[100px] max-[1000px]:pt-[30px]">
        <div className="text-3xl font-bold flex flex-wrap justify-evenly items-center w-full max-[600px]:flex-wrap max-[1000px]:text-[15px]">
          {/* BRIT+CO */}
          <div className="px-[10px] py-[15px] w-[15%] max-[545px]:w-full text-center">
            <span className="text-red-800">BRIT</span>
            <span className="text-cyan-800">+</span>
            <span className="text-yellow-300">CO</span>
          </div>

          {/* GILT */}
          <div className="px-[10px] py-[15px] w-[15%] max-[545px]:w-full text-center">
            <span>GILT</span>
          </div>

          {/* POPSUGAR */}
          <div className="px-[10px] py-[15px] w-[15%] max-[545px]:w-full text-center">
            <span className="text-red-500">POPSUGAR</span>
          </div>

          {/* HUFFPOST */}
          <div className="px-[10px] py-[15px] w-[15%] max-[545px]:w-full text-center">
            <span className="text-blue-500">|</span>
            <span>HUFFPOST</span>
            <span className="text-blue-500">|</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
