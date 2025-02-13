import React from "react";
import { useAuth } from "../../context/AuthContext";

const AllTasks = () => {
  const authData = useAuth();
  // console.log(authData);
  
  

  return (
    <div className="bg-[#2a2a2a] mt-5 p-5 rounded-md shadow-lg">
      {/* Table Header */}
      <div className="flex justify-between bg-amber-700 text-white py-2 px-4 rounded-md mb-3 font-semibold shadow">
        <h3 className="w-1/5 text-center">Employee Name</h3>
        <h3 className="w-1/5 text-center">New Task</h3>
        <h3 className="w-1/5 text-center">Active Task</h3>
        <h3 className="w-1/5 text-center">Complete Task</h3>
        <h3 className="w-1/5 text-center">Failed Task</h3>
      </div>

      {/* Table Rows */}
      <div className="space-y-2">
        {authData.employees.map((e , idx) => {
          return (
            <div key={idx} className="flex justify-between border-amber-400 border text-white py-3 px-4 rounded-md shadow">
              <h3 className="w-1/5 text-center">{e.name}</h3>
              <h3 className="w-1/5 text-center">{e.taskCounts.new}</h3>
              <h3 className="w-1/5 text-center">{e.taskCounts.active}</h3>
              <h3 className="w-1/5 text-center">{e.taskCounts.completed}</h3>
              <h3 className="w-1/5 text-center">{e.taskCounts.failed}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTasks;
