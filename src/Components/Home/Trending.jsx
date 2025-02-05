import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import pillBottle from '../../assets/Homeimg/pain.png';
import tablets from '../../assets/Homeimg/vitamin.jpg';
import syrup from '../../assets/Homeimg/cough.jpg';
import { Link } from "react-router-dom";

export default function Trending() {
  const medicines = [
    {
      img: pillBottle,
      title: 'Pain Relief Capsules',
      price: '500',
      description: 'Fast-acting pain relief with anti-inflammatory benefits.',
    },
    {
      img: pillBottle,
      title: 'Anti-Inflammatory',
      price: '450',
      description: 'Reduces inflammation and alleviates joint pain.',
    },
    {
      img: syrup,
      title: 'Cough Syrup',
      price: '300',
      description: 'Effective formula for soothing cough and throat irritation with a refreshing mint taste.',
    },
    {
      img: syrup,
      title: 'Cough Syrup',
      price: '320',
      description: 'Relieves cough and nourishes the throat with a soothing honey lemon blend.',
    },
    {
      img: tablets,
      title: 'Vitamin C Tablets',
      price: '800',
      description: 'Boosts immunity and promotes overall health.',
    },
    {
      img: tablets,
      title: 'Calcium Tablets',
      price: '650',
      description: 'Strengthens bones and teeth, supports nerve function.',
    },
    {
      img: tablets,
      title: 'Iron Supplements',
      price: '700',
      description: 'Promotes healthy blood circulation and boosts energy levels.',
    },
    {
      img: tablets,
      title: 'Multivitamin Tablets',
      price: '900',
      description: 'Provides essential nutrients for overall health and wellness.',
    },
  ];


  return (
    <div className="w-full mt-6 sm:mt-10 sm:mb-10">
      <div className="sm:w-[90%] mx-auto w-[100%] px-10">
        <h1 className="text-xl sm:text-3xl textColor sm:text-center font-bold sm:mb-4">
          Trusted Healthcare Essentials
        </h1>
        <p className="sm:text-center text-gray-600 mb-4">Swipe or drag to explore our latest collection</p>


        <Swiper
          spaceBetween={20}
          slidesPerView={1.2} // Show partial next/previous slides
          loop={true} // Enables infinite looping
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Navigation, Scrollbar, Autoplay]} // Removed Pagination module
          scrollbar={{ draggable: true, hide: false }} // Enables drag-to-scroll
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
          className="mySwiper relative"
        >
          {medicines.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="cursor-pointer text-center py-6 bg-[#f7f8f8] p-4 rounded-lg border-b-4 border-transparent hover:shadow-lg transition-all ease-in delay-100 flex flex-col justify-between min-h-[300px]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[200px] object-cover rounded-lg"
                />
                <h1 className="text-xl sm:text-2xl capitalize font-semibold mt-2 h-[50px] flex items-center justify-center sm:mb-3">
                  {item.title}
                </h1>
                <p className="text-xs sm:text-xl sm:mb-3 mt-2 h-[40px] flex items-center justify-center">
                  {item.description.slice(0,40)}..
                </p>
                <p className="text-xs sm:text-xl mt-2 font-semibold">Price: {item.price}</p>
                <Link to='/shop'>
                  <button className="cursor-pointer mt-4 px-6 py-2 bg-[#ffcc00] text-black font-semibold rounded-full hover:bg-[#153A5B] hover:text-white transition">
                    Add to Cart
                  </button>
                </Link>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
    </div>
  );
}
