import React from "react";
import { motion } from "framer-motion";

const Background = () => {
  return (
    <>
      <div className="w-full h-screen fixed z-[2]">
        <div className="w-full py-10 absolute top-[5%] flex justify-center !text-zinc-600 font-semibold">
          Documents.
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.8 }} // Start hidden, lower position
          animate={{ opacity: 1, y: 0, scale: 1 }} // Animate to full opacity & normal size
          transition={{
            duration: 1,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
          }} // Smooth spring effect
          className=" leading-none !text-[13vw] !text-zinc-900 -translate-x-[50%] font-semibold -translate-y-[50%] absolute top-1/2 left-1/2  tracking-tighter"
        >
          Docs.
        </motion.h1>
      </div>
    </>
  );
};

export default Background;
