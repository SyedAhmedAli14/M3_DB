import WheitageBlogging from "@/components/structureschema/WheitageBlogging";
import React from "react";
import homeImg from "@/assets/images/sectionImages/Home.jpg";
import userImg from "@/assets/images/sectionImages/user.png";
import Image from "next/image";
import User from "@/components/structureschema/User";

const HomeSection = () => {
  return (
    <WheitageBlogging>
      <div className="pt-0 relative">
          <Image
      src={homeImg}
      alt="Home Image"
      width={2000} 
      height={1080} 
      className="w-full h-full"
    />
        <div className="p-8 bg-white space-y-4 w-full md:w-[600px] md:absolute -bottom-16 left-[7%] rounded-lg shadow-xl transition-all hover:shadow-2xl hover:scale-105">
          <span className="px-6 py-2 bg-blue-600 text-white rounded-md text-sm sm:text-lg font-semibold">
            Food
          </span>
          <h1 className="text-black font-semibold text-xl sm:text-2xl md:text-4xl leading-tight">
            The Impact of HealthyFood in the Daily Life: How Diet is Essential
          </h1>
          <User img={userImg} name="Syed Ahmed Ali Shah" date="January, 2025" />
        </div>
      </div>
    </WheitageBlogging>
  );
};

export default HomeSection;