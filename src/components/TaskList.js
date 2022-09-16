import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {tasks.map((task,i) => {
        return (
          <div key={i}>
            <Task text={task.text} category={task.category} />
          </div>
        )
      })}
    </div>
  );
}

export default TaskList;
