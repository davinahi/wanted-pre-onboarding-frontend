import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("user");
    console.log("logout 시키자");
    navigate("/");
  };

  return (
    <HeaderBar>
      {localStorage.getItem("user") ? (
        <Button
          className="Logout"
          width="70px"
          height="40px"
          onClick={logoutHandler}
        >
          Logout
        </Button>
      ) : (
        ""
      )}
    </HeaderBar>
  );
};

const HeaderBar = styled.header`
  position: relative;
  background: #efefef;
  height: 60px;
  padding-left: 90%;
  padding-top: 20px;
`;

export default Header;
