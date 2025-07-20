"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <header>
      <nav className="flex justify-between items-center bg-[#8E9391] px-4 py-2 shadow-md">
        <div className="flex items-center gap-2">
          {/* <h3 className="text-2xl font-light tracking-tighter">RullyOetama</h3> */}
          <p className="text-2xl font-bold tracking-tighter">Portfolio</p>
        </div>

        <div className="flex items-center text-2xl gap-2 sm:gap-4">
          <Link href="/login" onClick={() => sessionStorage.clear()}>
            <RiLogoutCircleLine className="text-xl text-rose-600 hover:text-rose-500" />
          </Link>
        </div>
      </nav>
    </header>

  );
}
