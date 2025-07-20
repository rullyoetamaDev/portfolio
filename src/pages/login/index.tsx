import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import { revalidatePath } from "next/cache";

const Login = () => {
  const { push } = useRouter();

  const initialValues = {
    guest: "",
    login: false,
    message: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value.trim(),
    });
  };

  const handleLogin = () => {
    if (values.guest !== "") {
      sessionStorage.setItem("user", values.guest);

      push("/")

    } else {
      setValues({
        ...values,
        message: "Please, Who are you!!",
        login: false
      });

      setTimeout(() => {
        setValues({
          ...values,
          guest: "",
          login: false,
          message: "",
        });
      }, 2000);

      sessionStorage.clear()
    }
  };

  // console.log("check - values.guest : ", values.guest);

  return (
    <div className="h-[100vh] flex items-center justify-center ">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 3 }}
        className=""
      >
        <label htmlFor="guest" className="leading-6 text-gray-900">
          Hello, Whats your name?
        </label>
        <input
          type="text"
          name="guest"
          id="guest"
          className="block rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="your name please..."
          onChange={(e) => handleInputChange(e)}
        />
        <br />
        <div className="grid grid-cols-2 gap-2">
          <button
            // href={`/?user=${values.guest}`}
            // as={`/`}
            // passHref
            // href={""}
            onClick={handleLogin}
            // scroll={false}
            className=" bg-[#ec4e39] text-center hover:bg-[#9c3527] leading-6 text-gray-300 py-2 px-4 rounded-full"
          >
            Portfolio
          </button>

          <span className=" text-xs text-red-900">
            <p>{values.message}</p>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
