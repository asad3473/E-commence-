import { FaRocket } from "react-icons/fa";
import { FcCustomerSupport } from "react-icons/fc"
import { GiReturnArrow } from "react-icons/gi";

export default function Shipping() {

    const shiping = [
        {
            icon: <FaRocket />, title: "Free Shipping", desc: "Enjoy free shipping on all orders, making your shopping experience even better. Shop now and get your favorite styles delivered at no extra cost!"
        },
        {
            icon: <GiReturnArrow />, title: "Easy Returns", desc: "Not satisfied with your purchase? No worries! We offer easy returns and refunds. Shop with confidence and get your money back if you are not happy with your purchase."
        },
        {
            icon: <FcCustomerSupport />, title: "Customer Support", desc: "Our customer support team is available 24/7 to help you with any queries. Feel free to contact us anytime and we will be happy to assist you in any way we can."
        }
    ]
    return (
        <div className=" mt-10 sm:mt-20 w-full sm:10">

            <div className=" cursor-pointer w-[90%] mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-10  ">
                {
                    shiping.map((item, index) => (
                        <div key={index} className="flex h-auto sm:h-[200px] bg-[#f7f8f8] p-3 flex-col justify-start  items-start hover:rounded-xl relative hover:bg-[#4a606d86] hover:text-white transition transform hover:scale-105 ">
                            <div className="text-black  text-xl absolute top-[-20px] sm:top-[-30px] p-2 sm:p-4 rounded-sm bg-[#ffcc00]  font-semibold hover:rounded-full hover:bg-[#153A5B] delay-300 hover:text-white transition hover:rotate-20 ">
                                {item.icon}
                            </div>
                            <div className=" mt-3">
                                <h1 className="sm:text-xl md:text-xl lg:text-2xl font-semibold">{item.title}</h1>
                                <p className="text-xs sm:text-[15px] lg:text-[17px] md:text-[15px] mt-2">{item.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
