import React, { forwardRef } from "react";
export const About = forwardRef((props, ref) => {
  return (
    <div className="bg-gray-900 text-primary snap-y-center snap-always" ref={ref}>
      <div className="justify-end w-full px-5 pb-20 text-4xl font-semibold text-right md:px-20 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
        Saroj <br /> Shrestha
      </div>
      <div className="flex w-full px-5 pb-20 text-xl text-gray-400 md:w-1/2 md:px-20 md:ml-40 font-med ">
        <p>
          Hello! I’m Saroj Shrestha, a frontend developer who loves creating beautiful,
          performant websites from stunning designs. I enjoy creating extremely
          visual experiences using up to date technologies.
        </p>
      </div>
    </div>
  );
});
