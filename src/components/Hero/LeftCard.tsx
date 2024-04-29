import React from 'react';
import { LineSvg } from '../Home/Headings/LineSvg';
import { motion } from 'framer-motion';
import {
  ArrowLongRightIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';

export const LeftCard = ({ item }: any) => {
  const words = item.homeSliderTitle.split(' ');
  const wordIndexToWrap = words.length - 1;
  words[wordIndexToWrap] = (
    <span className="font-cursive relative bg-gradient-to-r from-formalGreenLight to-formalGreen bg-clip-text text-transparent dark:to-secondaryLight">
      {words[wordIndexToWrap]}
      <LineSvg classname={'right-0 w-[80%]'} />
    </span>
  );

  const services_items =
    'text-base md:text-md lg:text-lg xl:text-xl xl:px-0 text-ebony-700 dark:text-slate-400/70 font-inter font-bold flex flex-1';

  return (
    <>
      <a
        href="#"
        className="relative z-[1] shadow-xl overflow-hidden inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-white rounded-full dark:bg-woodsmoke-800/40 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
        role="alert"
      >
        <p className="glow_animation relative text-xs bg-flamingo-500 rounded-full text-white px-4 py-1.5 mr-3">
          New
        </p>{' '}
        <p className="text-sm font-medium">Discover! ChatGPT Solution</p>
        <ChevronRightIcon className="ml-2 w-4 h-4" />
      </a>

      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="mb-6 text-center font-inter tracking-[-0.02em] !leading-[1.2] font-extrabold text-2xl lg:text-5xl md:text-5xl text-ebonyclay-900 dark:text-white lg:text-left "
      >
        {words.map((word: string, index: any) => (
          <span key={index}>
            {word}
            {index !== words.length - 1 && ' '}
          </span>
        ))}
      </motion.h1>

      <p className="mb-8 max-w-md text-center text-lg font-medium text-ebony-700 dark:text-[#9ca3af]  lg:text-left">
        {item.homeSliderDesc}
      </p>
      <div className="flex align-baseline">
        <a
          href={item.homeSliderBtn1Url}
          className="flex items-center
            px-3 py-2 !font-light sm:font-normal
            text-white bg-flamingo-500 border  border-transparent rounded-full transition-all
             hover:bg-flamingo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-flamingo-500"
        >
          {item.homeSliderBtn1Text}{' '}
          <ArrowLongRightIcon className="ml-2 w-4 h-4" />
        </a>
        <a
          href={item.homeSliderBtn2Url}
          className="flex items-center px-8 font-medium text-ebony- hover:text-flamingo-500 text-sm "
        >
          {item.homeSliderBtn2Text}
          <ArrowLongRightIcon className="ml-2 w-4 h-4" />
        </a>
      </div>

      {item.services1 && item.services2 && item.services3 && (
        <div className="flex items-center justify-center sm:justify-center md:justify-start border-dashed border-t-[1px] w-full border-slate-400/80 pt-8 mt-8">
          <div className="w-full flex gap-5 items-center sm:text-center md:text-left 2xl:text-left 2xl:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className={services_items}
            >
              {item.services1 && (
                <div className="hover:text-flamingo-400">
                  <span>{item.services1.split(' ')[0]}</span>
                  <br />
                  <span>{item.services1.split(' ').slice(1).join(' ')}</span>
                </div>
              )}
            </motion.div>
            <div className="border__seprator" />
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className={services_items}
            >
              {item.services2 && (
                <div className="hover:text-flamingo-400">
                  <span>{item.services2.split(' ')[0]}</span>
                  <br />
                  <span>{item.services2.split(' ').slice(1).join(' ')}</span>
                </div>
              )}
            </motion.div>
            <div className="border__seprator" />
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className={services_items}
            >
              {item.services3 && (
                <div className="hover:text-flamingo-400">
                  <span>{item.services3.split(' ')[0]}</span>
                  <br />
                  <span>{item.services3.split(' ').slice(1).join(' ')}</span>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};
