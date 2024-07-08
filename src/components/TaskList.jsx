import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div className="bg-white p-4 rounded-lg w-72">
      <h3 className="text-lg font-semibold">Task</h3>
      <ul className="mt-2 space-y-2">
        {tasks.map((task, index) => (
          <li key={index}>
            <input type="radio" onClick={()=>{}} id={`task${index}`} />
            <label htmlFor={`task${index}`} className="ml-2">{task}</label>
          </li>
        ))}
      </ul>
      <button className="mt-4 ml-32 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-md">New Task</button>
    </div>
  );
};

export default TaskList;
