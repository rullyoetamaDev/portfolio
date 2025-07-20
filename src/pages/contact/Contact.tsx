import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import WhatsappIcon from "../../assets/SVG/whatsapp-icon.svg";
import { motion } from "framer-motion";

type ContactProps = {
  guest?: String;
};


const Contact = (props: ContactProps) => {
  const [user, setUser] = useState("")

  useEffect(() => {
    const userSession = sessionStorage.getItem("user")
    setUser(`${userSession}`)
  },[props])
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 2.5 }}
      className="h-[350px] flex flex-col justify-center items-center mt-3 bg-[#14272e] p-3"
    >
      <motion.h5
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="text-xl font-bold text-white my-2"
      >
        Let&apos;s Connect
      </motion.h5>
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 3.3 }}
        className=" text-[#ADB7BE] text-[10px] mb-4  text-center lg:max-w-xl lg:text-lg lg:text-center"
      >
        {" "}
        {user}, I&apos;m currently looking for new opportunities, my
        inbox is always open. Whether you have a question or just want to say
        hi, I&apos;ll try my best to get back to you!
      </motion.p>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 3.6 }}
        className="socials flex flex-row gap-2"
      >
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/+6281280412043?text=Hello Rully, Are you looking for job change?"
        >
          <Image src={WhatsappIcon} alt="Whatsapp Icon" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
