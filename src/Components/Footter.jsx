import { FaFacebook, FaTwitter, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="bg-white py-12 px-5 md:px-20">
                <div className="flex flex-wrap md:flex-nowrap justify-between gap-8">
                    <div className="w-full md:w-[25%]">
                        <a href="/home" className="text-3xl font-bold textColor">
                            Become an insider
                        </a>
                        <p className="text-[#9A9999] mb-2">
                            Receive exclusive offers, hydration news, and more when you subscribe.
                        </p>
                        <div className="flex sm:justify-center md:justify-start md:gap-4 gap-8">
                            {/* Facebook */}
                            <div className="relative group">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 text-xl textColor transition-colors bgIcon rounded-full flex items-center justify-center p-2"
                                >
                                    <FaFacebook />
                                </a>
                                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 bgColor text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Facebook
                                </span>
                            </div>

                            {/* Twitter */}
                            <div className="relative group">
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 text-xl textColor transition-colors bgIcon rounded-full flex items-center justify-center p-2"
                                >
                                    <FaTwitter />
                                </a>
                                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 bgColor text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Twitter
                                </span>
                            </div>

                            {/* LinkedIn */}
                            <div className="relative group">
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 text-xl textColor transition-colors bgIcon rounded-full flex items-center justify-center p-2"
                                >
                                    <FaLinkedin />
                                </a>
                                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 bgColor text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    LinkedIn
                                </span>
                            </div>
                        </div>

                    </div>

                    <div className="w-full md:w-[25%]">
                        <h4 className="font-bold text-xl mb-2">Our Classes</h4>
                        <div className="w-[40px] h-[4px] bgColor mb-4"></div>
                        <ul className="space-y-4">
                            {["Fitness Classes", "Aerobics Classes", "Power Yoga", "Lean Machines", "Full-Body Strength"].map((item, index) => (
                                <li key={index}>
                                    <a href={`/${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-[#9A9999] hover:text-[#152A5b] transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full md:w-[25%]">
                        <h4 className="font-bold text-lg mb-2">Quick Links</h4>
                        <div className="w-[40px] h-[4px] bgColor mb-4"></div>
                        <ul className="space-y-4">
                            {["About Us", "Services", "Contact", "Blog", "FAQs"].map((item, index) => (
                                <li key={index}>
                                    <a href={`/${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-[#9A9999] hover:text-[#152A5b] transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full md:w-[25%]">
                        <h4 className="font-bold text-lg mb-2">Contact Us</h4>
                        <div className="w-[40px] h-[4px] bgColor mb-4"></div>
                        <p className="text-[#9A9999] mb-4">Hassan Manzil Basement Hall Goheer Town Bahawalpur</p>
                        <div className="flex items-center mb-2">
                            <FaPhoneAlt className="text-xl textColor mr-2" />
                            <span className="text-black font-bold text-lg">+92 301 6981096</span>
                        </div>
                        <a href="mailto:codesthinker@gmail.com" className="text-[#9A9999] hover:textColor transition-colors">
                            codesthinker@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center bg-black w-full h-[70px]">
                <p className="text-[#9A9999] text-sm sm:text-md text-center">
                    © 2025 Medical. All Rights Reserved by CodesThinker
                </p>
            </div>
        </footer>
    );
};

export default Footer;
