import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const changeUserIdHandler = (e) => {
    setUserId(e.target.value);
  };
  const changePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitLoginHandler = (e) => {
    const user = { userId, password };
    setPassword(e.target.value);
    if (userId && password) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/todo");
    }
  };

  return (
    <div>
      <Container>
        <h1>Login</h1>
        <LoginForm onSubmit={submitLoginHandler}>
          <input
            onChange={changeUserIdHandler}
            className="user-id"
            type="email"
            placeholder="email"
            // value={}
          />
          <input
            onChange={changePasswordHandler}
            className="user-password"
            type="password"
            placeholder="password"
            minLength="8"
            value={password}
          />
          <Button>Login</Button>
        </LoginForm>
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 450px;
  background: #efefef;
  margin: 30px auto 0;
  height: 350px;
  padding: 30px 25px 0 25px;
  border-radius: 3px;
  box-shadow: 3px 3px 3px 3px #cfcfcf;
  h1 {
    text-align: center;
  }
`;

const LoginForm = styled.form`
  width: 400px;
  height: 40px;
  margin-left: 25px;
  input {
    display: block;
    width: 100%;
    height: 50px;
    margin-bottom: 30px;
    border: 1px solid #bfbaba;
    border-radius: 3px;
    padding: 0;
    box-sizing: border-box;
    padding: 20px;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
  border: none;
  border-radius: 3px;
  background-color: #906afe;
  color: #fff;
`;

export default Login;
