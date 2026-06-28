import React from "react";

const AcceptTask = (props) => {
  console.log("Complete", props.data);

  const Complete = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));

    const employee = employees.find((emp) => emp.id === props.data.id);

    if (employee.taskCounts.active > 0) {
      employee.taskCounts.active -= 1;
      employee.taskCounts.completed += 1;

      localStorage.setItem("employees", JSON.stringify(employees));
    }

    console.log(employee);
  };
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
    <div className="bg-red-400 h-full w-75 rounded-xl shrink-0 p-5">
      <div className="flex justify-between items-center">
        <h1 className=" bg-red-600 text-sm px-3 py-1 rounded-sm">
          {props.val.category}
        </h1>
        <h3 className="text-sm">{props.val.taskDate}</h3>
      </div>
      <h1 className="mt-5 text-lg  font-bold">{props.val.taskTitle}</h1>
      <p className="mt-2 text-sm">{props.val.taskDescription}</p>
      <div className="flex justify-start items-center gap-2">
        <button
          onClick={Complete}
          className="bg-green-600 text-white px-3 py-1 rounded-sm mt-5 text-sm active:scale-95 transition-all duration-300"
        >
          Mark as Completed
        </button>
        <button
          onClick={Failed}
          className="bg-red-600 text-white px-3 py-1 rounded-sm mt-5 text-sm ml-2 active:scale-95 transition-all duration-300"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
