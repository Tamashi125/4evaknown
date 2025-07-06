// framer motion
import { motion, useAnimation } from "framer-motion";
// react
import { useEffect, useRef, useState } from "react";
// react icons
import { FaFacebook, FaInstagram, FaTiktok, FaDiscord } from "react-icons/fa";
// components

const Social = () => {
  const fadein1 = useAnimation();
  const fadein2 = useAnimation();
  const fadein3 = useAnimation();
  const fadein4 = useAnimation();

  useEffect(() => {
    const startAnimation = async () => {
      fadein1.set({ opacity: 0, y: 20 });
      fadein2.set({ opacity: 0, y: 20 });
      fadein3.set({ opacity: 0, y: 20 });
      fadein4.set({ opacity: 0, y: 20 });

      await fadein1.start({ opacity: 1, y: 0 });
      await fadein2.start({ opacity: 1, y: 0 });
      await fadein3.start({ opacity: 1, y: 0 });
      await fadein4.start({ opacity: 1, y: 0 });
    };

    startAnimation();
  }, []);

  const Socialicon =
    "bg-smalt-blue-100 rounded-full w-[49px] h-[49px] flex items-center justify-center text-smalt-blue-500 max-sm:w-[29px] max-sm:h-[29px]";
  return (
    <>
      <div className="flex flex-row-reverse gap-5">
        <motion.div animate={fadein1} className={Socialicon}>
          <a href="https://discord.gg/QxfUpM4kF8" target="_blank">
            <div className="transition-all hover:scale-150">
              <FaDiscord />
            </div>
          </a>
        </motion.div>
        <motion.div animate={fadein2} className={Socialicon}>
          <a
            href="https://www.facebook.com/wuttipong.leeprakhon.2025"
            target="_blank"
          >
            <div className="transition-all hover:scale-150">
              <FaFacebook />
            </div>
          </a>
        </motion.div>
        <motion.div animate={fadein3} className={Socialicon}>
          <a href="https://www.instagram.com/__wuttipongg__/" target="_blank">
            <div className="transition-all hover:scale-150">
              <FaInstagram />
            </div>
          </a>
        </motion.div>
        <motion.div animate={fadein4} className={Socialicon}>
          <a href="https://www.tiktok.com/@xiiiivvi" target="_blank">
            <div className="hover:scale-150 transition-all">
              <FaTiktok />
            </div>
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default Social;
