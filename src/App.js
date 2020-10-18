import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Social from "./Components/Social";
import Projects from "./Components/Projects";
import "./App.css";
import Technology from "./Components/Technology";
import Wave from "./Components/Wave";
import About from "./Components/About";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Social />
      <Main />
      <Wave />
      <Technology />
      <Projects />

      <About />
      <Footer />
    </div>
  );
}

export default App;
