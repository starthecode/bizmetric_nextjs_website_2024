import { Text } from '@/components/Home/Headings/Text';
import { DotAnimationSVG, IdentifyingSVG } from '@/components/svg';
import Image from 'next/image';
import React from 'react';

export const ApproachSection = ({
  ApproachSmallTitle,
  ApproachMainTitle,
  ApproachList,
}: any) => {
  return (
    <div className="relative z-999 overflow-hidden rounded-[30px] bg-gradient-to-t from-white to-transparent dark:bg-gradient-to-t dark:from-woodsmoke-950 dark:to-woodsmoke-950/98 pt-25 px-4 pb-20 sm:px-20 lg:px-27.5 mt-40">
      <div className="flex justify-center text-center">
        <Text
          small={ApproachSmallTitle}
          main={ApproachMainTitle}
          classes={'font-inter'}
        />
        <h1 className="mb-10 text-left font-inter tracking-[-0.02em] !leading-[1.2] font-extrabold text-2xl lg:text-4xl md:text-4xl text-ebonyclay-900 dark:text-white"></h1>
      </div>

      <DotAnimationSVG />
      <div className="relative w-full h-full mt-20">
        <div className="absolute flex justify-center items-center top-0 left-0 rounded-full before:bg-ebony-600/20 after:bg-ebony-600/30 circle__pulse">
          <svg
            className="w-[4rem] h-[4rem]"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient x1="0%" y1="32.443%" x2="104.18%" y2="50%" id="a">
                <stop stopColor="#FFF" stopOpacity=".299" offset="0%"></stop>
                <stop stopColor="#7587E4" stopOpacity="0" offset="100%"></stop>
              </linearGradient>
              <linearGradient x1="18.591%" y1="0%" x2="100%" y2="100%" id="b">
                <stop stopColor="#818CF8" offset="0%"></stop>
                <stop stopColor="#C7D2FE" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
              <path fill="#3730A3" d="M16 18.5V32l15.999-9.25V9.25z"></path>
              <path fill="#4F46E5" d="m0 23 16 9V18.501L0 9.251z"></path>
              <path
                fillOpacity=".64"
                fill="url(#a)"
                d="M16 13 0 23l16 9 16-9z"
              ></path>
              <path fill="url(#b)" d="M16 0 0 9.25l16 9.25 15.999-9.25z"></path>
            </g>
          </svg>
        </div>

        <div className="block mt-28">
          <div className="relative overflow-hidden w-[1px] h-[90px] m-auto">
            <div
              className="absolute w-full h-[40%] bg-gray-500 top-[30%]"
              style={{ boxShadow: '0px 0px 30px 20px grey' }}
            ></div>
          </div>
          <div className="border-[0.6px] border-woodsmoke-600/50" />
          <div className="grid grid-cols-5">
            {ApproachList.map((item: any, index: any) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <div className="relative overflow-hidden w-[1px] h-[60px] m-auto">
                  <div
                    className="absolute w-full h-[40%] bg-gray-500 top-[30%]"
                    style={{ boxShadow: '0px 0px 30px 20px grey' }}
                  ></div>
                </div>
                <div className="z-10 border border-gray-600/30 dark:bg-woodsmoke-950/95 w-[180px] h-[200px] shadow-lg bg-white rounded-xl p-3 flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center items-center p-5">
                    <span className="flex justify-center items-center border border-gray-700/30 bg-white dark:bg-gradient-to-b dark:from-[#0f172a] dark:to-[#1e293b] w-[3rem] h-[3rem] rounded-full mb-3">
                      <Image
                        width={30}
                        height={30}
                        src={item.icon.mediaItemUrl}
                        alt="approach icon"
                      />
                    </span>
                    <h1 className="text-center text-sm uppercase font-normal">
                      {item.title}
                    </h1>
                    <p className="text-xs text-center mt-2 text-slate-400/90">
                      {item.listText}
                    </p>
                  </div>
                </div>
              </div>
            ))}{' '}
          </div>
        </div>
      </div>
      <div className="absolute [mask-image:linear-gradient(to_bottom,transparent,white)] h-96 inset-x-0 opacity-60 rotate-0 text-gray-500/20 bottom-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute h-full inset-0 w-full"
        >
          <defs>
            <pattern
              height="32"
              id="grid-pattern"
              patternTransform="translate(0 -1)"
              patternUnits="userSpaceOnUse"
              width="32"
              x="50%"
              y="100%"
            >
              <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
        </svg>
      </div>
    </div>
  );
};
