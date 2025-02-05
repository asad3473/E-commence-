import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";

export default function ContactUs() {
  return (
    <div className=" relative h-screen flex items-center justify-center  bg-[#0E0E0E]            ">
      <div className=" bg-[url('unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyZSUyMGhkJTIwaW1nfGVufDB8fDB8fHww')] bg-cover bg-no-repeat w-[60%] h-[85vh] bg-[#C6F42E] flex items-center justify-center rounded-2xl  ">
        {/* form has started >>>>>>  */}
        <div className=" relative form w-[80%] h-[70vh] bg-white flex  rounded-lg  max-[1000px]: ">
          {/* form img  */}
          <div className="a_form h-full max-[1000px]:w-[70%] w-[50%] bg-gray-400 max-[800px]:w-0 max-[800px]:h-0">
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="h-full w-[full] bg-cover max-[800px]:hidden "
            />
          </div>
          {/* form content >>>>> */}
          <div className="b_form_content mx-[10%] outline-none max-[1100px]:text-[12px] max-[800px]:w-full max-[800px]:h-full max-[1530px]-text-[12px]  ">
            <h1 className="text-2xl font-bold mt-2">CONTACT FORM </h1>

            <div className="flex flex-col items-start mt-7">
              <label htmlFor="" className="block  ">
                Full Name{" "}
              </label>{" "}
              <br />
              <input
                type="text"
                placeholder=""
                className="w-full border-b-2 border-gray-300 outline-none focus:border-blue-500"
              />{" "}
              <br />
              <label htmlFor=""> Email </label> <br />
              <input
                type="text"
                placeholder=""
                className="w-full border-b-2 border-gray-300 outline-none focus:border-blue-500"
              />{" "}
              <br />
              <label htmlFor=""> Comment / Message </label> <br />
              <input
                type="text"
                placeholder=""
                className="w-full border-b-2 border-gray-300 outline-none focus:border-blue-500"
              />{" "}
              <br />
              <button
                type="submit"
                className="bg-gray-400 font-bold px-[50%] py-[15px] my-5 text-black-40 hover:bg-gray-800 hover:text-white rounded-3xl cursor-pointer  max-[1000px]:my-0 max-[1000px]:px-[20%] max-[1000px]:py-[10px] max-[800px]:mt-4 max-[800px]:w-full max-[800px]:text-[15px] --------  max-[1530px]:my-0 max-[1530px]:px-[30%] max-[1530px]:py-[10px]  "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* small box >>>>>  */}

      <div className=" absolute top-40 left-70 s_box w-[150px] flex flex-col justify-around items-center  bg-white h-[200px] px-[10px] py-[20px] rounded-xl max-[1100px]:left-40 max-[1100px]:w-[150px] max-[1000px]:hidden    max-[750px]:w-[100px] max-[750px]:h-[120px]  max-[750px]:top-15 max-[750px]:left-15 ">
        <div className="flex justify-between  items-center ] ">
          <span>
            <IoLocationSharp className="text-2xl text-blue-800" />
          </span>
          <span className="text-2xl font-xl font-semibold ml-2">Location</span>
        </div>
        <div className="flex justify-between gap-3 items-center">
          <span>
            <FaPhone className="text-2xl text-blue-800" />
          </span>
          <span className="text-2xl font-semibold ml-2">Phone</span>
        </div>
        <div className="flex justify-between gap-3 items-center">
          <span>
            <IoIosTime className="text-2xl text-blue-800" />
          </span>
          <span className="text-2xl ml-2 font-xl font-semibold">Hours</span>
        </div>
      </div>

      {/* blue box >>>>>>>> */}
      <div className="w-[150px] max-[651px]:hidden pt-[10px] rounded-xl p-[] h-[90px] bg-[#4272F9] absolute top-40 right-70 text-2xl leading-[2] max-[1100px]:right-60 max-[1100px]:w-[100px] max-[1100px]:h-[80px] max-[1100px]:text-[15px] max-[1200px]:h3 max-[1000px]:top-80  max-[1000px]:right-50  max-[930px]:top-60  max-[930px]:right-40   ">
        <p className=" font-serif text-white text-2xl text-center font-bold"> Submit</p>
        <p className=" text-white text-center"> Your Form </p>
      </div>

    </div>
  );
}
