import InputForm from "./components/Todos/InputForm";
import List from "./components/Todos/List";
import Header from "./components/UI/Header";

import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Header />

      <Template className="container">
        <H1>Todo List</H1>
        <InputForm />
        <List />
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
