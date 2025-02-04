import { Link } from "react-router-dom";
import cloth from "../../assets/Homeimg/cloth.jpg";
import shoping from "../../assets/Homeimg/shoping.png";
import Shipping from "./Shipping";
import Trending from "./Trending";
import Shops from "./Shops";
import Explore from "./Explore";

export default function Hero() {
  return (
    <div className="w-full">
      <div
        className=" bg-cover bg-no-repeat bg-center flex items-center justify-center p-6 px-4"
        style={{ backgroundImage: `url(${cloth})` }}
      >
        {/* Content Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-6xl w-full bg-[#6d583765]  rounded-lg shadow-lg">
          {/* Left Content */}
          <div className="text-center md:text-left p-6">
            <p className="text-white font-medium">Trending Collection 2024</p>
            <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl text-gray-900">
              Inspired by your fashion dream
            </h1>
            <p className="mt-2 text-gray-700">
              Elevate your style with our premium suit collection. Designed for sophistication and comfort.
            </p>
            <Link to="/">
              <button className=" cursor-pointer mt-4 px-6 py-2 bg-[#153A5B] text-white rounded-full hover:bg-[#102A42] transition">
                Shop Now
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img src={shoping} alt="Shopping" className="h-72 sm:h-80 md:h-[85%] object-contain" />
          </div>
        </div>



      </div>


        {/* free shipping */}
        <Shipping/>

        {/* trending */}

        <Trending/>

        {/* shops */}
        <Shops/>

        {/* explore */}
        <Explore/>
    </div>
  );
}
