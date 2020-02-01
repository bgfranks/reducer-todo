import React, { useState, useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #0353a4;
  height: 100vh;
  color: #f3f3f3;
  h2 {
    font-size: 2.5rem;
    padding: 0 0 80px;
  }
`;

const App = () => {
  return (
    <AppContainer>
      <h2>Welcome to your Todo App!</h2>
      <TodoList />
    </AppContainer>
  );
};

export default App;
