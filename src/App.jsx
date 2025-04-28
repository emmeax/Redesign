import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MyProcess from "./components/MyProcess";
import MoreProjects from "./components/MoreProjects";
// import Contact from "./components/Contact";
import Project from './components/Project'
import Home from './components/Home'

function App() {
  return (
    <div className="bg-[#EEF2FF]">
      <Navbar />
      <Home/>
      

      {/* Sections with IDs for smooth scrolling */}
      <section id="home">
      <Hero />
      </section>
      <section>
      <Project/>
      </section>

      <section id="process">
        
        <MyProcess />
      </section>

      <section id="project">
        <MoreProjects />
      </section>

      {/* <section id="contact">
        <Contact />
      </section> */}
    </div>
  );
}

export default App;
