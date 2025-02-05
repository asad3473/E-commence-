import shine from '../../assets/Homeimg/shine.jpg';
import jade from '../../assets/Homeimg/jade.jpg';
import cloth from '../../assets/Homeimg/cloth.jpg';

export default function Shops() {
    const shop = [
        { img: shine, title: 'Unstich Suit', joined: 'Shop Now' },
        { img: jade, title: 'Unstich Suit', joined: 'Shop Now' },
        { img: cloth, title: 'Unstich Suit', joined: 'Shop Now' },
    ];

    return (
        <div className="w-full">
            <div className="w-[90%] mx-auto mt-6 sm:mt-10">
                <h1 className="text-xl sm:text-3xl text-[#415A70] font-bold sm:text-center sm:mb-10 ">Shops</h1>

                {/* Shops */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 ">
                    {shop.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col cursor-pointer items-center rounded-lg transition-all ease-in-out duration-300 grayscale-100 hover:grayscale-0 main "
                        >
                            {/* Image */}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-[50vh] sm:h-[70vh] object-cover rounded-lg mb-4 transition-transform "
                            />
                            {/* Text */}
                            <h2 className="text-lg font-semibold text-[#415A70] hide">{item.title}</h2>
                            <div className='child'>
                                <a
                                    href="/"
                                    className="text-xl font-semibold underline mt-2 "
                                >
                                    {item.joined}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
