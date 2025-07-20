import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;

  const [scrollY, setScrollY] = useState(0);

  const [activeSection, setActiveSection] = useState("ABOUT"); // ✅ pindahkan ke atas

  const { pathname } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const disableNavbar = ["/login"];

  if (pathname === "/login") {
    return <>{children}</>;
  }

  return (
    <main>
      {/* Layout 40/60 */}
      <div className="flex h-screen">
        {/* Sidebar kiri */}
        <aside className="w-[40%] h-screen fixed left-0 bg-slate-900 text-white p-8 flex flex-col justify-center">
          <div>
            <h1 className="text-4xl font-bold">Rullyansyah Oetama</h1>
            <h2 className="text-xl mt-2">Software Engineer</h2>
            <p className="mt-4 text-slate-400">
              I build accessible, pixel-perfect digital experiences for the web.
            </p>

            {/* Menu */}
            <nav className="space-y-4 mt-8 text-sm">
              {["MYSELF", "EXPERIENCE", "PROJECTS"].map((section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  onClick={() => setActiveSection(section)}
                  className={`flex items-center gap-2 group transition-colors duration-300 ${activeSection === section ? "text-white font-semibold" : "text-slate-400 hover:text-white"
                    }`}
                >
                  {/* Left Line */}
                  <span
                    className={`h-[1px] transition-all duration-300 ${activeSection === section
                        ? "w-12 bg-white"
                        : "w-4 bg-slate-500 group-hover:w-12 group-hover:bg-slate-400"
                      }`}
                  />
                  {section}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Konten kanan */}
        <div className="ml-[40%] w-[60%] overflow-y-auto bg-slate-900 p-8">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AppShell;
