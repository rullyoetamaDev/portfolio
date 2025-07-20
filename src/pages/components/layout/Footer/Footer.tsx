import React from "react";

function Footer() {
  return (
    <div className="px-5">
      <div className="flex justify-between py-5 items-center text-neutral-600 text-sm">
        <div className="flex text-gray-300 font-thin tracking-tight">
          <span>©</span>
          <p>Rulls Widgets</p>
        </div>

        <p className="text-gray-300 font-thin tracking-tight">
          Created by Rulls
        </p>
      </div>
    </div>
  );
}

export default Footer;
