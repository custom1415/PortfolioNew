export const Header = ({
  aboutSectionRef,
  projectSectionRef,
  contactSectionRef,
}) => {
  return (
    <div className="w-screen bg-gray-900 pt-8 h-12 flex justify-between items-center mism:px-12 px-6 text-xl text-white font-bold ">
      <h1 className="font-bold  hover:text-primary cursor-pointer  ">
        SAROJ
      </h1>
      <ul className="flex justify-between items-center sm:gap-12 midsm:gap-8 gap-6 midsm:text-lg text-sm  w-auto">
        <li
          className=" hover:text-primary cursor-pointer"
          onClick={() => {
            aboutSectionRef.current.scrollIntoView();
          }}
        >
          About
        </li>
        <li
          className=" hover:text-primary cursor-pointer"
          onClick={() => {
            console.log(projectSectionRef.current);
            projectSectionRef.current.scrollIntoView();
          }}
        >
          Projects
        </li>
        <li
          className=" bg-primary  hover:bg-[#30a116] text-gray-900 px-2 py-1 rounded-lg cursor-pointer"
          onClick={() => {
            contactSectionRef.current.scrollIntoView();
          }}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};
