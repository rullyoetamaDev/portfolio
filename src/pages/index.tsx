"user client"

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MySelf from "./content/MySelf";
import { EXPERIENCES } from "@/auth/data/dataproject";
import ExperienceCard from "./content/Experience";

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
    </div>
  );
}

export default Home;
