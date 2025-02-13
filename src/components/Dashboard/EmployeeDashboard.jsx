import React from "react";
import Header from "../others/Header";
import Tasks from "../others/Tasks";
import Tasklist from "../TaskList/Tasklist";

const EmployeeDashboard = (props) => {
  // console.log(props);

  return (
    <div className="p-10 bg-[#1c1c1c] min-h-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      <Tasks data={props.data} />
      <Tasklist data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
