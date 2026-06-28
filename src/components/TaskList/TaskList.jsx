import React from "react";
import CompleteTask from "./CompleteTask";
import AcceptTask from "./AcceptTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = (props) => {
  // console.log("TaskList", props);

  return (
    <div
      id="taskList"
      className="flex items-start gap-4 sm:gap-5 mt-6 sm:mt-10 w-full py-4 sm:py-5 h-[45%] sm:h-[55%] flex-nowrap overflow-x-auto overflow-y-hidden"
    >
      {props.data.tasks.map((elem, index) => {
        if (elem.active) {
          return <AcceptTask key={index} data={props.data} val={elem} />;
        }

        if (elem.completed) {
          return <CompleteTask key={index} data={props.data} val={elem} />;
        }

        if (elem.failed) {
          return <FailedTask key={index} data={props.data} val={elem} />;
        }

        if (elem.newTask) {
          return <NewTask key={index} data={props.data} val={elem} />;
        }

        return null;
      })}
    </div>
  );
};

export default TaskList;
