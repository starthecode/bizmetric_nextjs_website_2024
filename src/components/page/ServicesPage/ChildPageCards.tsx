import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const ChildPageCards = ({ childData }: any) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="relative z-10 grid gap-3 grid-cols-2 mt-40 justify-center items-center w-full">
        {childData &&
          childData?.nodes.map((child: any, index: number) => (
            <div
              key={child.id}
              className={`col-span-full ${
                index === 0 || index === 2 ? 'lg:col-span-1' : 'lg:col-span-1'
              } overflow-hidden relative border border-woodsmoke-600/50 dark:bg-woodsmoke-950/95 shadow-lg bg-white rounded-xl p-3 flex flex-col justify-center items-center`}
            >
              <div
                className="relative group overflow-hidden grid p-10 bg-cover bg-center h-[260px] rounded-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-junglegreen-600/80 before:to-flamingo-500/20 dark:before:bg-gradient-to-r dark:before:from-woodsmoke-950 dark:before:to-woodsmoke-950/60 "
                style={{
                  backgroundImage: `url(${child.featuredImage?.node?.sourceUrl})`,
                }}
              >
                <div
                  aria-hidden="true"
                  className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-success-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
                ></div>
                <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-medium transition group-hover:text-secondary-950 text-white">
                      {child.title}
                    </h2>
                    <p className="dark:text-gray-300 text-slate-200">
                      {child.excerpt}
                    </p>
                  </div>
                  <div className="w-fit p-1 rounded-3xl bg-gray-950/5 border dark:border-white/10 dark:bg-white/5">
                    <Link
                      href={child?.uri}
                      className="t*:select-none dark:shadow-flamingo-500/10
                   *:disabled:opacity-20 disabled:*:text-gray-300 disabled:dark:*:text-gray-700 dark:*:disabled:!text-white
                   group relative z-[1] flex w-full h-11 items-center justify-center gap-1.5
                   rounded-3xl border border-flamingo-600 bg-flamingo-500 px-2 text-xs
                    text-white shadow-md shadow-flamingo-200 before:absolute
                    before:inset-0 before:rounded-3xl before:border
                     before:border-flamingo-500 before:bg-gradient-to-b
                      before:from-flamingo-600 hover:bg-flamingo-600
                       active:bg-flamingo-700 disabled:border-gray-200
                        disabled:bg-gray-100 disabled:text-gray-950/40
                         disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:bg-flamingo-600 dark:before:border-0 dark:before:border-t dark:before:border-flamingo-400 dark:before:shadow-inner dark:before:shadow-white/10 dark:hover:bg-flamingo-700 dark:active:bg-flamingo-800 dark:active:before:from-flamingo-700 dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none [&amp;>*:not(.sr-only)]:relative"
                    >
                      <span className="flex items-center text-nowrap">
                        Check More
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
