import { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useAuth } from "./context/AuthContext";
import js from "@eslint/js";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const authData = useAuth();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);

      setUser(userData.role);
      setLoggedInUser(userData.data);
    }
  }, []);

  const handelLogin = (email, password) => {
    if (!authData) {
      alert("Data not loaded yet.");
      return;
    }
  
    // Retrieve admin data from authData
    const { admin, employees } = authData;
  
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      setLoggedInUser(admin[0]); // Now properly setting admin
  
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: admin[0] })
      );
    } else {
      const employee = employees.find(
        (e) => e.email === email && e.password === password
      );
  
      if (employee) {
        setUser("employee");
        setLoggedInUser(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid Login");
      }
    }
  };
  

  return (
    <>
      {!user ? (
        <Login handelLogin={handelLogin} />
      ) : user === "admin" ? (
        <AdminDashboard changeUser={setUser} data = {loggedInUser} />
      ) : (
        <EmployeeDashboard changeUser={setUser} data={loggedInUser} />
      )}
    </>
  );
}

export default App;