import React, { forwardRef, useEffect, useState } from "react";
forwardRef;
export const Contact = forwardRef((props, ref) => {
  const [showCopied, setshowCopied] = useState(false);
  useEffect(() => {
    let timeout;
    if (showCopied) {
      timeout = setTimeout(() => {
        setshowCopied(false);
      }, 1000);
    }
  }, [showCopied]);
  return (
    <div className="w-screen bg-gray-900 h-max " ref={ref}>
      {/* <h1 className="w-1/2  text-[12vw] font-bold ml-20 text-primary">
        Contact <br />
        <span className="inline-block -translate-y-[42%]">Me</span>
      </h1> */}
      {/* <p className="flex w-full px-5 pb-20 text-xl font-medium text-white -translate-y-12 md:w-1/2 md:px-20 md:ml-40 ">
        If you'd like to find out even more about me, what I can do for you, or
        just to chat, drop me a message below and I'll get back to you as soon
        as I can!
      </p> */}
      <div className="flex justify-center w-full px-5 pt-6 pb-20 text-xl font-semibold text-white md:px-20">
        <h1>Want to work with me?</h1>
      </div>
      <div className=" group/a flex flex-col relative justify-center w-full px-5 md:px-20 pb-20 font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl min-h-[40vh] md:min-h-[50vh]">
        <p className="mb-8 text-2xl text-gray-700">Send me a message</p>
        <div className=" relative  text-primary peer">
          <span
            onClick={(e) => {
              console.log(e.target.textContent);
              navigator.clipboard.writeText(e.target.textContent);
              setshowCopied(true);
            }}
            className="cursor-pointer "
          >
            sarojss819@
            <br />
            gmail.com
          </span>

          <div
            className={`absolute left-0 flex items-center h-8 px-3 text-sm text-gray-900 transition-all duration-1000 ${
              showCopied
                ? "md:-top-[14%] -top-[45%] opacity-100 z-10 visible"
                : "top-[95%] opacity-0 invisible"
            } w-max bg-primary`}
          >
            Email Copied
          </div>
        </div>
        <div className="lg:w-5 w-3 group-hover/a:h-full transition-all duration-300 h-0 bg-primary absolute bottom-0 left-0 z-10 "></div>
      </div>
    </div>
  );
});
