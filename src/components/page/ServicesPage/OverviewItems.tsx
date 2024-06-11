import React from 'react';

export const OverviewItems = ({ OvItems, title1, title2 }: any) => {
  return (
    <div className="mt-24">
      <h2 className="text-sm text-center font-inter font-semibold tracking-wide uppercase">
        <span className="border border-woodsmoke-300/10 bg-gradient-to-b from-flamingo-500/20 to-transparent dark:bg-gradient-to-b dark:from-woodsmoke-950 dark:to-transparent transition-shadow relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-5 rounded-full">
          <span className="bg-flamingo-500 dark:bg-gradient-to-r dark:from-flamingo-500 dark:to-flamingo-200 bg-clip-text text-transparent">
            {title2}
          </span>
        </span>
      </h2>
      <h1 className="mb-4 text-center font-inter tracking-[-0.02em] !leading-[1.2] font-extrabold text-2xl lg:text-4xl md:text-4xl text-ebonyclay-900 dark:text-white">
        {title1}{' '}
      </h1>

      <div className="grid grid-cols-3 mt-10">
        {OvItems &&
          OvItems?.map((item: any, index: any) => (
            <div key={index} className="div">
              <span className="grid">
                <span className="flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="fill-junglegreen-500"
                    height="40"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"></path>
                  </svg>{' '}
                  {item.overviewSectionTitle}
                </span>
                <span className="text-sm text-slate-400 ml-10">
                  {item.overviewSectionDesc}
                </span>
              </span>
            </div>
          ))}
      </div>
      <div className="border-[0.6px] border-woodsmoke-600/50 mt-24"></div>
    </div>
  );
};
