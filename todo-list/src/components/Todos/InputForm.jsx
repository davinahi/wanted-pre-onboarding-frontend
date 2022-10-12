import React from "react";
import styled from "styled-components";

const InputForm = () => {
  return (
    <Form>
      <Input type="text" placeholder="I have to do something..." />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

const Form = styled.form``;
const Input = styled.input``;
const Button = styled.button``;

export default InputForm;
