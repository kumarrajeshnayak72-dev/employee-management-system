import React, { Fragment, useEffect, useState } from "react";
import { setLocalStorage } from "../../utilities/LocalStorage";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <Fragment>
      <div className="bg-black text-white min-h-screen flex justify-center items-center px-4">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col border w-full max-w-sm p-3 rounded-xl justify-center items-center border-emerald-600 gap-2"
        >
          <input
            type="email"
            placeholder="Enter Your Email Here..."
            className="w-[90%] border-emerald-600 rounded-full px-4 py-1.5 border outline-none"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            type="password"
            placeholder="Enter Your Password Here..."
            className="w-[90%] border-emerald-600 rounded-full px-4 py-1.5 border outline-none"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <button className="bg-emerald-600 w-[90%] rounded-full py-1.5 mt-6 active:scale-95">
            Login
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
