import Header from "./components/Header";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Footer from "./components/Footer";

//여기서 io를 써서 들어오면 상태 바꿔주고 상태는 헤더에 prop으로 내려서 색상 변경
//함수형 컴포넌트는 ref를 못쓴다는데 들어온걸 어떻게 확인하지

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Skill />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
