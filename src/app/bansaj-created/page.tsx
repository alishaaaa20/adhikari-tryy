import React from "react";
import { Cake, PartyPopper, Frown } from "lucide-react";

export default function Page() {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center  "
      style={{ backgroundImage: 'url("/leafs/fullleaf.svg")' }}
    >
      <div className="flex flex-col items-center space-y-8 ">
        <div className="bg-[#0051BA] bg-opacity-90 rounded-full lg:p-6 w-[300px] md:w-[500px] md:flex-row md:p-4 lg:w-[600px] flex-col lg:flex-row  p-2 flex justify-between items-center text-white  ">
          <h1 className="text-lg">
            Bansaj Created:{" "}
            <span className="lg:text-2xl text-xl font-semibold">200</span>
          </h1>
          <h1 className="text-lg">
            Bansaj Created Today: {""}
            <span className="lg:text-2xl text-xl font-semibold">10</span>
          </h1>
        </div>
        <div className="bg-[#0051BA] bg-opacity-90 rounded-full lg:p-5 p-3 xl:w-[850px] lg:w-[800px] md:w-[700px]  w-[350px] sm:w-[500px] flex justify-between items-center text-white text-xl">
          <div className="flex flex-col items-center space-y-1 ">
            <div className="flex items-center space-x-2">
              <Cake size={40} />
              <h1 className="font-semibold  lg:text-2xl text-xl">200</h1>
            </div>
            <h1 className="text-base">Birthday(s)</h1>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <div className="flex items-center space-x-2  ">
              <PartyPopper size={40} />
              <h1 className="font-bold lg:text-2xl text-xl">50</h1>
            </div>
            <h1 className="text-base">Anniversary(s)</h1>
          </div>
          <div className="flex flex-col items-center space-y-1 ">
            <div className="flex items-center space-x-2">
              <Frown size={30} />
              <h1 className="font-semibold lg:text-2xl text-xl">10</h1>
            </div>
            <h1 className="text-base">Death(s)</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
