import { useState } from "react";
import Button from "../UI/Button";
import styled from "styled-components";

const InputForm = ({ onInsert }) => {
  const [value, setValue] = useState("");
  // const contentLen = value === /[ㄱ-ㅎㅏ-ㅣ가-힣]/g ? "20" : "40";

  const checkKor = (str) => {
    const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
    if (regExp.test(str)) {
      return true;
    } else {
      return false;
    }
  };

  const contentLen = checkKor(value) ? "20" : "35";

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onInsert(value);
    setValue("");
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input
        type="text"
        placeholder="I have to do something..."
        value={value}
        onChange={inputChangeHandler}
        maxLength={contentLen}
      />
      <Button />
    </Form>
  );
};

const Form = styled.form`
  width: 400px;
  height: 40px;
  display: flex;
  margin-left: 25px;
`;
const Input = styled.input`
  width: 100%;
  border: 1px solid #dadada;
  border-radius: 3px 0 0 3px;
  padding: 10px;
  outline: none;
`;

export default InputForm;
