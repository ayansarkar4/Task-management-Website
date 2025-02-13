import React from 'react';

const NewTask = ({data}) => {
  console.log(data);
  
  return (
    <div>
      <div className="shrink-0 bg-blue-400 h-full w-[350px] rounded-xl p-5">
        <div className="flex justify-between">
          <h3 className="bg-red-500 text-sm px-3 py-1 rounded">{data.category || data.taskCategory}</h3>
          <h4 className="text-sm">{data.date || data.taskDate}</h4>
        </div>
        <h2 className="text-2xl font-semibold mt-5">{data.title || data.taskTitle}</h2>
        <p className="mt-5 text-sm">
          {data.description || data.taskDescription}
        </p>
        <div className="mt-5">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition">
            Accept Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
