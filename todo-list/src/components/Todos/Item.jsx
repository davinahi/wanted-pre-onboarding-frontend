import { useState } from "react";
import styled from "styled-components";
import "bootstrap-icons/font/bootstrap-icons.css";

// <i class="bi bi-pencil-square"></i> 수정 아이콘

const Item = ({ todo, onToggle, onRemove }) => {
  const [edited, setEdited] = useState(false);

  //함수명 변경(라벨에서도 쓰이고 있음)
  const checkBoxClickHandler = () => {
    onToggle(todo.id);
    console.log("checkbox 움직인다!");
  };

  const removeHandler = () => {
    onRemove(todo.id);
  };

  const editContentHandler = () => {
    setEdited(!edited);
  };

  return (
    <Li>
      <Checkbox onClick={checkBoxClickHandler}>
        {todo.checked ? (
          <span className="edit-btn" role="button">
            <i className="bi bi-check-square"></i>
          </span>
        ) : (
          <span className="edit-btn" role="button">
            <i className="bi bi-square"></i>
          </span>
        )}
        {edited ? (
          <input onChange={checkBoxClickHandler} value={todo.content}></input>
        ) : (
          <Label forhtml="todoItem">{todo.content}</Label>
        )}
      </Checkbox>

      {/* <input type="text" id="todoItem" /> */}

      <div className="edit-btns">
        <span
          className="edit-btn"
          role="button"
          onClick={editContentHandler}
          value={todo.content}
        >
          <i className="bi bi-pencil-square"></i>
        </span>
        <span className="remove-btn" role="button" onClick={removeHandler}>
          <i className="bi bi-trash3"></i>
        </span>
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
`;

const Label = styled.label`
  margin: 10px;
`;

export default Item;
