import React from "react";
import { useDispatch } from "react-redux";
import { MdOutlineDone, MdDelete } from "react-icons/md";
import { deleteTodo, doneTodo } from "../Redux/actions";

function Task({ task, setNotif }) {
  const dispatch = useDispatch();

  const handleDone = (id) => {
    dispatch(doneTodo(id));
    setNotif(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    setNotif(true);
  };

  return (
    <div className="task-container">
      <div className="task-detail">
        <h3>{task.title}</h3>
        <p>{task.description} </p>
      </div>
      <div className="task-icons">
        {!task.isDone && (
          <MdOutlineDone
            className="icon"
            title="done"
            onClick={() => handleDone(task.id)}
            style={{ color: "rgb(118, 216, 118)" }}
          />
        )}

        <MdDelete
          className="icon"
          title="delete"
          onClick={() => handleDelete(task.id)}
          style={{ color: "rgb(230, 65, 65)" }}
        />
      </div>
    </div>
  );
}

export default Task;
