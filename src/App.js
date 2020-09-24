import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Social from "./Components/Social";
import Projects from "./Components/Projects";
import "./App.css";
import Technology from "./Components/Technology";
import Wave from "./Components/Wave";
import About from "./Components/About";
import Wave2 from "./Components/Wave2";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Social />
      <Main />
      <Wave />
      <Technology />
      <Projects />
      {/* <Wave2 /> */}
      <About />
    </div>
  );
}

export default App;
