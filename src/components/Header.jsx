import React from 'react';
import TaskCard from './TaskCard';
import TaskList from './TaskList';
import Rightside from './Rightside';
import UpcomingTask from './UpcomingTask';

const Header = () => {
  return (
    <div className="bg-[#FAF8FE] flex">
      <div className="flex flex-col w-3/4">
        <div className="flex flex-col justify-between items-center mb-2">
          <div className="flex flex-row justify-between w-full items-center mt-2">
            <input
              type="text"
              className="px-4 py-2 border rounded-md focus:outline-none ml-[32rem]"
              placeholder="Search"
            />
            <div className="flex items-center space-x-4">
              <button className="rounded-full hover:bg-gray-200">
                <img src="/path/to/notification-icon.png" alt="Notify" />
              </button>
              <button className="rounded-full hover:bg-gray-200">
                <img src="/path/to/settings-icon.png" alt="Setting" />
              </button>
              <img src="/path/to/profile-pic.png" alt="Profile" className="rounded-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex gap-3 ml-5">
            <TaskCard 
              title="UX Research for Banking project" 
              progress={46.52} 
              members={["/path/to/member1.png", "/path/to/member2.png", "/path/to/member3.png"]}
            />
            <TaskCard 
              title="Resolution for developer" 
              progress={100} 
              members={["/path/to/member1.png", "/path/to/member2.png", "/path/to/member3.png"]}
            />
          </div>
          <div className="flex">
            <TaskList 
              tasks={["Buy milk", "Run away from work", "Finish left over task", "Make me a sandwich"]} 
            />
          </div>
        </div>
        <UpcomingTask />
      </div>
      <Rightside />
    </div>
  );
};

export default Header;
