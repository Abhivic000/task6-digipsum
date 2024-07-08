import React from 'react';
import Projectdistribution from './Projectdistribution';
import TodayQueue from './TodayQueue';
import Calendarr from './Calendar';

const Rightside = () => {
  return (
    <div className="w-1/4 bg-white p-4">
      <TodayQueue/>
      <Calendarr/>
      <div className="bg-gray-500 h-40 w-[19.2rem] rounded-lg mt-2"></div>
      <Projectdistribution/>
    </div>
  );
};

export default Rightside;
