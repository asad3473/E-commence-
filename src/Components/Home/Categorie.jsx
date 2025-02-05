import medicines from '../../assets/Homeimg/medicines.jpeg'
import consume from '../../assets/Homeimg/consume.jpeg'
import pulse from '../../assets/Homeimg/pulse.jfif'
import welnes from '../../assets/Homeimg/welnes.jpeg'
import herbal from '../../assets/Homeimg/herbal.jpeg'
import medicine from '../../assets/Homeimg/medicine.png'
import caree from '../../assets/Homeimg/caree.jpg'
import hormonal from '../../assets/Homeimg/hormonal.webp'
export default function Categorie() {
    const categories = [
        {
            img: medicines,
            title: 'Featured Medicines',
        },
        {
            img: medicine,
            title: 'Over The Counter Medicines',
        },
        {
            img: caree,
            title: 'Family Care',
        },
        {
            img: herbal,
            title: 'Herbals And Alternatives',
        },
        {
            img: consume,
            title: 'Households, Cosmetics And Consumers',
        },
        {
            img: pulse,
            title: 'Devices And Injectables',
        },
        {
            img: welnes,
            title: 'Wellness And Beauty',
        },
        {
            img: hormonal,
            title: 'Hormonal Imbalances',
        },
    ];

    return (
        <div className=" mt-5">
            <div className=" ">
                <h1 className=" text-xl sm:text-3xl textColor sm:text-center font-bold sm:mb-8">Explore by Categories</h1>


                <div className="grid grid-cols-1 w-[90%] mx-auto sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="cursor-pointer flex gap-3 flex-col sm:flex-row  items-center justify-center py-4 bg-white rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-2 border border-[#0c384a52]"
                        >
                            <div className="px-2 h-20 flex items-center justify-center shadow-md">
                                <img src={category.img} alt={category.title} className="w-full  h-12 object-contain transition-all ease-in delay-75" />
                            </div>
                            <h3 className="text-lg font-semibold textColor">{category.title}</h3>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}
