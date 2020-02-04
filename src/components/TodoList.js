import React, { useState, useReducer } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import styled from "styled-components";
import { initialState, todoReducer } from "../reducers/index";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60vw;
  button {
    font-size: 1rem;
    padding: 5px 10px;
    border: none;
    margin-top: 50px;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleToggle = id => {
    dispatch({ type: "TOGGLE_DONE", payload: id });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR_COMPLETED_ITEMS" });
  };

  return (
    <>
      <TodoForm dispatch={dispatch} />
      <ListContainer>
        <List>
          {state.map(item => (
            <Todo
              key={item.id}
              item={item}
              handleToggle={handleToggle}
              dispatch={dispatch}
            />
          ))}
        </List>
        <button className="hvr-bob hvr-bounce-to-top" onClick={handleClear}>
          Clear Todo List
        </button>
      </ListContainer>
    </>
  );
};

export default TodoList;
