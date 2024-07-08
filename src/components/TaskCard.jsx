import React from 'react';
import AvatarGroup from './AvatarGroup';

const TaskCard = ({ title, progress, members }) => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-4 rounded-lg w-80">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="flex items-center mb-2">
        <AvatarGroup images={members} />
      </div>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
          ></div>
        </div>
      </div>
      <p className="text-sm">{progress}% Complete</p>
    </div>
  );
};

export default TaskCard;
