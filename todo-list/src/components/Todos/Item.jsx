import React from "react";
import styled from "styled-components";
import "bootstrap-icons/font/bootstrap-icons.css";

// <i class="bi bi-pencil-square"></i> 수정 아이콘

const Item = ({ todo }) => {
  return (
    <Li>
      <Checkbox>
        {todo.checked ? (
          <i className="bi bi-check-square"></i>
        ) : (
          <i className="bi bi-square"></i>
        )}
        <Label forhtml="todoItem">{todo.content}</Label>
      </Checkbox>
      {/* <input type="text" id="todoItem" /> */}
      <div className="edit-btns">
        <i className="bi bi-pencil-square"></i>
        <i className="bi bi-trash3"></i>
      </div>
    </Li>
  );
};

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: #e0d6f1;
  padding: 10px;
  border-radius: 3px;
  align-items: center;
  margin-bottom: 5px;
  .edit-btns {
    margin-right: 3px;
    .bi-pencil-square {
      margin-right: 5px;
    }
  }
`;

const Checkbox = styled.span`
  border: 1px solid #dadada;
  text-overflow: ellipsis;
`;

const Label = styled.label`
  margin: 10px;
`;

export default Item;
