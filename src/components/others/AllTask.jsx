import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div
      id="allTask"
      className="bg-[#1c1c1c] mt-5 p-5 rounded-lg overflow-auto"
    >
      <div className="flex justify-between items-center bg-red-400 p-3 rounded-lg mb-2">
        <h2 className="w-1/5 text-lg font-medium">NAME</h2>
        <h2 className="w-1/5 text-lg font-medium text-center">ACTIVE</h2>
        <h2 className="w-1/5 text-lg font-medium text-center">NEW TASK</h2>
        <h2 className="w-1/5 text-lg font-medium text-center">COMPLETED</h2>
        <h2 className="w-1/5 text-lg font-medium text-center">FAILED</h2>
      </div>

      <div id="employeeList" className="">
        {authData?.employee?.map((emp) => {
          return (
            <div
              key={emp.id}
              className="flex justify-between items-center border border-red-400 p-3 rounded-lg mb-2"
            >
              <h2 className="w-1/5 text-lg font-medium">{emp.firstName}</h2>
              <h2 className="w-1/5 text-lg font-medium text-center">
                {emp.taskCounts.active}
              </h2>
              <h2 className="w-1/5 text-lg font-medium text-center">
                {emp.taskCounts.newTask}
              </h2>
              <h2 className="w-1/5 text-lg font-medium text-center">
                {emp.taskCounts.completed}
              </h2>
              <h2 className="w-1/5 text-lg font-medium text-center">
                {emp.taskCounts.failed}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
