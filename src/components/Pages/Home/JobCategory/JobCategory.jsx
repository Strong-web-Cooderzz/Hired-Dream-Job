import React from "react";
import { FaCoins, FaHandHoldingUsd, FaHandshakeAltSlash, FaHandsHelping, FaLaptopCode } from "react-icons/fa";
import { GoMegaphone } from "react-icons/go";
import { MdOutlineDesignServices, MdPersonSearch } from "react-icons/md";
import { RxRocket } from "react-icons/rx";
import { GiHealthNormal } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

const JobCategory = () => {
  const category = [
    {
      Name: "Accounting / Finance",
      icon: <FaCoins className="text-4xl text-blue-500 child2 duration-1000" />,
      Positions: 2,
    },
    {
      Name: "Marketing",
      icon: (
        <GoMegaphone className="text-4xl text-blue-500 child2 duration-1000" />
      ),
      Positions: 86,
    },
    {
      Name: "Design",
      icon: (
        <MdOutlineDesignServices className="text-4xl text-blue-500 child2 duration-1000" />
      ),
      Positions: 43,
    },
    {
      Name: "Development",
      icon: (
        <FaLaptopCode className="text-4xl text-blue-500 child2 duration-1000" />
      ),
      Positions: 12,
    },
    {
      Name: "Human Resource",
      icon: (
        <MdPersonSearch className="text-4xl text-blue-500 child2 duration-1000" />
      ),
      Positions: 55,
    },
    {
      Name: "Automotive Jobs",
      icon: (
        <RxRocket className="text-4xl text-blue-500 child2 duration-1000" />
      ),
      Positions: 2,
    },
    {
      Name: "Customer Service",
      icon: <FaHandsHelping className="text-4xl text-blue-500 child2 duration-1000" />,
      Positions: 2,
    },
    {
      Name: "Health and Care",
      icon: (
        <GiHealthNormal className="text-4xl text-blue-500 child2 duration-1000" />
      ),
      Positions: 25,
    },
    {
      Name: "Project Management",
      icon: (
        <FaHandsHelping className="text-4xl text-blue-500 child2 duration-1000" />
      ),
      Positions: 92,
    },
  ];
  return (
    <>
      <section className="w-full  mx-auto py-20 px-5">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-semibold">Popular Job Categories</h2>
          <p className="text-md text-[#b3b3b3]">9 Categories are available</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
          {category.map(({ Name, icon, Positions }) => (
            <div className="flex justify-start hover:bg-blue-100 items-center gap-5 cursor-pointer parent border border-cyan-400/30 p-5 rounded-lg">
              <div className="p-4 bg-black/5 rounded-lg child duration-1000">
                <span>{icon}</span>
              </div>
              <div>
                <p className="text-xl font-semibold">{Name}</p>
                <p className="text-sm text-gray-400">
                  ({Positions} open positions)
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default JobCategory;
