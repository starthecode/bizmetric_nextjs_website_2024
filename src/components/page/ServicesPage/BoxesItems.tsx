import React from 'react';

export const BoxesItems = ({ BoxItem }: any) => {
  return (
    <div className="mt-12 grid sm:grid-cols-3 lg:grid-cols-3 gap-3">
      {BoxItem &&
        BoxItem?.map((item: any, index: any) => (
          <div
            key={index}
            className="relative group overflow-hidden p-[2rem] rounded-[1.5rem] bg-white border dark:border-woodsmoke-700 dark:bg-woodsmoke-950"
          >
            <div
              aria-hidden="true"
              className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-success-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
            ></div>
            <div className="relative">
              <div className="flex gap-5 items-center">
                <div className="p-4 w-fit border border-success-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[1rem] dark:bg-gray-900 dark:border-white/15 before:rounded-[1rem] before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.98em"
                    height="1em"
                    viewBox="0 0 256 263"
                  >
                    <defs>
                      <linearGradient
                        id="logosSupabaseIcon0"
                        x1="20.862%"
                        x2="63.426%"
                        y1="20.687%"
                        y2="44.071%"
                      >
                        <stop offset="0%" stopColor="#249361"></stop>
                        <stop offset="100%" stopColor="#3ecf8e"></stop>
                      </linearGradient>
                      <linearGradient
                        id="logosSupabaseIcon1"
                        x1="1.991%"
                        x2="21.403%"
                        y1="-13.158%"
                        y2="34.708%"
                      >
                        <stop offset="0%"></stop>
                        <stop offset="100%" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#logosSupabaseIcon0)"
                      d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                    ></path>
                    <path
                      fill="url(#logosSupabaseIcon1)"
                      fillOpacity="0.2"
                      d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                    ></path>
                    <path
                      fill="#3ecf8e"
                      d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"
                    ></path>
                  </svg>
                </div>
                <span className="font-bold text-lg">
                  {item?.boxesItemsTitle}
                </span>
              </div>
              <div className="mt-6 pb-6 rounded-b-[1rem]">
                <p className="text-gray-700 dark:text-gray-300">
                  {item?.boxesItemsDesc}
                </p>
              </div>
              <div className="flex gap-3 -mb-[1rem] py-4 border-dashed border-t dark:border-woodsmoke-600"></div>
            </div>
          </div>
        ))}
    </div>
  );
};
