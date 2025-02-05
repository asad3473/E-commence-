import { Link } from "react-router-dom";
// import cloth from "../../assets/Homeimg/cloth.jpg";
import medicine from "../../assets/Homeimg/medicine.png";
import Shipping from "./Shipping";
import Trending from "./Trending";
import Explore from "./Explore";
import Categorie from "./Categorie";
import Blogs from "../Blogs/Blogs";

export default function Hero() {
  return (
    <div className="w-full">

      {/* Content Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full py-10 bg-[#153a5b73]  shadow-lg">
        {/* Left Content */}
        <div className="text-center md:text-left p-6">
          <p className="text-white font-medium">Advanced Healthcare Solutions 2024</p>
          <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl textColor">
            Compassionate Care for a Healthier Tomorrow
          </h1>
          <p className="mt-2 text-white">
            Experience top-tier medical services tailored to your well-being. Quality healthcare, advanced treatments, and expert care you can trust.
          </p>
          <Link to="/services">
            <button className="cursor-pointer mt-4 px-6 py-2 bg-[#ffcc00] text-black font-semibold rounded-full hover:bg-[#153A5B] hover:text-white transition">
              Explore Services
            </button>
          </Link>
        </div>


        {/* Right Image */}
        <div className="flex justify-center">
          <img src={medicine} alt="Shopping" className="h-72 sm:h-80 md:h-[85%] object-contain" />
        </div>
      </div>





      {/* trending */}

      <Trending />

      {/* categorie */}
      <Categorie />

      {/* explore */}
      <Explore />


      {/* Blogs */}

      <Blogs btnname={'View all blogs'}/>
      {/* free shipping */}
      <Shipping />
    </div>
  );
}
