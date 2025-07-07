import music from "../assets/Isekai.mp3";
import { useRef, useState, useEffect } from "react";
// react icons
import { FaPlay, FaPause } from "react-icons/fa";
// framer motion
import { motion, useAnimation } from "framer-motion";
import { div } from "motion/react-client";

const Music = () => {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(() => {
    const stored = localStorage.getItem("musicPlay");
    return stored !== null ? JSON.parse(stored) : true;
  });

  const [volume, setVolume] = useState(() => {
    const storedVolume = parseFloat(localStorage.getItem("musicVolume"));
    return !isNaN(storedVolume) ? Math.min(Math.max(storedVolume, 0), 1) : 0.1;
  });

  useEffect(() => {
    localStorage.setItem("musicPlay", JSON.stringify(playing));
  }, [playing]);

  useEffect(() => {
    const safeVolume = Math.min(Math.max(volume, 0), 1);
    localStorage.setItem("musicVolume", safeVolume);
    if (audioRef.current) {
      audioRef.current.volume = safeVolume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [playing]);

  const toggle = () => {
    setPlaying((prev) => !prev);
  };

  const icon = playing ? <FaPause /> : <FaPlay />;

  const volumePercentage = volume * 100;

  // const fadein1 = useAnimation();
  // const fadein2 = useAnimation();

  // useEffect(() => {
  //   const startAnimation = async () => {
  //     fadein1.set({ opacity: 0, y: 20 });
  //     fadein2.set({ opacity: 0, y: 20 });

  //     await fadein1.start({ opacity: 1, y: 0 });
  //     await fadein2.start({ opacity: 1, y: 0 });
  //   };

  //   startAnimation();
  // }, []);

  const itemicon = [
    {
      id: "1",
      delay: "0.6",
      element: (
        <div
          onClick={toggle}
          className="bg-smalt-blue-600 rounded-full w-[49px] h-[49px] max-sm:w-[29px] max-sm:h-[29px] flex items-center justify-center text-smalt-blue-400 cursor-pointer"
        >
          {icon}
        </div>
      ),
    },
    {
      id: "2",
      delay: "1",
      element: (
        <div className="flex flex-col items-start">
          <label className="text-sm text-smalt-blue-100 mb-1 select-none">
            Volume {volumePercentage.toFixed(0)}%
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="h-1 rounded-lg appearance-none cursor-pointer accent-smalt-blue-600 focus:outline-none"
            style={{
              background: `linear-gradient(to right, #fff ${
                volumePercentage - 2
              }%, #45828F ${volumePercentage}%)`,
            }}
          />
        </div>
      ),
    }
  ];

  return (
    <>
      <audio ref={audioRef} src={music} loop />

      <div className="flex items-center gap-4">
        {itemicon.map((items) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: items.delay }}
            key={items.id}
          >
            {items.element}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Music;
