import React, { useState } from 'react';
import PollQuestion from './PollQuestion';

export const Poll = () => {
  const [activePoll, setActivePoll] = useState(false);

  const handlePoll = () => {
    setActivePoll((prevActive) => !prevActive);
  };

  return (
    <div
      className={`fixed right-0 bottom-0 h-auto z-10 flex flex-col transition-transform duration-300 transform -rotate-90 ${
        activePoll ? '-translate-x-[15px]' : 'translate-x-[260px]'
      }`}
    >
      <div
        onClick={handlePoll}
        className={`flex rounded-tl-lg rounded-tr-lg justify-center text-center h-fit cursor-pointer shadow-lg shadow-junglegreen-200 border-b border-slate-200/20 bg-white dark:bg-woodsmoke-900/20 px-1 py-2`}
      >
        <p className="font-bold uppercase ">Poll</p>
      </div>
      <div className={`w-[280px] shadow-lg flex flex-col`}>
        {' '}
        <PollQuestion />
      </div>
    </div>
  );
};
