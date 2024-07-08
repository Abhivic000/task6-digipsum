import React from 'react';
import AvatarGroup from './AvatarGroup';

const tasks = [
  { time: "10 AM", title: "Medical Assistant", members: ["/path/to/member1.png", "/path/to/member2.png", "/path/to/member3.png"], color: "bg-[#5723EA]" },
  { time: "11 AM", title: "Web Designer", members: ["/path/to/member1.png", "/path/to/member2.png"], color: "bg-[#505B8F]" },
  { time: "11 AM", title: "Dog Trainer", members: ["/path/to/member1.png", "/path/to/member2.png"], color: "bg-[#5723EA]" },
  { time: "12 PM", title: "President of Sales", members: ["/path/to/member1.png", "/path/to/member2.png"], color: "bg-[#505B8F]" },
];

const UpcomingTask = () => {
  return (
    <div className="bg-[#FAF8FE] p-5 rounded-lg w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Upcoming Task</h2>
      </div>
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <button className="p-2 rounded-full hover:bg-gray-200">
            <img src="/path/to/left-arrow.png" alt="Previous" />
          </button>
          <span className="text-lg font-bold">Month</span>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <img src="/path/to/right-arrow.png" alt="Next" />
          </button>
        </div>
        <div className="flex justify-between mt-2">
          {["Monday 13", "Tuesday 14", "Wednesday 15", "Thursday 16", "Friday 17", "Saturday 18", "Sunday 19"].map((date, index) => (
            <div key={index} className={`p-2 rounded-lg ${index === 4 ? 'bg-[#5723EA] text-white' : 'bg-gray-200'}`}>
              {date}
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-5 bg-[#5723EA] opacity-20"></div>
        <div className="pl-10">
          {tasks.map((task, index) => (
            <div key={index} className="flex items-center mb-4">
              <div className="w-1/6 text-gray-500">{task.time}</div>
              <div className={`w-full ${task.color} p-2 rounded-lg flex items-center`}>
                <AvatarGroup images={task.members} />
                <span className="ml-2 text-white">{task.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingTask;
