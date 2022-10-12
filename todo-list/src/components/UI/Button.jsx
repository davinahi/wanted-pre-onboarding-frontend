import React from "react";
import styled from "styled-components";

//<i class="bi bi-plus-square"></i>; + 버튼

const Button = (props) => {
  return (
    <div>
      <Btn type="submit" {...props}>
        Submit
      </Btn>
    </div>
  );
};

const Btn = styled.button`
  border: none;
  border-radius: 0 3px 3px 0;
  background-color: #7e54f5;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  color: #fff;
  font-weight: 400;
`;

export default Button;
