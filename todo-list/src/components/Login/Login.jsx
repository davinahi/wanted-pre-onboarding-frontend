import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <div>
      <Container>
        <h1>Login</h1>
        <LoginForm>
          <input className="user-id" type="email" placeholder="email" />
          <input
            className="user-password"
            type="password"
            placeholder="password"
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
  height: 500px;
  padding: 30px 25px 0 25px;
  border-radius: 3px;
  box-shadow: 3px 3px 3px 3px #cfcfcf;
`;

export default Login;
