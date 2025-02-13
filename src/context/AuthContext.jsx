import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
export const AuthContext = createContext();

export const AuthProvider = (props) => {
  // localStorage.clear()
  const [userData, setUserData] = useState({ employees: [], admin: {} });

  useEffect(() => {
    if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
      setLocalStorage();
    }
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  // Function to update employees
  const setEmployees = (updatedEmployees) => {
    setUserData((prev) => ({ ...prev, employees: updatedEmployees }));
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return (
    <AuthContext.Provider value={{ ...userData, setEmployees }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
