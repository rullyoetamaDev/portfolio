import React, { useState } from "react";
import { PROJECTS } from "@/auth/data/dataproject";

//Image
import Image from "next/image";
import img1 from "@/assets/project/img1.jpg";

//Icon
import { TiArrowLeftThick } from "react-icons/ti";

//Third-party
import { motion } from "framer-motion";

const Projects = () => {
  const [id, setId] = useState(1);
  return (
    <div className="mt-1 h-[300px] lg:h-[330px] bg-[#8E9391]">
      <div className="h-full flex flex-col lg:flex-row">
        {/* Column-1 */}
        <div className="w-[100%] h-[60%] lg:h-[330px] lg:w-[70%] grid-cols-1 overflow-scroll scrollbar-hide">
          {/* Template di Looping */}

          {PROJECTS.filter((x) => x.id == id).map((dataProject) => (
            <>
              {/* {console.log("check - dataProject : ", dataProject)} */}
              {dataProject.pekerjaan.map((dataPekerjaan, index) => (
                <>
                  <div key={index} className="h-full flex flex-row pb-2 md:pb-0">
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1, delay: 2 }}
                      className="w-[40%] p-1 flex justify-center items-center"
                    >
                      <div>
                        <Image
                          className=" rounded-md"
                          src={dataPekerjaan.image}
                          alt=""
                        ></Image>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1, delay: 2.5 }}
                      className="w-[60%] h-full pl-2 pt-1 text-xs lg:pl-4 overflow-scroll scrollbar-hide"
                    >
                      <div className="flex flex-row gap-2 lg:pt-2">
                        <TiArrowLeftThick className="mt-1" />
                        <span className="mt-[1px] text-[8px] lg:mt-[2px] lg:text-xs">
                          Overview
                        </span>
                      </div>

                      <div className="lg:pt-2">
                        <h1 className=" leading-3 text-[9px] pt-1 lg:text-xl">
                          {dataPekerjaan.title}
                        </h1>
                      </div>

                      <div className="mt-2 w-[200px] lg:mt-3 lg:w-[95%]">
                        {dataPekerjaan.technologies.map((dataTech, i) => (
                          <div key={i} className="inline-block lg:mb-3">
                            <span className=" bg-[#272626] text-white text-md font-thin me-1 px-1 py-0.5 lg:text-sm lg:text-whiteSmooth lg:me-2 lg:px-2.5 lg:py-1 rounded">
                              {dataTech}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-1 leading-3 text-[10px] text-left  text-[#071E22] overflow-scroll scrollbar-hide lg:h-[160px] lg:mt-6 lg:text-sm lg:pr-4 sm:mt-3">
                        <p>{dataPekerjaan.description}</p>
                      </div>
                    </motion.div>
                  </div>
                </>
              ))}
            </>
          ))}
        </div>

        {/* Column-2 */}
        <div className="w-[full] h-[40%] px-2 flex flex-col  text-[#071E22] gap-2 overflow-scroll scrollbar-hide lg:justify-center lg:items-center  lg:text-[#272626] lg:h-[330px] lg:w-[30%] ">
          {PROJECTS.map((dataProj) => (
            <>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 3 }}
                key={dataProj.id}
                className="w-full border-t-2 border-[#071E22] cursor-pointer"
                onClick={() => setId(dataProj.id)}
              >
                <p className="text-[10px] lg:text-sm">
                  {dataProj.perusahaan}
                </p>
                <p className="text-[8px] lg:text-xs">
                  {dataProj.Job}
                </p>
                <p className="text-[8px] lg:text-xs">
                  {dataProj.time}
                </p>
              </motion.div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
