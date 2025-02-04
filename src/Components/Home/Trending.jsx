import blue from '../../assets/Homeimg/blue.jpg'
import choclate from '../../assets/Homeimg/choclate.jpg'
import green from '../../assets/Homeimg/green.jpg'
// import orange from '../../assets/Homeimg/orange.jpg'
export default function Trending() {
    const cloth = [
        {
            img: blue, title: 'Blue Color', price: '2000', avlblecolor: 'red,greed,orange'
        },
        {
            img: green, title: 'Jade green Color', price: '2800', avlblecolor: 'red,greed,orange'
        },
        {
            img: choclate, title: 'choclate Color', price: '2500', avlblecolor: 'red,greed,orange'
        },
    ]
    return (
        <div className=" w-full mt-6 sm:mt-10">
            <div className=" sm:w-[90%] mx-auto w-[100%]">
                <h1 className="  text-xl sm:text-3xl text-[#415A70] sm:text-center font-bold sm:mb-10 ">New Collection of Our Brand</h1>


                {/* swipper */}
                <div className=' sm:w-[100%] mx-auto w-[100%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4'>
                    {
                        cloth.map((item, index) => (
                            <div
                                key={index}
                                className="text-center py-6 bg-[#f7f8f8] p-4 rounded-lg border-b-4 border-transparent hover:p-0 hover:border-[#153A5B] transition-all ease-in delay-100"
                            >
                                <img src={item.img}
                                    alt={item.title}
                                    className='w-full h-[200px] object-cover rounded-lg'
                                />
                                <h1 className='text-xl sm:text-2xl capitalize font-semibold mt-2'>{item.title}</h1>
                                <p className='text-xs sm:text-xl mt-2'>Price: {item.price}</p>
                                <p className='text-xs sm:text-xl mt-2'>Available Color: {item.avlblecolor}</p>
                            </div>
                        ))
                    }
                </div>


            </div>
        </div>
    )
}
