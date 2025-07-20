import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

type Experience = {
    year: string;
    role: string;
    company: string;
    description: string;
    technologies: string[];
};

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
    return (
        <section id="experience">
            <div className="rounded-2xl p-6 mb-6 shadow-lg cursor-pointer hover:bg-gradient-to-b from-slate-800 to-slate-900 transition-colors duration-300 group">
                {/* Year */}
                <p className="text-sm text-slate-400">{experience.year}</p>

                {/* Role & Company */}
                <h3 className="text-xl font-semibold text-white">
                    <span className="font-light transition-colors duration-300 group-hover:text-[#5EEAD4]">{experience.role}{" "}·{" "}</span>

                    <span className="font-light transition-colors duration-300 group-hover:text-[#5EEAD4]">
                        {experience.company}
                    </span>
                </h3>

                {/* Description */}
                <p className="mt-3 text-slate-300 text-sm">{experience.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {experience.technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-4 py-2 bg-[#183656] text-[#5EEAD4] text-xs px-3 py-1 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-white font-semibold cursor-pointer hover:text-[#5EEAD4] group">
                <Link href="/files/Resume.pdf" download className="flex items-center gap-1">
                    <p>View Full Résumé</p>
                    <GoArrowUpRight size={16} className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12" />
                </Link>
            </div>
        </section>
    );
};
