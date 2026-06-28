import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, settaskTitle] = useState("");
  const [date, setDate] = useState("");
  const [asign, setAsign] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [task, setTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setTask({
      taskTitle,
      date,
      category,
      description,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });
    const data = JSON.parse(localStorage.getItem("employees"));
    data.forEach((e) => {
      if (asign == e.firstName) {
        e.tasks.push(task);
      }
    });
    localStorage.setItem("employees", JSON.stringify(data));
    settaskTitle("");
    setDate("");
    setAsign("");
    setCategory("");
    setDescription("");
  };

  return (
    <form
      onSubmit={(e) => submitHandler(e)}
      className="flex justify-between items-center bg-[#1C1C1C] mt-10 p-5 w-full rounded-lg "
    >
      <div className="w-[40%] p-2">
        <h3 className="text-md">Task Title</h3>
        <input
          onChange={(e) => settaskTitle(e.target.value)}
          value={taskTitle}
          type="text"
          placeholder="Make a UI design"
          className="outline-none border px-3 py-1 rounded-lg w-full mt-1 mb-3"
        />
        <h3 className="text-md">Date</h3>
        <input
          onChange={(e) => setDate(e.target.value)}
          value={date}
          type="date"
          className="outline-none border px-3 py-1 rounded-lg w-full mt-1 mb-3"
        />
        <h3 className="text-md">Asign To</h3>
        <input
          onChange={(e) => setAsign(e.target.value)}
          value={asign}
          type="text"
          placeholder="Employee Name"
          className="outline-none border px-3 py-1 rounded-lg w-full mt-1 mb-3"
        />
        <h3 className="text-md">Category</h3>
        <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          type="text"
          placeholder="design, dev, etc"
          className="outline-none border px-3 py-1 rounded-lg w-full mt-1 mb-3"
        />
      </div>
      <div className="w-[40%] flex justify-start flex-col ">
        <h3 className="text-md">Description</h3>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="border h-47.5 mt-1 mb-3 px-3 py-1 rounded-lg"
        ></textarea>
        <button className="w-full bg-emerald-400 py-1 rounded-lg flex justify-center items-center active:scale-95 transition-all duration-300">
          Create Task
        </button>
      </div>
    </form>
  );
};

export default CreateTask;
