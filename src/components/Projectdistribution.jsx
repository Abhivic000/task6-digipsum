import React from 'react';

const Projectdistribution = () => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Project Distribution</h3>
      <div className="mb-2">
        <div className="flex justify-between mb-1">
          <span>Jackson's Group</span>
          <span>46.52%</span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '46.52%' }}></div>
        </div>
      </div>
      <div className="mb-2">
        <div className="flex justify-between mb-1">
          <span>Alita's Group</span>
          <span>46.52%</span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2">
          <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '46.52%' }}></div>
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-1">
          <span>Noname's Group</span>
          <span>46.52%</span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2">
          <div className="bg-green-600 h-2 rounded-full" style={{ width: '46.52%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Projectdistribution;
