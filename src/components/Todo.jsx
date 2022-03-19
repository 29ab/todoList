// import axios from "axios";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, addItemsDelete, addItemsSuccess } from "../Redux/Action";
import { TodoList } from "./TodoInput";

export const Todo = () => {
  const dispatch = useDispatch();
  const { todo, isErr, loading } = useSelector((state) => ({
    todo: state.todo,
    isErr: state.isErr,
    loading: state.loading
  }));
  const handleAdd = (payload) => {
    // Do Api Call here
    // axios;
    console.log(payload);

    const { title, status } = payload;
    dispatch(addItems());
    axios
      .post("https://json-server-mocker-masai.herokuapp.com/tasks", {
        title,
        status
      })
      .then((res) => dispatch(addItemsSuccess(res.data)))
      .catch((err) => dispatch(addItemsDelete(err)));

    // const handleDelete = (id) => {
    //   dispatch(addItemsDelete(id));
    // };
  };
  const handeldelete = (id) => {
    dispatch(addItemsDelete(id));
  };
  return (
    <>
      <TodoList handleTask={handleAdd} />
      {todo.map((items) => {
        return (
          <>
            <h3 key={items.id}>{items.title}</h3>
            <button onClick={() => handeldelete(items.id)}>delete</button>
          </>
        );
      })}
    </>
  );
};
