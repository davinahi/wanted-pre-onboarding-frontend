import React from "react";

const List = () => {
  return (
    <ul className="todoList">
      <li>
        <label forhtml="todoItemLabel">
          Have some ice cream and jelly with Zeze
        </label>
        <input type="text" id="todoItemLabel" />
      </li>
    </ul>
  );
};

export default List;
