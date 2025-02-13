import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div>
      <div className=" shrink-0 bg-red-400 h-full w-[350px] rounded-xl p-5 ">
        <div className="flex justify-between">
          <h3 className="bg-red-500 text-sm  px-3 py-1 rounded">
            {data.category}
          </h3>
          <h4 className="text-sm">{data.date}</h4>
        </div>
        <h2 className="text-2xl font-semibold mt-5">{data.title}</h2>
        <p className="  mt-5 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          nesciunt nostrum, cupiditate explicabo ullam autem.
        </p>
        <div className="mt-5">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition">
            Failed
          </button>
        </div>
      </div>
    </div>
  );
};

export default FailedTask;
