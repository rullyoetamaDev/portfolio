import React, { useEffect, useState } from "react";
import { HERO_CONTENT } from "@/auth/data/dataproject";

//Image
import profilePictue from "@/assets/RullyProfile.png";
import Image from "next/image";

//Third Party
import { motion } from "framer-motion";

type HeroProps = {
  guest?: String;
};

const Hero = (props: HeroProps) => { 
  const [user, setUser] = useState("")

  useEffect(() => {
    const userSession = sessionStorage.getItem("user")
    setUser(`${userSession}`)
  },[props])

  return (
    <>
      <div className="p-2">
        <div className="pb-2 border-b border-neutral-900">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
            {/* Column-1 Hero */}
            <div className="w-full lg:w-1/2 lg:pl-6">
              <div className="flex flex-col items-center lg:items-start">
                <motion.h1
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0 }}
                  className="pt-2 pb-2 text-gray-500 text-3xl font-thin tracking-tight lg:w-[350px] lg:mt-8 lg:text-6xl"
                >
                  Rullyansyah Oetama
                </motion.h1>

                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{
                    scale: 1.1,
                  }}
                  ref={null}
                  drag
                  dragConstraints={false}
                  className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent"
                >
                  Frontend Developer
                </motion.span>
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="py-3 text-justify lg:text-left sm:mb-2 "
                >
                  <p className="px-3 text-xs text-whiteSmooth font-thin lg:px-0 lg:text-sm lg:text-left lg:font-light lg:text-gray-900 sm:text-whiteSmooth sm:text-center sm:px-5">
                    Hello <b>{user}</b>,
                  </p>
                  <p className="px-3 text-xs text-whiteSmooth font-thin lg:px-0 lg:text-sm lg:text-left lg:font-light lg:text-gray-900 sm:text-whiteSmooth sm:text-center sm:px-5">
                    {HERO_CONTENT}
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Column-2 Hero */}
            <div className="w-full lg:w-1/2 bg-gradient-to-b from-slate-900 to-slate-800 text-white p-8 flex flex-col justify-center">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="flex justify-center lg:w-full lg:h-full lg:items-center"
              >
                <Image
                  src={profilePictue}
                  alt="Profile Picture"
                  width={200}
                  height={200}
                ></Image>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
