import React from "react";
import styled from "styled-components";
import "bootstrap-icons/font/bootstrap-icons.css";

// <i class="bi bi-pencil-square"></i> 수정 아이콘

const Item = () => {
  return (
    <>
      <Li>
        <Checkbox>
          <i className="bi bi-check-square"></i>
          {/* <i className="bi bi-square"></i> */}
        </Checkbox>
        <Label forhtml="todoItem">
          Have some ice cream and jelly with Zeze
        </Label>
        {/* <input type="text" id="todoItem" /> */}
      </Li>
      <Li background-color="gray">
        <Checkbox>
          {/* <i className="bi bi-check-square"></i> */}
          <i className="bi bi-square"></i>
        </Checkbox>
        <Label forhtml="todoItem">Travel in Europe with Zeze</Label>
        {/* <input type="text" id="todoItem" /> */}
      </Li>
    </>
  );
};

const Checkbox = styled.span`
  width: 30px;
  border: 1px solid #dadada;
`;

const Li = styled.li`
  display: flex;
  width: 100%;
  background-color: #e0d6f1;
  padding: 10px;
  /* border: 1px solid #dadada; */
  border-radius: 3px;
  align-items: center;
  /* box-shadow: 3px 3px 3px 3px #e3e1e1; */
  margin-bottom: 5px;
`;

const Label = styled.label`
  margin: 10px;
`;

export default Item;
