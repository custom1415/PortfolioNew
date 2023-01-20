import React, { useRef, useState } from "react";

const text = "Frontend";
const textTwo = "Developer";

export default function Landing({ aboutSectionRef }) {
  const [currentHoveredId, setCurrentHoveredId] = useState(null);
  const [previousHoveredId, setPreviousHoveredId] = useState(null);
  const [nextHoveredId, setNextHoveredId] = useState(null);

  const handleMouseOver = (id) => {
    setPreviousHoveredId(id - 1);
    setCurrentHoveredId(id);
    setNextHoveredId(id + 1);
    console.log(previousHoveredId);
  };

  const handleMouseOut = () => {
    setCurrentHoveredId(null);
    setPreviousHoveredId(null);
    setNextHoveredId(null);
  };

  return (
    <div className=" grid w-screen sm:h-screen h-[50vh] place-content-center sm:mb-0 mb-5  bg-gray-900">
      <div className="flex flex-col items-center justify-center w-screen h-auto snap-y-center snap-always ">
        <div>
          {text.split("").map((char, i) => {
            return (
              <span
                id={i}
                className={`relative sm:top-0 top-[40%] m-0 p-0 inline-block transition-all duration-400 lg:text-[15vw] text-[20vw] cursor-none ${
                  i === currentHoveredId
                    ? " text-transparent  bg-clip-text bg-gradient-to-b from-[#39ff14] to-[#39ff14] scale-x-110"
                    : i === previousHoveredId
                    ? "text-transparent  bg-clip-text bg-gradient-to-l from-[#16c94b] to-transparent scale-x-95"
                    : i === nextHoveredId
                    ? "text-transparent  bg-clip-text bg-gradient-to-r from-[#16c94b] to-transparent scale-x-95"
                    : "text-transparent  bg-clip-text bg-gradient-to-b from-gray-800 to-gray-800  "
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
        <div>
          {textTwo.split("").map((char, i) => {
            const index = i + text.length + 1;
            return (
              <span
                id={index}
                className={`relative sm:-top-[45%] inline-block transition-all duration-400 lg:text-[15vw] text-[20vw] cursor-none ${
                  index === currentHoveredId
                    ? " text-transparent  bg-clip-text bg-gradient-to-b from-[#39ff14] to-[#39ff14] scale-x-110"
                    : index === previousHoveredId
                    ? "text-transparent  bg-clip-text bg-gradient-to-l from-[#16c94b] to-transparent scale-x-95"
                    : index === nextHoveredId
                    ? "text-transparent  bg-clip-text bg-gradient-to-r from-[#16c94b] to-transparent scale-x-95"
                    : "text-transparent  bg-clip-text bg-gradient-to-b from-gray-800 to-gray-800  "
                }`}
                key={index}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={handleMouseOut}
              >
                {char}
              </span>
            );
          })}
        </div>
      </div>
      <div className="">
        <svg
          onClick={() =>
            aboutSectionRef.current.scrollIntoView({ behavior: "smooth" })
          }
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          className="absolute bottom-0 hidden text-gray-300 transition-all -translate-x-1/2 cursor-pointer hover:-translate-y-5 hover:text-primary md:block left-1/2 md:text-8xl lg:text-9xl"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"></path>
        </svg>
      </div>
    </div>
  );
}
