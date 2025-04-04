import React from "react";

const Background = () => {
  return (
    <>
      <div className="w-full h-screen fixed z-[2]">
        <div className="w-full py-10 absolute top-[5%] flex justify-center !text-zinc-600 font-semibold">
          Documents.
        </div>
        <h1 className=" leading-none !text-[13vw] !text-zinc-900 -translate-x-[50%] font-semibold -translate-y-[50%] absolute top-1/2 left-1/2  tracking-tighter">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
