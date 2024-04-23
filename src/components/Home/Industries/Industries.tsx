import React, { useState } from 'react';
import {
  BeakerIcon,
  BoltIcon,
  BuildingStorefrontIcon,
  ChartPieIcon,
  DevicePhoneMobileIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/solid';

import CaseStudies from './CaseStudies';
import { Text } from '../Headings/Text';
import Image from 'next/image';

const Industries = ({ industries }: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const [catId, setCatId] = useState(12);
  const handleTabClick = (index: any, id: number) => {
    setActiveTab(index);
    setCatId(id);
  };

  return (
    <>
      <section className="relative mt-24 sm:mt-24 md:mt-32 xl:mt-40">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
              Experiance our Diversified Industrial Exposure
            </h2>
            <p className="mx-auto mt-6 text-gray-700 dark:text-slate-400/70 md:w-3/4 lg:w-3/5">
              A growing team doesnt need to mean growing pains. Privacy, and the
              right tool for every step of your journey - Jira Software friction
              - company size.
            </p>

            <div
              role="tablist"
              aria-label="tabs"
              className="relative mx-auto mt-12 flex h-12 w-full
               items-center gap-x-1 overflow-hidden rounded-full border
               border-gray-200 bg-gray-100 px-[3px] text-gray-600 dark:border-gray-700
               dark:border-opacity-60 dark:text-gray-300 dark:shadow-none sm:w-max"
            >
              {industries.HomePage.industriesSection.map(
                (item: any, index: any) => (
                  <div
                    key={index}
                    className={`tab ${
                      activeTab == index
                        ? 'active tab-indicator h-10 rounded-full shadow-md transition-[left] duration-500 bg-flamingo-500 text-white'
                        : 'text-slate-500'
                    } `}
                    role="tab"
                    tabIndex={index}
                  >
                    <button
                      aria-controls={`panel-${index}`}
                      onClick={() => {
                        handleTabClick(index, item.industryId);
                      }}
                      className="group w-full items-center tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight "
                      type="button"
                    >
                      <span className="m-auto block w-max text-sm font-medium tracking-wider font-display font-inter group-hover:text-accent">
                        {item.industryTitle}
                      </span>
                    </button>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="mt-20 ">
            {industries.HomePage.industriesSection.map(
              (item: any, index: any) =>
                activeTab === index ? (
                  <div
                    className="tab flex-1 gap-6 space-y-12 md:flex md:space-y-0"
                    key={index}
                  >
                    <div className="relative md:w-1/2">
                      <div
                        className="panel inset-0 flex flex-col justify-center transition duration-500 md:absolute visible opacity-1 scale-90"
                        id="panel-0"
                      >
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                            Make work flow across teams while connecting back to
                            company goals
                          </h3>
                          <p className="mt-8 text-gray-600 dark:text-gray-300">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Eum omnis voluptatem accusantium nemo
                            perspiciatis delectus atque autem! repellat expedita
                            consequatur! Officiis id consequatur atque
                            doloremque!
                          </p>
                          <div className="mt-12 space-y-6">
                            <div className="flex items-center gap-6">
                              <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                <Image
                                  width={500}
                                  height={500}
                                  quality={100}
                                  className="m-auto h-8 w-auto"
                                  src="https://cdn-icons-png.flaticon.com/512/4727/4727266.png"
                                  alt="icon illustration"
                                  loading="lazy"
                                />
                              </div>
                              <div className="w-[calc(100%-7.5rem)]">
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                                  Together as one
                                </h4>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">
                                  Accusantium nemo perspiciatis delectus atque
                                  autem!
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-6">
                              <div
                                className="flex h-20 w-20 rounded-3xl border border-gray-200
                               bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40"
                              >
                                <Image
                                  width={500}
                                  height={500}
                                  quality={100}
                                  className="m-auto h-8 w-auto"
                                  src="https://cdn-icons-png.flaticon.com/512/584/584796.png"
                                  alt="icon illustration"
                                  loading="lazy"
                                />
                              </div>
                              <div className="w-[calc(100%-7.5rem)]">
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                                  New ideas
                                </h4>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">
                                  Accusalectus atque autem accusantium nemo
                                  perspiciatis delectus atque autem!
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                      <div className="relative p-5 xl:p-0 md:p-0 bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
                        <div className="relative h-auto overflow-clip py-2 sm:h-[32rem] lg:p-2">
                          <div
                            data-target="panel-0"
                            className="transition duration-500 sm:px-5"
                          >
                            <CaseStudies catId={catId} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ''
                )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
