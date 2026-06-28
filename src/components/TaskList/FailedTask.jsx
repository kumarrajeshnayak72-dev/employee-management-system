import React from "react";

const FailedTask = (props) => {
  const Failed = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));

    const employee = employees.find((emp) => emp.id === props.data.id);

    if (employee.taskCounts.active > 0) {
      employee.taskCounts.active -= 1;
      employee.taskCounts.failed += 1;

      localStorage.setItem("employees", JSON.stringify(employees));
    }

    console.log(employee);
  };
  return (
    <div className="bg-yellow-400 h-full w-75 rounded-xl shrink-0 p-5">
      <div className="flex justify-between items-center">
        <h1 className=" bg-red-600 text-sm px-3 py-1 rounded-sm">
          {props.val.category}
        </h1>
        <h3 className="text-sm">{props.val.taskDate}</h3>
      </div>
      <h1 className="mt-5 text-lg  font-bold">{props.val.taskTitle}</h1>
      <p className="mt-2 text-sm">{props.val.taskDescription}</p>
      <button
        onClick={Failed}
        className="bg-red-600 text-sm px-3 py-1 rounded-sm mt-5 flex items-center justify-center active:scale-95 transition-all duration-300"
      >
        Failed
      </button>
    </div>
  );
};

export default FailedTask;
