"user client"

import { useEffect } from "react";
import { useRouter } from "next/router";
import Hero from "./hero/Hero";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import MySelf from "./content/MySelf";
import { EXPERIENCES } from "@/auth/data/dataproject";
import { ExperienceCard } from "./content/Experience";

function Home() {
  const { push } = useRouter();
  const { query } = useRouter()


  const Login = () => {
    if (sessionStorage.getItem("user") == null) {
      push("/login");
    }
  };

  useEffect(() => {
    Login();
  }, []);

  return (
    <div className="">
      <MySelf />
      <br />
      <br />
      <br />
      {EXPERIENCES.map((exp, index) => (
        <ExperienceCard key={index} experience={exp} />
      ))}
      {/* <Hero guest={`${query.user}`}/> */}
      {/* <Projects/>
      <Contact guest={`${query.user}`}/> */}
    </div>
  );
}

export default Home;
