"user client"

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MySelf from "./content/MySelf";
import { EXPERIENCES } from "@/auth/data/dataproject";
import ExperienceCard from "./content/Experience";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

function Home() {
  const router = useRouter();
  const { push } = useRouter();
  const { query } = useRouter()

  const [isClient, setIsClient] = useState(false);


  const Login = () => {
    if (sessionStorage.getItem("user") == null) {
      push("/login");
    }
  };

  useEffect(() => {
    Login();
  }, []);

  useEffect(() => {
    setIsClient(true); // ✅ memastikan ini hanya jalan di client
    if (typeof window !== "undefined") {
      const user = sessionStorage.getItem("user");
      if (!user) {
        router.push("/login");
      }
    }
  }, []);

  return (
    <div className="">
      <MySelf />
      <br />
      <br />
      <br />
      {EXPERIENCES && EXPERIENCES.length > 0 ? (
        EXPERIENCES.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))
      ) : (
        <p className="text-center text-gray-400">No Experience Data</p>
      )}
      <div className="flex items-center gap-2 text-sm text-white font-semibold cursor-pointer hover:text-[#5EEAD4] group">
        <Link href="/Resume.pdf" download className="flex items-center gap-1">
          <p>View Full Résumé</p>
          <GoArrowUpRight size={16} className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
