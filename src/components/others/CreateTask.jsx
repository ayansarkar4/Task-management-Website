import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const CreateTask = () => {
  const authData = useAuth();

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskAsign, setTaskAsign] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  return (
    <div>
      <div className="mt-3 w-full mx-auto bg-[#2a2a2a] p-8 rounded-lg shadow-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const newTask = {
              taskTitle,
              taskDate,
              taskCategory,
              taskDescription,
              active: false,
              new: true,
              failed: false,
              completed: false,
            };

            let storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];

            const updatedEmployees = storedEmployees.map((employee) => {
              if (employee.name === taskAsign) {
                console.log("Task assigned to:", employee.name); // Debugging log
                return {
                  ...employee,
                  tasks: [...(employee.tasks || []), newTask], // Ensure `tasks` exists
                  taskCounts: {
                    ...employee.taskCounts,
                    new: (employee.taskCounts?.new || 0) + 1,
                  },
                };
              }
              return employee;
            });
            

            // Update Local Storage
            localStorage.setItem("employees", JSON.stringify(updatedEmployees));

          
            authData.setEmployees(updatedEmployees);

            
            setTaskTitle("");
            setTaskCategory("");
            setTaskDate("");
            setTaskAsign("");
            setTaskDescription("");
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-14"
        >
          {/* Left Column */}
          <div className="space-y-5">
            <div>
              <label className="block font-medium mb-1">Task Title</label>
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                type="text"
                placeholder="Enter Task"
                className="w-full p-3 bg-[#1c1c1c] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Date</label>
              <input
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                type="date"
                className="w-full p-3 bg-[#1c1c1c] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Assign To</label>
              <input
                value={taskAsign}
                onChange={(e) => setTaskAsign(e.target.value)}
                type="text"
                placeholder="Enter Employee Name"
                className="w-full p-3 bg-[#1c1c1c] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Category</label>
              <input
                value={taskCategory}
                onChange={(e) => setTaskCategory(e.target.value)}
                type="text"
                placeholder="Enter Category"
                className="w-full p-3 bg-[#1c1c1c] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-5 flex flex-col">
            <div className="flex-1">
              <label className="block font-medium mb-1">Description</label>
              <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                cols="30"
                rows="10"
                placeholder="Enter task details..."
                className="w-full p-3 bg-[#1c1c1c] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              ></textarea>
            </div>

            <button className="w-full bg-amber-400 hover:bg-amber-600 text-white font-medium py-3 rounded-lg transition">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
