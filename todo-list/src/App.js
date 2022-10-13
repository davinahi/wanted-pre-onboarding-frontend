import { useState, useRef } from "react";
import InputForm from "./components/Todos/InputForm";
import List from "./components/Todos/List";
import Header from "./components/UI/Header";
import styled from "styled-components";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 3,
      content: "Have some ice cream and jelly with Zeze",
      checked: true,
    },
    { id: 2, content: "Get a job", checked: false },
    { id: 1, content: "Join gather town", checked: true },
  ]);

  const newId = useRef(4);

  const insertNewTodo = (content) => {
    const newTodo = { id: newId.current, content, checked: false };
    // setTodos(todos.concat(newTodo));
    setTodos([newTodo, ...todos]);
    newId.current += 1;
  };
  console.log(todos);

  return (
    <div className="App">
      <Header />
      <Template className="container">
        <H1>Todo List</H1>
        <InputForm onInsert={insertNewTodo} />
        <List todos={todos} />
      </Template>
    </div>
  );
}

const Template = styled.div`
  width: 450px;
  background: #efefef;
  margin: 30px auto 0;
  height: 500px;
  padding: 30px 25px 0 25px;
  border-radius: 3px;
  box-shadow: 3px 3px 3px 3px #cfcfcf;
`;
const H1 = styled.h1`
  color: #7e54f5;
  text-align: center;
`;

export default App;
