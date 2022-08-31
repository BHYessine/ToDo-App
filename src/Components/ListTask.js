import React, { useState } from "react";
import { connect } from "react-redux";
import Task from "./Task";
import {
  addTasks,
  removeTasks,
  editTasks,
  completeTasks,
} from "../Reducers/reducer";
import { MdFilterListAlt } from "react-icons/md";
function ListTask(props) {
  const styleClicked = {
    color: "blue",
  };
  const [sort, setSort] = useState("all");
  return (
    <div className="listContainer">
      <div className="filter-btns">
        <button
          onClick={() => setSort("all")}
          style={sort === "all" ? styleClicked : null}
        >
          <MdFilterListAlt /> All
        </button>

        <button
          onClick={() => setSort("done")}
          style={sort === "done" ? styleClicked : null}
        >
          <MdFilterListAlt /> Done
        </button>
        <button
          onClick={() => setSort("notDone")}
          style={sort === "notDone" ? styleClicked : null}
        >
          <MdFilterListAlt /> Not Done
        </button>
      </div>

      <ul>
        {props.listTasks.length > 0 && sort === "notDone"
          ? props.listTasks.map((item) => {
              return (
                item.isDone === false && (
                  <Task
                    key={item.id}
                    task={item}
                    removeTask={props.removeTask}
                    editTask={props.editTask}
                    completeTask={props.completeTask}
                  />
                )
              );
            })
          : null}

        {props.listTasks.length > 0 && sort === "done"
          ? props.listTasks.map((item) => {
              return (
                item.isDone === true && (
                  <Task
                    key={item.id}
                    task={item}
                    removeTask={props.removeTask}
                    editTask={props.editTask}
                    completeTask={props.completeTask}
                  />
                )
              );
            })
          : null}

        {props.listTasks.length > 0 && sort === "all"
          ? props.listTasks.map((item) => {
              return (
                <Task
                  key={item.id}
                  task={item}
                  removeTask={props.removeTask}
                  editTask={props.editTask}
                  completeTask={props.completeTask}
                />
              );
            })
          : "No Tasks To Do!!"}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listTasks: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (obj) => dispatch(addTasks(obj)),
    removeTask: (id) => dispatch(removeTasks(id)),
    editTask: (obj) => dispatch(editTasks(obj)),
    completeTask: (id) => dispatch(completeTasks(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);
