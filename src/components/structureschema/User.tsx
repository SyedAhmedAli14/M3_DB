import Image, { StaticImageData } from "next/image";
import React from "react";

const User = ({
  img,
  name,
  date,
}: {
  img: StaticImageData;
  name: string;
  date: string;
}) => {
  return (
    <div className="flex items-center space-x-4 p-2 rounded-lg bg-gray-100 shadow-sm">
      <Image
        src={img}
        alt="User Image"
        className="w-10 h-10 rounded-full border border-gray-300"
      />
      <div>
        <p className="text-sm font-semibold text-gray-800">{name}</p>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default User;
