import InputForm from "./components/Todos/InputForm";
import List from "./components/Todos/List";
import Header from "./components/UI/Header";

import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Header />

      <Template className="container">
        <h1>Todo List</h1>
        <InputForm />
        <List />
      </Template>
    </div>
  );
}

const Template = styled.div``;

export default App;
