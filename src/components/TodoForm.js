import React, { useState } from "react";
import styled from "styled-components";
import "./hover.css";

const Form = styled.form`
  width: 50%;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  input {
    background-color: #0353a4;
    border: 0;
    padding: 6px;
    font-size: 1rem;
    width: 240px;
    outline: 0;
    color: #f3f3f3;
    border-bottom: 1px solid #f3f3f3;
    margin-right: 8px;
  }
  button {
    padding: 5px 30px;
    margin-left: 20px;
    font-size: 1rem;
    border: none;
  }
`;

const TodoForm = props => {
  const [value, setValue] = useState("");

  const changeHandler = e => setValue(e.target.value);

  const addTodo = e => {
    e.preventDefault();
    const newTodo = {
      item: value,
      completed: false,
      id: Date.now(),
    };
    if (value !== "") {
      props.dispatch({
        type: "ADD_ITEM",
        payload: newTodo,
      });
      setValue("");
    }
  };

  return (
    <Form onSubmit={addTodo}>
      <input onChange={changeHandler} type="text" name="item" value={value} />
      <button className="hvr-bob hvr-bounce-to-top">Add</button>
    </Form>
  );
};

export default TodoForm;
