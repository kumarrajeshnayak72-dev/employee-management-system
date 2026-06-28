import React from "react";

const TaskListNumber = (props) => {
  console.log(props);

  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-4 sm:gap-5 mt-10">
      <div className="flex px-6 sm:px-9 py-5 sm:py-6 flex-col bg-red-400 w-full sm:w-[48%] lg:w-[23%] rounded-xl">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          {props.data.taskCounts.active}
        </h1>
        <h3 className="text-lg sm:text-xl font-medium">Active</h3>
      </div>

      <div className="flex px-6 sm:px-9 py-5 sm:py-6 flex-col bg-blue-400 w-full sm:w-[48%] lg:w-[23%] rounded-xl">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          {props.data.taskCounts.newTask}
        </h1>
        <h3 className="text-lg sm:text-xl font-medium">NewTask</h3>
      </div>

      <div className="flex px-6 sm:px-9 py-5 sm:py-6 flex-col bg-green-400 w-full sm:w-[48%] lg:w-[23%] rounded-xl">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          {props.data.taskCounts.completed}
        </h1>
        <h3 className="text-lg sm:text-xl font-medium">Completed</h3>
      </div>

      <div className="flex px-6 sm:px-9 py-5 sm:py-6 flex-col bg-yellow-400 w-full sm:w-[48%] lg:w-[23%] rounded-xl">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          {props.data.taskCounts.failed}
        </h1>
        <h3 className="text-lg sm:text-xl font-medium">Failed</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
