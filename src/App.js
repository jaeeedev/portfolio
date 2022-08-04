import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [boldIndex, setBoldIndex] = useState(0);

  //개개별 컴포넌트로 들어가서 옵저버 걸어주고 색바꾸셈 어쩔수업다...
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

export default App;
