import { useState } from "react";
import styled from "styled-components";
import "bootstrap-icons/font/bootstrap-icons.css";

// <i class="bi bi-pencil-square"></i> 수정 아이콘

const Item = ({ todo, onToggle, onRemove, onCheck }) => {
  const [edited, setEdited] = useState(false);
  //첫 셋팅에 currunt값과 prev 값 둘 다 todo의 content값을 넣어주고 시작한다.
  const [currentVal, setCurrentVal] = useState(todo.content);
  const [prevVal, setPrevVal] = useState(todo.content);

  const contentLen = onCheck(currentVal) ? "20" : "35";

  const checkBoxClickHandler = () => {
    onToggle(todo.id);
  };

  const removeHandler = () => {
    onRemove(todo.id);
  };

  const editContentHandler = () => {
    setEdited(!edited);
  };

  //여기서 currentVal과 prevValue의 저장값이 차이가 나기 시작
  const inputHandler = (e) => {
    setCurrentVal(e.target.value);
  };

  const stopHandler = (e) => {
    e.stopPropagation();
  };

  //28번째줄 inputHandler에서 currentVal을 이미 업뎃 시켰기 때문에 "수정확인 버튼""을 눌렀을 때 prevVal을 업뎃시켜주면 된다.
  const ConfirmClickHandler = () => {
    setEdited(!edited);
    setPrevVal(currentVal);
  };

  const cancelClickHandler = () => {
    setEdited(false);
  };

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
              value={currentVal}
              maxLength={contentLen}
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
                {/* <i className="bi bi-check-square"></i> */}
                <i className="bi bi-check-square-fill"></i>
              </span>
            ) : (
              <span className="edit-btn" role="button">
                <i className="bi bi-square"></i>
              </span>
            )}

            {/* <Label forhtml="todoItem">{val}</Label> */}
            <Label forhtml="todoItem">{prevVal}</Label>
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
  width: 330px;
  text-align: left;
  .edit-input {
    border: none;
    background-color: transparent;
    outline: none;
    height: 100%;
    font-size: 16px;
    margin-left: 10px;
    width: 300px;
  }
`;

const Label = styled.label`
  margin: 10px;
`;

export default Item;
