import React, { useState } from "react";
import AddTask from "./Components/AddTask";

import "./App.css";
import TodoList from "./Components/TodoList";
import { Notification } from "./Components/notification";

function App() {
  const [show, setShow] = useState(false);
  const [notif, setNotif] = useState(false);
  return (
    <div className="container">
      <Notification setNotif={setNotif} notif={notif} />
      <div className="App">
        <p className="title"> ToDo Application </p>
        <TodoList setNotif={setNotif} />
        <button className="btn-add" onClick={() => setShow(true)}>
          + Add Task
        </button>
      </div>
      {show && <AddTask setShow={setShow} setNotif={setNotif} />}
    </div>
  );
}

export default App;
