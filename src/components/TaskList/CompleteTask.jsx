import React from "react";

const CompleteTask = (props) => {
  const complete = () => {
    if (props.data.taskCounts.active > 0) {
      props.data.taskCounts.active -= 1;
      props.data.taskCounts.completed += 1;
    }
  };

  return (
    <div className="bg-green-400 h-full w-64 sm:w-75 rounded-xl shrink-0 p-4 sm:p-5">
      <div className="flex justify-between items-center">
        <h1 className="bg-red-600 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-sm">
          {props.val.category}
        </h1>
        <h3 className="text-xs sm:text-sm">{props.val.taskDate}</h3>
      </div>

      <h1 className="mt-4 sm:mt-5 text-base sm:text-lg font-bold">
        {props.val.taskTitle}
      </h1>

      <p className="mt-2 text-xs sm:text-sm">{props.val.taskDescription}</p>

      <button
        onClick={complete}
        className="bg-red-600 text-xs sm:text-sm px-3 py-1 rounded-sm mt-4 sm:mt-5 flex items-center justify-center active:scale-95 transition-all duration-300"
      >
        Complete
      </button>
    </div>
  );
};

export default CompleteTask;
