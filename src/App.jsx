import "./App.css";
import Landing from "./components/Landing/Landing";
import { Project } from "./components/Projects/Project";
import { Contact } from "./components/Contact/Contact";
import { About } from "./components/About/About";
import { useRef } from "react";
import { Header } from "./components/Header/Header";

function App() {
  const aboutSectionRef = useRef();
  const contactSectionRef = useRef();
  const projectSectionRef = useRef();

  return (
    <div className=" ">
      <Header
        aboutSectionRef={aboutSectionRef}
        contactSectionRef={contactSectionRef}
        projectSectionRef={projectSectionRef}
      />
      <Landing aboutSectionRef={aboutSectionRef} />
      <About ref={aboutSectionRef} />
      <Project ref={projectSectionRef} />
      <Contact ref={contactSectionRef} />
    </div>
  );
}

export default App;
