import { Link } from 'react-router-dom';
import upto from '../../assets/Homeimg/upto.webp';

export default function Explore() {
    return (
        <div
            className="mt-10 h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center relative"
            style={{ backgroundImage: `url(${upto})` }}
        >
            <div className="w-full h-full bg-[#153a5b8c] flex justify-start items-center">
                <div className="max-w-lg text-white p-6">
                    <h1 className="text-5xl font-bold">Your Health, Our Priority</h1>
                    <p className="text-lg mt-4">
                        Get up to <span className="font-bold text-yellow-300">30% off</span> on essential 
                        **medicines, health supplements, and personal care products**.  
                        Trusted by thousands for **quality healthcare at unbeatable prices**.  
                        **Order now and get fast doorstep delivery!**  
                    </p>
                    <Link to="/shop">
                        <button className="cursor-pointer mt-6 px-6 py-3 bg-[#ffcc00] text-black font-semibold rounded-full hover:bg-[#153A5B] hover:text-white transition">
                            Shop Healthcare Essentials
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
