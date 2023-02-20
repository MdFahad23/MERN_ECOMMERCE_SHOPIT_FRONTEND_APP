import React from "react";

const Loading = () => {
  return (
    <div className="w-[100vw] h-[60vh] grid place-items-center max-w-[100%]">
      <div className="w-[10vmax] h-[10vmax] border-b-[5px] border-b-[#000000e8] rounded-[50%] animate-spin"></div>
    </div>
  );
};

export default Loading;
