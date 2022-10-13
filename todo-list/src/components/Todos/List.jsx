import Item from "./Item";
import styled from "styled-components";

const List = ({ todos, onToggle, onRemove }) => {
  return (
    <Ul>
      {todos.map((todo) => (
        <Item
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </Ul>
  );
};

const Ul = styled.ul`
  width: 400px;
  height: 300px;
  margin: 40px 0 0 25px;
  padding: 0;
  text-align: center;
`;

export default List;
