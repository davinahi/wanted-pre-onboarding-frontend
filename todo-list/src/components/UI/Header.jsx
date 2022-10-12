import React from "react";
import Button from "./Button";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderBar>
      <Button className="Logout" width="70px" height="40px">
        Logout
      </Button>
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
