import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utilities/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // setLocalStorage();
    const { employee, admin } = getLocalStorage();
    setUserData({ employee, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
