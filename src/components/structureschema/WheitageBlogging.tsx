import React from "react";

const WheitageBlogging = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" max-w-[1800px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 py-16">
      {children}
    </div>
  );
};

export default WheitageBlogging;
