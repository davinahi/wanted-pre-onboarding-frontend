import { useState, useRef } from "react";
import InputForm from "./InputForm";
import List from "./List";
import styled from "styled-components";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 3,
      content: "Have some ice cream and jelly with Zeze",
      checked: true,
    },
    { id: 2, content: "Get a job", checked: false },
    { id: 1, content: "Join gather town", checked: true },
  ]);

  //자간에 따른 한글 영문 글자수 제한 길이 설정
  const checkKor = (str) => {
    const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
    if (regExp.test(str)) return true;
    else return false;
  };

  const newId = useRef(4);

  const insertNewTodo = (content) => {
    const newTodo = { id: newId.current, content, checked: false };
    // setTodos(todos.concat(newTodo));
    setTodos([newTodo, ...todos]);
    newId.current += 1;
  };

  const checkBoxHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const removeItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Template>
      <H1>Todo List</H1>
      <InputForm onInsert={insertNewTodo} onCheck={checkKor} />
      <List
        todos={todos}
        onToggle={checkBoxHandler}
        onRemove={removeItem}
        onCheck={checkKor}
      />
    </Template>
  );
};

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

export default TodoList;
