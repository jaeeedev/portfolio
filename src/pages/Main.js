import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Project from "../components/Project";
import Skill from "../components/Skill";
import Footer from "../components/Footer";
import { useState } from "react";

function Main() {
  const [boldIndex, setBoldIndex] = useState(0);

  return (
    <div>
      <Header boldIndex={boldIndex} />
      <Intro boldHandler={setBoldIndex} />
      <Skill boldHandler={setBoldIndex} />
      <Project boldHandler={setBoldIndex} />
      <Footer boldHandler={setBoldIndex} />
    </div>
  );
}

export default Main;
