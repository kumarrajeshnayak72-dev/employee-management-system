import React from "react";

const TaskListNumber = (props) => {
  // console.log(data);

  return (
    <div className="flex justify-between gap-5  mt-10">
      <div className="flex px-9 py-6 flex-col  bg-red-400 w-[45%]  rounded-xl">
        {/* <h1 className="text-3xl font-semibold">{data.taskCounts.active}</h1> */}
        <h3 className="text-xl font-medium">Active</h3>
      </div>
      <div className="flex px-9 py-6 flex-col  bg-blue-400 w-[45%]  rounded-xl">
        {/* <h1 className="text-3xl font-semibold">{data.taskCounts.newTask}</h1> */}
        <h3 className="text-xl font-medium">NewTask</h3>
      </div>
      <div className="flex px-9 py-6 flex-col  bg-green-400 w-[45%]  rounded-xl">
        {/* <h1 className="text-3xl font-semibold">{data.taskCounts.completed}</h1> */}
        <h3 className="text-xl font-medium">Completed</h3>
      </div>
      <div className="flex px-9 py-6 flex-col  bg-yellow-400 w-[45%]  rounded-xl">
        {/* <h1 className="text-3xl font-semibold">{data.taskCounts.failed}</h1> */}
        <h3 className="text-xl font-medium">Failed</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
