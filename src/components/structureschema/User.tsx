import React from "react";

const User = ({
  name,
  date,
}: {
  name: string;
  date: string;
}) => {
  return (
    <div className="flex items-center space-x-4 p-2 rounded-lg bg-gray-100 shadow-sm">
      <div>
        <p className="text-sm font-semibold text-gray-800">{name}</p>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default User;
