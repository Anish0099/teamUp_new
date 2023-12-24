import React from "react";
import { ModeToggle } from "../components/ui/toggle-mode.tsx";
import Nav from "../components/Nav";
import Testimonials from "../components/Testimonials.tsx";
import Hero from "../components/Hero.tsx";
import { Button } from "@/components/ui/button.tsx";

const page = () => {
  return (
    <div className="px-[30px] py-[30px]">
      <main className="h-screen  text-[#FFFFFF] font-nunito  ">
        <Nav />
        <div className="mt-[30px] ml-[130px] ">
          <img className="w-[442px] h-[253px]" src="/vector-1@2x.png" />
        </div>
        <div>
          <img
            className="absolute rotate-[380deg] top-[2px] right-[180px] h-[620px] w-[800px] mr-[10px]"
            src="/vector-2@2x.png"
          />
        </div>
        <div>
          <img
            className="absolute rotate-[150deg] h-[241px] w-[431px] right-[180px]"
            src="/vector-3@2x.png"
          />
        </div>

        <main className="h-[400px] flex justify-end flex-col items-start absolute top-[260px]">
          <Hero />
        </main>
      </main>

      <main>
        <div className=" mt-0 mb-20 font-semibold   text-[40px] ">
          TESTIMONIALS
        </div>

        <div className=" rounded-[21px] box-border w-[1450px] h-[500px] border-[1px] border-solid border-gray-500 flex justify-between items-center ">
          <Testimonials />
          <Testimonials />
          <Testimonials />
        </div>
      </main>
    </div>
  );
};

export default page;
