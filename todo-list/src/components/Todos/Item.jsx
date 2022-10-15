import { useState, useRef } from "react";
import styled from "styled-components";
import "bootstrap-icons/font/bootstrap-icons.css";

// <i class="bi bi-pencil-square"></i> 수정 아이콘

const Item = ({ todo, onToggle, onRemove }) => {
  const [edited, setEdited] = useState(false);
  const [val, setVal] = useState(todo.content);
  const inputEl = useRef();

  const checkBoxClickHandler = () => {
    onToggle(todo.id);
  };

  const removeHandler = () => {
    onRemove(todo.id);
  };

  const editContentHandler = () => {
    setEdited(!edited);
  };

  const inputHandler = (e) => {
    setVal(e.target.value);
    inputEl.current.focus();
  };

  const stopHandler = (e) => {
    e.stopPropagation();
  };

  const ConfirmClickHandler = () => {
    setVal(val);
    setEdited(!edited);
    // 변경된 값을 label에 넘겨줘야함.
  };

  const cancelClickHandler = () => {
    setEdited(false);
  };

  console.log(val);

  return (
    <>
      {edited ? (
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

            <input
              className="edit-input"
              onChange={inputHandler}
              onClick={stopHandler}
              value={val}
              // ref={inputEl}
            ></input>
          </Checkbox>

          <div className="edit-mode__btns">
            <span
              className="confirm-btn"
              role="button"
              onClick={ConfirmClickHandler}
            >
              <i className="bi bi-check-circle"></i>
            </span>
            <span
              className="cancel-btn"
              role="button"
              onClick={cancelClickHandler}
              // onClick={confirmEditHandler}
            >
              <i className="bi bi-x-circle"></i>
            </span>
          </div>
        </Li>
      ) : (
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

            <Label forhtml="todoItem">{val}</Label>
          </Checkbox>

          <div className="edit__btns">
            <span
              className="edit-btn"
              role="button"
              onClick={editContentHandler}
            >
              <i className="bi bi-pencil-square"></i>
            </span>
            <span className="remove-btn" role="button" onClick={removeHandler}>
              <i className="bi bi-trash3"></i>
            </span>
          </div>
        </Li>
      )}
    </>
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
  .edit__btns,
  .edit-mode__btns {
    margin-right: 3px;
    .bi-pencil-square,
    .bi-check-circle {
      margin-right: 5px;
    }
  }
`;

const Checkbox = styled.span`
  border: 1px solid #dadada;
  .edit-input {
    border: none;
    background-color: transparent;
    outline: none;
    height: 100%;
    font-size: 16px;
    margin-left: 10px;
  }
`;

const Label = styled.label`
  margin: 10px;
`;

export default Item;
