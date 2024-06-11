import React from 'react';
import { LineSvg } from '../Home/Headings/LineSvg';
import { motion } from 'framer-motion';
import {
  ArrowLongRightIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';

export const LeftCard = ({ item }: any) => {
  const words = item.homeSliderTitle.split(' ');
  const wordIndexToWrap = words.length - 1;
  words[wordIndexToWrap] = (
    <span className="overflow-hidden font-cursive relative bg-gradient-to-r from-formalGreenLight to-formalGreen bg-clip-text text-transparent dark:to-secondaryLight">
      {words[wordIndexToWrap]}
      <LineSvg classname={'bottom-0 right-0 w-full'} />
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
        <div className="p-1 rounded-3xl bg-gray-950/5 border dark:border-white/10 dark:bg-white/5">
          <Link
            href={item.homeSliderBtn1Url}
            className="*:select-none dark:shadow-flamingo-500/10 *:disabled:opacity-20 disabled:*:text-gray-300 disabled:dark:*:text-gray-700 dark:*:disabled:!text-white group relative z-[1] flex w-full h-11 items-center justify-center gap-1.5 rounded-3xl border border-flamingo-600 bg-flamingo-500 px-4 text-base text-white shadow-md shadow-flamingo-200 before:absolute before:inset-0 before:rounded-3xl before:border before:border-flamingo-500 before:bg-gradient-to-b before:from-flamingo-600 hover:bg-flamingo-600 active:bg-flamingo-700 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-950/40 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:bg-flamingo-600 dark:before:border-0 dark:before:border-t dark:before:border-flamingo-400 dark:before:shadow-inner dark:before:shadow-white/10 dark:hover:bg-flamingo-700 dark:active:bg-flamingo-800 dark:active:before:from-flamingo-700 dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none [&>*:not(.sr-only)]:relative"
          >
            <span className="flex items-center text-nowrap">
              {item.homeSliderBtn1Text}{' '}
              <ArrowLongRightIcon className="ml-2 w-4 h-4" />
            </span>
          </Link>
        </div>

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
