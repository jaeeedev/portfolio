import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import Todo from "./pages/Todo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/todolist" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
