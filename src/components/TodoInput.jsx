import { useState } from "react";

export const TodoList = ({ handleTask }) => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    const payload = {
      title: task,
      status: false
    };
    handleTask(payload);
  };

  return (
    <>
      <h1>Look Todolist </h1>
      <input
        type="text"
        placeholder="Add Items"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
};
