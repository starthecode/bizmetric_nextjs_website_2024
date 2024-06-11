import { Text } from '@/components/Home/Headings/Text';
import Image from 'next/image';
import React from 'react';

export const WhySection = ({
  WyItemsImg,
  WyItemsSmallTitle,
  WyItemsMainTitle,
  WyItemsSpecialTitle,
  WyItemsDesc,
  WyItemsList,
}: any) => {
  return (
    <div className="container mt-40">
      {/* <div className="border-[0.6px] border-woodsmoke-600/50 mb-16"></div> */}
      <div>
        <Text
          small={WyItemsSmallTitle}
          main={WyItemsMainTitle}
          specialTitle={WyItemsSpecialTitle}
          classes={'font-cursive'}
          desc={WyItemsDesc}
        />
        <div className="grid grid-cols-2 mt-10 gap-10">
          <div className="div">
            <div className="grid items-center mb-5 justify-start">
              <ul className="mb-5">
                {WyItemsList.map((item: any, index: any) => (
                  <li
                    key={index}
                    className="flex align-middle items-center gap-4 mb-3"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="fill-junglegreen-500"
                      height="50"
                      width="50"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"></path>
                    </svg>{' '}
                    {item.listText}
                  </li>
                ))}
              </ul>
              <div className="w-fit p-1 rounded-3xl bg-gray-950/5 border dark:border-white/10 dark:bg-white/5">
                <button className="*:select-none dark:shadow-flamingo-500/10 *:disabled:opacity-20 disabled:*:text-gray-300 disabled:dark:*:text-gray-700 dark:*:disabled:!text-white group relative z-[1] flex w-full h-11 items-center justify-center gap-1.5 rounded-3xl border border-flamingo-600 bg-flamingo-500 px-4 text-base text-white shadow-md shadow-flamingo-200 before:absolute before:inset-0 before:rounded-3xl before:border before:border-flamingo-500 before:bg-gradient-to-b before:from-flamingo-600 hover:bg-flamingo-600 active:bg-flamingo-700 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-950/40 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:bg-flamingo-600 dark:before:border-0 dark:before:border-t dark:before:border-flamingo-400 dark:before:shadow-inner dark:before:shadow-white/10 dark:hover:bg-flamingo-700 dark:active:bg-flamingo-800 dark:active:before:from-flamingo-700 dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none [&amp;>*:not(.sr-only)]:relative">
                  <span className="flex items-center text-nowrap">
                    Talk to our expert
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="ml-2 w-4 h-4"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="relative w-full h-128 mb-20 lg:mb-0 animate__animated animate__fadeIn">
            <div className="absolute top-0 right-0 h-full w-full mt-6 -mr-6 bg-junglegreen-300/60 rounded-xl"></div>
            <Image
              alt="single solution image"
              loading="lazy"
              width="400"
              height="400"
              decoding="async"
              data-nimg="1"
              className="absolute top-0 right-0 h-full w-full rounded-xl object-cover object-top"
              src={WyItemsImg?.mediaItemUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
