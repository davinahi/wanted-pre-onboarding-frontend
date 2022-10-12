import React from "react";
import styled from "styled-components";
import "bootstrap-icons/font/bootstrap-icons.css";

// <i class="bi bi-pencil-square"></i> 수정 아이콘

const Item = () => {
  return (
    <Li>
      <Checkbox>
        {/* <i className="bi bi-check-square"></i> */}
        <i className="bi bi-square"></i>
      </Checkbox>
      <Label forhtml="todoItemLabel">
        Have some ice cream and jelly with Zeze
      </Label>
      {/* <input type="text" id="todoItemLabel" /> */}
    </Li>
  );
};

const Checkbox = styled.span`
  width: 30px;
  border: 1px solid #dadada;
`;

const Li = styled.li`
  width: 100%;
  background-color: #e0d6f1;
  padding: 10px;
  /* border: 1px solid #dadada; */
  border-radius: 3px;
  align-items: center;
  /* box-shadow: 3px 3px 3px 3px #e3e1e1; */
`;

const Label = styled.label`
  margin: 10px;
`;

export default Item;
