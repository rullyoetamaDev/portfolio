// "use client";
// import { useEffect } from "react";

// export default function  Cursor() {
//   useEffect(() => {
//     const cursor = document.createElement("div");
//     cursor.style.position = "fixed";
//     cursor.style.width = "20px";
//     cursor.style.height = "20px";
//     cursor.style.borderRadius = "50%";
//     cursor.style.background = "#38bdf8";
//     cursor.style.boxShadow = "0 0 15px #38bdf8, 0 0 30px #38bdf8";
//     cursor.style.pointerEvents = "none";
//     cursor.style.zIndex = "9999";
//     document.body.appendChild(cursor);

//     const moveCursor = (e: MouseEvent) => {
//       cursor.style.left = `${e.clientX - 10}px`;
//       cursor.style.top = `${e.clientY - 10}px`;
//     };

//     window.addEventListener("mousemove", moveCursor);
//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//       document.body.removeChild(cursor);
//     };
//   }, []);

//   return null;
// }

"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-full h-full z-50"
      style={{
        background: `radial-gradient(500px at ${position.x}px ${position.y}px, rgba(56, 189, 248, 0.2), transparent 90%)`,
      }}
    ></div>
  );
}
