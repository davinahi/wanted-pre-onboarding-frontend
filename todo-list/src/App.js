import LoginPage from "./Pages/LoginPage";
import TodoListPage from "./Pages/TodoListPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/todo" element={<TodoListPage />}></Route>
    </Routes>
  );
}

export default App;
