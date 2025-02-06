import { Link } from 'react-router-dom';
import medical from '../../assets/Homeimg/medical.mp4';

export default function ContactUs() {
  return (
    <div className="relative w-full h-screen">
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src={medical} type="video/mp4" />
      </video>


      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-lg sm:p-8 p-2 rounded-lg shadow-lg sm:w-[80%] w-full flex sm:flex-row flex-col sm:gap-6 border border-white/20">

        <div className="sm:w-[50%] w-full text-white flex flex-col mb-2 justify-center">
          <h2 className="sm:text-4xl text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="sm:text-xl text-xs">
            Have questions or need assistance? Feel free to reach out. We re here to help!
          </p>
        </div>


        <form className="sm:w-[50%] w-full space-y-4">
          <div className="relative">
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 rounded-md outline-none focus:border-[#153A5B] placeholder-gray-200"
              required
            />
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 rounded-md outline-none focus:border-[#153A5B] placeholder-gray-200"
              required
            />
          </div>
          <div className="relative">
            <textarea
              id="message"
              placeholder="Enter your message"
              className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 rounded-md outline-none focus:border-[#153A5B] placeholder-gray-200"
              rows="5"
              required
            ></textarea>
          </div>
          <Link to='/login'>
            <button
              type="submit"
              className="w-full cursor-pointer mt-4 px-6 py-2 bg-[#ffcc00] text-black font-semibold rounded-md hover:bg-[#153A5B] hover:text-white transition"
            >
              Send Message
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
