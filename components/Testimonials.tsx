import { Button } from "./ui/button.tsx";

const Testimonials = () => {
  return (
    <div className=" ml-8 mr-8 rounded-[21px] bg-gainsboro box-border w-[335px] h-[445px] border-[1px] border-solid border-gray-500 flex items-center justify-center flex-col">
      <img
        className=" top-[16px] left-[104px] rounded-70xl w-[126px] h-32 object-cover"
        alt=""
        src="/download-1@2x.png"
      />
      <div className="mt-10 top-[173px] left-[51px] flex items-center w-[232px] h-[41px]">
        <span className="w-full">
          <p className="m-0 font-black text-center">Mark Zuckerberg</p>
          <p className="mt-1 text-center">facebook</p>
        </span>
      </div>
      <div className="flex justify-center items-center gap-4 mt-5 mb-5">
        <img
          className=" top-[229px] left-[99px] w-[26px] h-[23px] object-cover"
          alt=""
          src="/twitterx@2x.png"
        />
        <img
          className=" top-[226px] left-[149px] w-[29px] h-[33px] object-cover"
          alt=""
          src="/twitter@2x.png"
        />
        <img
          className=" top-[229px] left-[194px] w-[42px] h-[30px] object-cover"
          alt=""
          src="/facebook@2x.png"
        />
      </div>
      <div className=" top-[294px] left-[38px] text-gray-500 text-center flex  w-[259px] h-[69px]  items-center justify-center">
        Found this amazing platform to collaborae and get skilled people
      </div>
      <button className="bg-white mt-4 text-gray-600 font-400 rounded-[10px] text-black rounded- py-[8px] px-[15px]">
        Enroll here
      </button>
    </div>
  );
};

export default Testimonials;
