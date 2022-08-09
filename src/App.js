import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import Todo from "./pages/Todo";
import SbReact from "./pages/SbReact";
import SeoulBund from "./pages/Seoulbund";
import Pot from "./pages/Pot";
import Lib from "./pages/Lib";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/todolist" element={<Todo />} />
        <Route path="/pot" element={<Pot />} />
        <Route path="/changwonlib" element={<Lib />} />
        <Route path="/seoulbundreact" element={<SbReact />} />
        <Route path="/seoulbund" element={<SeoulBund />} />
      </Routes>
    </div>
  );
}

export default App;
