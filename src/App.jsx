import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Project from './Pages/Project';
import MyIssue from './Pages/MyIssue';
import MyTeam from './Pages/MyTeam';
import Notify from './Pages/Notify';
import Effiy from './Pages/Effiy';
import Chart from './Pages/Chart';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/booking" />} />
            <Route path="/booking" element={<Header />} />
            <Route path="/project" element={<Project />} />
            <Route path="/my-issue" element={<MyIssue />} />
            <Route path="/my-team" element={<MyTeam />} />
            <Route path="/notification" element={<Notify />} />
            <Route path="/efficiency" element={<Effiy />} />
            <Route path="/chart" element={<Chart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
