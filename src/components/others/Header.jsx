import React, { useState } from "react";

const Header = (props) => {
  const name = props.data ? props.data.firstName : "Admin";

  const logOut = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");

    if (confirmLogout) {
      localStorage.removeItem("loggedInUser");
      props.changeUser("");
      // window.location.reload();
    }
  };

  return (
    <div className="flex justify-between items-center font-sans ">
      <h1 className="text-2xl font-medium ">
        Hello,
        <br /> <span className="text-3xl">{name} 👋</span>
      </h1>
      <button
        onClick={logOut}
        className="bg-red-600 px-4 py-2 rounded-lg text-xl font-medium"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
