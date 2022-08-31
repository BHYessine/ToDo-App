import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/actions";

function AddTask({ setShow, setNotif }) {
  const dispatch = useDispatch();
  const [task, setTask] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTask({ ...task, [name]: value });
  };

  const handleAdd = () => {
    if (task === "") {
      alert("Add somthing to do!!");
    } else {
      dispatch(
        addTodo({
          id: Math.random(),
          title: task.title,
          description: task.description,
          isDone: false,
        })
      );
      setTask({});
      setShow(false);
      setNotif(true);
    }
  };

  return (
    <div className="addContainer">
      <div className="task-detail">
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={(e) => handleChange(e)}
          placeholder="Add title..."
        />
        <textarea
          name="description"
          value={task.description}
          placeholder="Add description..."
          onChange={(e) => handleChange(e)}
        />
        <button className="btn-add" onClick={handleAdd}>
          Add
        </button>
        <button className="btn-close" onClick={() => setShow(false)}>
          X
        </button>
      </div>
    </div>
  );
}

export default AddTask;
