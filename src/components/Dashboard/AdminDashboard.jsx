import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTasks from "../others/AllTasks";

const AdminDashboard = (props) => {
  return (
    <div className="p-10 bg-[#1c1c1c] min-h-screen w-full text-white">
      <Header changeUser={props.changeUser} data={props.data} />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
