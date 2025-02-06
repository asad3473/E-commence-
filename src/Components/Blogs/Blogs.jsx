import skincare from '../../assets/Homeimg/skincare.jpg'
import healthy from '../../assets/Homeimg/healthy.jpeg'
import exercise from '../../assets/Homeimg/exercise.jpeg'
import { Link } from 'react-router-dom';
export default function Blogs({ btnname }) {
    const blogData = [
        {
            id: 1,
            title: "Skin Care Tips for Glowing Skin",
            image: skincare,
            content: "Learn how to take care of your skin with these simple tips."
        },
        {
            id: 2,
            title: "Top 5 Healthy Habits",
            image: healthy,
            content: "Adopt these healthy habits to improve your lifestyle."
        },
        {
            id: 3,
            title: "Benefits of Regular Exercise",
            image: exercise,
            content: "Exercise is essential for maintaining good health. Here's why."
        },
        // Add more blogs as needed
    ];

    return (
        <div className=" mt-3 sm:mt-10">
            <div className=" w-[100%] sm:w-[40%] mx-auto text-center  sm:mb-5">
                <h2 className="text-xl sm:text-3xl textColor sm:text-center font-bold sm:mb-4">Read top articles of the day</h2>
                <p className=" text-xs sm:text-xl">Health articles that keep you informed about good health practices and achieve your goals.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
                {blogData.map((blog) => (
                    <div key={blog.id} className="border p-4 rounded-lg">
                        <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-md" />
                        <h3 className="mt-4 text-xl font-semibold">{blog.title}</h3>
                        <p className=' mt-2 text-gray-600 '>
                            {blog.content} 
                        </p>
                        <Link to='/shop' className="mt-2 textColor underline">read more</Link>
                    </div>
                ))}
            </div>

            <div className=' flex justify-center items-center'>
                <Link to='/blogs'>
                    <button className="cursor-pointer mt-4 px-6 py-2 bg-[#ffcc00] text-black font-semibold rounded-full hover:bg-[#153A5B] hover:text-white transition">
                        {
                            btnname ? btnname : 'Load more'
                        }
                    </button>
                </Link>
            </div>
        </div>
    );
}
