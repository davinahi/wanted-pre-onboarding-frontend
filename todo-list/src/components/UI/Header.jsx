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
  height: 70px;
`;

export default Header;
