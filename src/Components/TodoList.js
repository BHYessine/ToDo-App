import { useSelector } from "react-redux";
import Task from "./Task";
import "./TodoList.css";

const TodoList = ({ setNotif }) => {
  const todoList = useSelector((state) => state.todoList);

  return (
    <div className="list-container">
      <div className="list-todo">
        <h2>Task To Do</h2>
        {todoList.filter((item) => item.isDone === false).length !== 0 ? (
          todoList.map((task) => {
            return !task.isDone && <Task task={task} setNotif={setNotif} />;
          })
        ) : (
          <h4>Nothing to do.</h4>
        )}
      </div>
      <div className="list-done">
        <h2>Task Done</h2>
        {todoList.filter((item) => item.isDone === true).length !== 0 ? (
          todoList.map((task) => {
            return task.isDone && <Task task={task} setNotif={setNotif} />;
          })
        ) : (
          <h4>Nothing done.</h4>
        )}
      </div>
    </div>
  );
};

export default TodoList;
