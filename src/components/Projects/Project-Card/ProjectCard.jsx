import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import {
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiReact,
  SiRedux,
  SiGithub,
  SiNextdotjs,
} from "react-icons/si";

export const ProjectCard = ({ id, icons, description, project, url,imgurl}) => {
  const [currentHoveredId, setCurrentHoveredId] = useState(null);
  const [previousHoveredId, setPreviousHoveredId] = useState(null);
  const [nextHoveredId, setNextHoveredId] = useState(null);
  const text = project;
  const iconsOBj = {
    react: <SiReact className="text-[#61DBFB] text-3xl" />,
    redux: <SiRedux className="text-[#764abc] text-3xl" />,
    tailwind: <SiTailwindcss className="text-[#7dd3fc] text-3xl" />,
    nodejs: <SiNodedotjs className="text-[#339933] text-3xl" />,
    mongodb: <SiMongodb className="text-[#00ed64] text-3xl" />,
    express: <SiExpress className="text-3xl text-gray-100" />,
    nextjs: <SiNextdotjs className="text-3xl invert" />,
    "next-auth": (
      <img
        src="https://next-auth.js.org/img/logo/logo-sm.png "
        className="w-8 h-8"
      />
    ),
    jwt: (
      <object
        className="text-[#007acc] text-3xl w-8 h-8"
        data="./jwt.svg"
      ></object>
    ),
  };
  const handleMouseOver = (id) => {
    setPreviousHoveredId(id - 1);
    setCurrentHoveredId(id);
    setNextHoveredId(id + 1);
  };

  const handleMouseOut = () => {
    setCurrentHoveredId(null);
    setPreviousHoveredId(null);
    setNextHoveredId(null);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={`w-full flex md:h-[50vh] h-auto gap-12 my-12 md:flex-row flex-col   ${
        id % 2 === 0 && "md:flex-row-reverse"
      } `}
    >
      <div className="relative w-full md:h-full h-max md:w-1/2 ">
        <a target="_blank" href={url} className="relative group">
          <img
            className="object-cover w-full h-full cursor-pointer  ring-gray-600"
            src={imgurl}
            alt="img"
          />

          <div className="w-5 group-hover:h-full transition-all duration-300 h-0 bg-primary absolute bottom-0 left-0 z-10 "></div>
        </a>
      </div>
      <div className="flex flex-col items-start justify-between md:w-1/2 h-full ">
        <div>
          {/* <h1 className="text-6xl font-bold text-white">
            {id % 2 === 0 ? "Gym Bro" : "Restaurant"}
          </h1> */}
          <div>
            {text.split("").map((char, i) => {
              return (
                <span
                  id={i}
                  className={`relative sm:top-0 top-[40%] m-0 p-0 inline-block transition-all duration-400 text-6xl font-bold text-white cursor-none ${
                    i === currentHoveredId
                      ? " text-transparent  bg-clip-text bg-gradient-to-b from-[#39ff14] to-[#39ff14] scale-x-110"
                      : i === previousHoveredId
                      ? "text-transparent  bg-clip-text bg-gradient-to-l from-[#16c94b] to-transparent scale-x-95"
                      : i === nextHoveredId
                      ? "text-transparent  bg-clip-text bg-gradient-to-r from-[#16c94b] to-transparent scale-x-95"
                      : "  "
                  }`}
                  key={i}
                  onMouseOver={() => handleMouseOver(i)}
                  onMouseOut={handleMouseOut}
                >
                  {char}
                </span>
              );
            })}
          </div>
        </div>
        <p className="md:max-w-xl md:my-0 my-8  text-gray-400">{description}</p>

        <div className="flex w-auto gap-4 mb-8 overflow-auto">
          {icons.map((icon, i) => {
            if (iconsOBj.hasOwnProperty(icon))
              return <Fragment key={i}>{iconsOBj[icon]}</Fragment>;
          })}
        </div>
        <div className="flex items-center justify-center h-max">
          <a target="_blank" href={url}>
            <button className="px-3 py-2 bg-primary hover:bg-[#30a116] text-gray-900 text-sm font-bold rounded-sm">
              View Project
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
