import { Link } from 'react-router-dom';
import ai from '../../assets/Homeimg/ai.webp';

export default function Explore() {
    return (
        <div
            className="mt-10 h-screen bg-cover bg-center flex justify-center items-center relative"
            style={{ backgroundImage: `url(${ai})` }}
        >
            <div className="w-full h-full bg-[#153a5b8c] flex justify-start items-center">
                <div className="max-w-lg text-white p-6">
                    <h1 className="text-5xl font-bold">Discover Your Unique Style</h1>
                    <p className="text-lg mt-4">
                        Explore our exclusive fashion collection designed to make you stand out.
                        From casual to elegant, find the perfect look for any occasion.
                    </p>
                    <Link to="/shop">
                        <button className="cursor-pointer mt-6 px-6 py-3 bg-[#153A5B] hover:text-black rounded-full hover:bg-white transition">
                            Shop Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
