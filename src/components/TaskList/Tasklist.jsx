import React from "react";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import AcceptTask from "./AcceptTask";

const Tasklist = ({ data }) => {
  return (
    <div
      id="task"
      className="mt-10 bg-[#1c1c1c] h-[350px] w-full flex gap-5 flex-nowrap items-stretch justify-start py-5 overflow-x-auto rounded-lg"
    >
      {data.tasks.map((e, idx) => {
        if (e.active) {
          return <AcceptTask key={idx} data={e} />;
        } else if (e.new) {
          return <NewTask key={idx} data={e} />;
        } else if (e.completed) {
          return <CompleteTask key={idx} data={e} />;
        } else if (e.failed) {
          return <FailedTask key={idx} data={e} />;
        } else {
          // If a task doesn’t match any category, log a warning (for debugging)
          console.warn("Unhandled task:", e);
          return null;
        }
      })}
    </div>
  );
};


export default Tasklist;
