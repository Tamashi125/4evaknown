import React from "react";
// image
import evaknownImg from "../assets/4evaknown_final.png";
// framer motion
import { motion } from "motion/react";
// components
import Social from "./Social";
import Music from "./Music";

const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden max-[365px]:hidden">
        <div className="flex flex-row w-full h-screen">
          <div className="bg-smalt-blue-500 w-1/2 h-full flex flex-col justify-center items-end">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-white text-shadow-lg select-none text-[clamp(2rem,15vw,25rem)] leading-none"
            >
              4eva
            </motion.div>
            <div
              id="box1"
              className="z-200 w-full max-lg:hidden lg:flex lg:items-center lg:justify-center"
            >
              <Music />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white w-1/2 h-full flex flex-col items-start justify-center">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-smalt-blue-500 text-shadow-lg select-none text-[clamp(2rem,15vw,25rem)] leading-none"
            >
              known
            </motion.div>
            <div className="z-200 w-full max-lg:hidden lg:flex lg:items-center lg:justify-center">
              <Social />
            </div>
          </div>
        </div>
        {/* CENTER IMAGE */}
        <div className="absolute top-0 w-screen h-screen flex items-center justify-center z-100 select-none pointer-events-none">
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-[80vw] max-w-[700px] h-auto"
            src={evaknownImg}
            alt="4evaknown"
          />
        </div>
        <div className=" absolute bottom-0 w-full h-auto flex items-center justify-between p-5 gap-5 max-sm:px-2 lg:hidden">
          <Music />
          <Social />
        </div>
      </div>
    </>
  );
};

export default Hero;
