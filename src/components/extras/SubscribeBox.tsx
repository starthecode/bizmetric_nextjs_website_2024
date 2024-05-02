import React from 'react';

const SubscribeBox = () => {
  return (
    <div>
      <div className="border-dashed border-[1px] border-flamingo-400/40 dark:border-junglegreen-400/40 rounded-md p-5 w-full bg-white dark:bg-woodsmoke-950 relative z-2">
        <h1 className="mb-3">
          Get the latest on product development from Bizmetric
        </h1>
        <p className="text-sm/relaxed tracking-wider text-gray-500">
          We send a monthly newsletter containing latest updates in bizmetric
        </p>
        <div className="flex flex-col md:flex-row lg:flex-col gap-2 mt-7">
          <input
            type="email"
            className="w-full md:w-1/2 lg:w-full text-sm border-gray-300 focus:border-gray-200 focus:ring-0 rounded-md bg-white py-3"
            id="Email"
            placeholder="Enter Your Email"
          />
          <button className="w-full md:w-1/2 lg:w-full bg-primary text-white rounded-md text-sm font-semibold flex-none shadow shadow-primary/50 hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/20 px-8 py-3">
            Subscribe
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2">*No spam ever.</p>
      </div>
    </div>
  );
};

export default SubscribeBox;
