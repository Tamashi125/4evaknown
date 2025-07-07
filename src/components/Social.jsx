// framer motion
import { delay, motion, stagger, useAnimation } from "framer-motion";
import { a, div } from "motion/react-client";
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

  const icon = [
    {
      id: "1",
      icon: <FaDiscord />,
      link: "https://discord.gg/QxfUpM4kF8",
      delay: "0.6",
    },
    {
      id: "2",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/wuttipong.leeprakhon.2025",
      delay: "1",
    },
    {
      id: "3",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/__wuttipongg__/",
      delay: "1.4",
    },
    {
      id: "4",
      icon: <FaDiscord />,
      link: "https://www.tiktok.com/@xiiiivvi",
      delay: "2",
    },
  ];

  return (
    <>
      <div className="flex flex-row-reverse gap-5">
        {icon.map((items) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: items.delay }}
            key={items.id}
            className={Socialicon}
          >
            <a href={items.link} target="_blank">
              <div className="transition-all hover:scale-150">{items.icon}</div>
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Social;
