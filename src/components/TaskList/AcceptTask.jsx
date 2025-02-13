import React from "react";

const AcceptTask = ({  data}) => {
  return (
    <div>
      
      <div className=" shrink-0 bg-amber-400 h-full w-[350px] rounded-xl p-5 ">
        <div className="flex justify-between">
          <h3 className="bg-red-500 text-sm  px-3 py-1 rounded">{data.category}</h3>
          <h4 className="text-sm">{data.date}</h4>
        </div>
        <h2 className="text-2xl font-semibold mt-5">{data.title}</h2>
        <p className="  mt-5 text-sm">{data.description}</p>
        <div className="mt-5 justify-between flex ">
          <button className="bg-green-500 text-white px-3 py-2 rounded-lg shadow-md hover:bg-green-600 transition">
            Make as Completed
          </button>
          <button className="bg-red-500 text-white px-3 py-2 rounded-lg shadow-md hover:bg-red-600 transition">
            Make as Failed
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;
