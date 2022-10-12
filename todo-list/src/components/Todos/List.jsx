import React from "react";
import Item from "./Item";
import styled from "styled-components";

const List = () => {
  return (
    <Ul className="todoList">
      <Item />
    </Ul>
  );
};

const Ul = styled.ul`
  width: 400px;
  height: 300px;
  margin: 40px 0 0 25px;
  /* background-color: #cfcfcf; */
  padding: 0;
  text-align: center;
`;

export default List;
