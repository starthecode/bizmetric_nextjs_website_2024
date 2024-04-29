import {
  BeakerIcon,
  BuildingStorefrontIcon,
  ChartPieIcon,
} from '@heroicons/react/24/solid';
import React from 'react';
import { Text } from '../Headings/Text';
import { LineSvg } from '../Headings/LineSvg';
import Link from 'next/link';

const Services = ({ services }: any) => {
  return (
    <>
      <section className="relative mt-24 sm:mt-24 md:mt-32 xl:mt-40">
        <div className="container mx-auto">
          <Text
            small={'Our Services'}
            main={'Simplifying the Digital Adoption Journey'}
          />

          {/* Cards */}
          <div className="grid grid-cols-1 gap-8 lg:gap-8 sm:grid sm:grid-cols-1 md:gap-2 md:flex md:grid-cols-2 lg:grid-cols-3 lg:flex justify-center">
            {services.edges &&
              services.edges?.map((item: any, index: any) => (
                <div
                  key={index}
                  className="group relative flex w-[250px] mx-auto md:mx-0 lg:mx-0 justify-center h-[300px] rounded-2xl border-dashed border-[1px] border-flamingo-400/40 dark:border-junglegreen-400/40 hover:shadow-md bg-white dark:bg-woodsmoke-950/95 hover:shadow-zinc-900/5 dark:hover:shadow-black/5 transition-shadow"
                >
                  <div className="pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
                      <svg
                        aria-hidden="true"
                        className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
                      >
                        <defs>
                          <pattern
                            id=":R56hd6:"
                            width="72"
                            height="56"
                            patternUnits="userSpaceOnUse"
                            x="50%"
                            y="16"
                          >
                            <path d="M.5 56V.5H72" fill="none"></path>
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          strokeWidth="0"
                          fill="url(#:R56hd6:)"
                        ></rect>
                        <svg x="50%" y="16" className="overflow-visible">
                          <rect
                            strokeWidth="0"
                            width="73"
                            height="57"
                            x="0"
                            y="56"
                          ></rect>
                          <rect
                            strokeWidth="0"
                            width="73"
                            height="57"
                            x="72"
                            y="168"
                          ></rect>
                        </svg>
                      </svg>
                    </div>
                    <div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
                      style={{
                        WebkitMaskImage:
                          'radial-gradient(180px at 145.5px 108px, white, transparent)',
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
                      style={{
                        WebkitMaskImage:
                          'radial-gradient(180px at 145.5px 108px, white, transparent',
                      }}
                    >
                      <svg
                        aria-hidden="true"
                        className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
                      >
                        <defs>
                          <pattern
                            id=":R1d6hd6:"
                            width="72"
                            height="56"
                            patternUnits="userSpaceOnUse"
                            x="50%"
                            y="16"
                          >
                            <path d="M.5 56V.5H72" fill="none"></path>
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          strokeWidth="0"
                          fill="url(#:R1d6hd6:)"
                        ></rect>
                        <svg x="50%" y="16" className="overflow-visible">
                          <rect
                            strokeWidth="0"
                            width="73"
                            height="57"
                            x="0"
                            y="56"
                          ></rect>
                          <rect
                            strokeWidth="0"
                            width="73"
                            height="57"
                            x="72"
                            y="168"
                          ></rect>
                        </svg>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"></div>
                  <div className="relative top-[0%] px-4 pb-4 pt-11 transition-all duration-800 ease-out group-hover:absolute group-hover:top-[-10%]">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-flamingo-300/10 dark:group-hover:ring-flamingo-400">
                      {item.node.title == 'Artificial Intelligence' ? (
                        <BeakerIcon className="services-icon" />
                      ) : item.node.title == 'Data Analytics' ? (
                        <ChartPieIcon className="services-icon" />
                      ) : (
                        <BuildingStorefrontIcon className="services-icon" />
                      )}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold leading-7 text-zinc-900 dark:text-white">
                      <Link href="/#">
                        <span className="absolute inset-0 rounded-2xl"></span>
                        {item.node.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-slate-400/70">
                      {item.node.content}
                    </p>
                    <p className="mt-2">
                      <Link
                        className="inline-flex gap-0.5 justify-center overflow-hidden
                        text-sm font-medium transition text-[#00a484] group-hover:text-slate-400"
                        href="/#"
                      >
                        Read more
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          aria-hidden="true"
                          className="mt-0.5 h-5 w-5 relative top-px -mr-1"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
                          ></path>
                        </svg>
                      </Link>
                    </p>
                    <button
                      className="z-0 relative hidden group-hover:z-10 group-hover:flex  mt-2 px-3 py-1 text-sm font-bold leading-6
                     text-white bg-flamingo-500 border border-transparent rounded-full"
                    >
                      Check Case Studies
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
