import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-44 bg-white h-screen p-4">
      <div className="text-xl font-bold mb-6 mt-4">
        <svg width="137" height="30" viewBox="0 0 163 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M53.5025 28.3488C47.8147 28.3488 44.3681 24.6305 44.3681 18.6371V18.6201C44.3681 12.6777 47.8486 8.85753 53.2987 8.85753C58.7488 8.85753 62.1445 12.5928 62.1445 18.2466V19.7917H49.2748C49.3258 22.8648 50.9727 24.6475 53.6043 24.6475C55.7776 24.6475 56.9831 23.493 57.3226 22.7799L57.3736 22.678H61.9917L61.9578 22.8478C61.3805 25.1908 58.9695 28.3488 53.5025 28.3488ZM53.3836 12.5758C51.2274 12.5758 49.6314 14.036 49.3258 16.6846H57.3905C57.0849 13.968 55.5399 12.5758 53.3836 12.5758Z" fill="#5723EA" />
          <path d="M69.7678 28.3828C68.036 28.3828 66.7796 27.1094 66.7796 25.4285C66.7796 23.7476 68.036 22.4912 69.7678 22.4912C71.5166 22.4912 72.7561 23.7476 72.7561 25.4285C72.7561 27.1094 71.5166 28.3828 69.7678 28.3828Z" fill="#5723EA" />
          <path d="M80.0568 27.9583L73.571 3.45837H78.9023L82.7224 20.9632H82.9941L87.4594 3.45837H91.7889L96.3391 20.9632H96.6108L100.397 3.45837H105.694L99.1915 27.9583H94.3866L89.7515 11.4552H89.4799L84.8957 27.9583H80.0568Z" fill="#5723EA" />
          <path d="M115.932 28.3488C110.177 28.3488 106.713 24.6984 106.713 18.6201V18.5862C106.713 12.5588 110.228 8.85753 115.932 8.85753C121.637 8.85753 125.152 12.5419 125.152 18.5862V18.6201C125.152 24.7154 121.688 28.3488 115.932 28.3488ZM115.932 24.4607C118.564 24.4607 120.075 22.3045 120.075 18.6201V18.5862C120.075 14.9358 118.547 12.7456 115.932 12.7456C113.301 12.7456 111.79 14.9358 111.79 18.5862V18.6201C111.79 22.3045 113.284 24.4607 115.932 24.4607Z" fill="#5723EA" />
          <path d="M129.192 27.9583V9.26501H134.15V12.1683H134.456C135.05 10.1479 136.748 8.9594 139.176 8.9594C139.838 8.9594 140.534 9.06127 141.026 9.19709V13.5266C140.279 13.3568 139.515 13.238 138.751 13.238C135.933 13.238 134.15 14.8509 134.15 17.4996V27.9583H129.192Z" fill="#5723EA" />
          <path d="M144.507 27.9583V2.11707H149.465V16.6506H149.77L156.018 9.26501H161.638L154.456 17.194L162.131 27.9583H156.273L150.823 20.2501L149.465 21.6932V27.9583H144.507Z" fill="#5723EA" />
          <g opacity="0.2">
            <path d="M1.18447 4.20633C0.275002 2.59097 1.44227 0.59423 3.29606 0.594231L10.9411 0.594231L22.6779 21.4432L18.8989 28.1661C17.973 29.8133 15.6019 29.8141 14.6749 28.1676L1.18447 4.20633Z" fill="url(#paint0_linear_1_2451)" />
            <path d="M22.6779 21.4432L28.5785 10.9654L34.4789 21.4432L30.6899 28.1716C29.7632 29.8172 27.3937 29.8172 26.467 28.1716L22.6779 21.4432Z" fill="url(#paint1_linear_1_2451)" />
          </g>
          <path d="M10.941 0.594254L21.325 0.594254C22.2003 0.594255 23.0076 1.06627 23.4369 1.82907L28.5784 10.9654L22.6779 21.4432L10.941 0.594254Z" fill="url(#paint2_linear_1_2451)" />
          <path d="M28.5783 10.9654L33.7198 1.82907C34.1491 1.06627 34.9563 0.594253 35.8316 0.594254L42.0706 0.594254C43.9243 0.594254 45.0916 2.59089 44.1822 4.20625L34.4787 21.4432L28.5783 10.9654Z" fill="url(#paint3_linear_1_2451)" />
          <defs>
            <linearGradient id="paint0_linear_1_2451" x1="34.4789" y1="1.26386" x2="13.9211" y2="36.1763" gradientUnits="userSpaceOnUse">
              <stop stop-color="#3656EF" />
              <stop offset="0.735521" stop-color="#9B1CFF" />
            </linearGradient>
            <linearGradient id="paint1_linear_1_2451" x1="34.4789" y1="1.26386" x2="13.9211" y2="36.1763" gradientUnits="userSpaceOnUse">
              <stop stop-color="#3656EF" />
              <stop offset="0.735521" stop-color="#9B1CFF" />
            </linearGradient>
            <linearGradient id="paint2_linear_1_2451" x1="28.5784" y1="1.07882" x2="11.929" y2="21.5835" gradientUnits="userSpaceOnUse">
              <stop stop-color="#3656EF" />
              <stop offset="0.735521" stop-color="#9B1CFF" />
            </linearGradient>
            <linearGradient id="paint3_linear_1_2451" x1="44.4974" y1="1.07882" x2="27.5803" y2="19.8835" gradientUnits="userSpaceOnUse">
              <stop stop-color="#3656EF" />
              <stop offset="0.735521" stop-color="#9B1CFF" />
            </linearGradient>
          </defs>
        </svg>

      </div>
      <nav>
        <NavLink to="/" className="block p-2 hover:bg-gray-300" activeClassName="bg-gray-300 border-l-2 border-pink-400">Booking</NavLink>
        <NavLink to="/project" className="block p-2 hover:bg-gray-300" activeClassName="bg-gray-300">Project</NavLink>
        <NavLink to="/my-issue" className="block p-2 hover:bg-gray-300" activeClassName="bg-gray-300">My Issue</NavLink>
        <NavLink to="/my-team" className="block p-2 hover:bg-gray-300" activeClassName="bg-gray-300">My Team</NavLink>
        <NavLink to="/notification" className="block p-2 hover:bg-gray-300" activeClassName="bg-gray-300">Notification</NavLink>
        <NavLink to="/efficiency" className="block p-2 hover:bg-gray-300" activeClassName="bg-gray-300">Efficiency</NavLink>
        <NavLink to="/chart" className="block p-2 hover:bg-gray-300" activeClassName="bg-gray-300">Chart</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
