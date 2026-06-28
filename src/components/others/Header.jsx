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
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center font-sans gap-3 sm:gap-0">
      <h1 className="text-2xl sm:text-3xl font-medium">
        Hello,
        <br /> <span className="text-3xl">{name} 👋</span>
      </h1>

      <button
        onClick={logOut}
        className="bg-red-600 px-4 py-2 rounded-lg text-lg sm:text-xl font-medium w-full sm:w-auto"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
