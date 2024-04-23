import React from 'react';
import { Article } from './Article';
import { Text } from '../Headings/Text';
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  return (
    <>
      {/* <section className="pb-36">
        <div className="container">
          <Text small={'Our Blog'} main={'Tech Talks & News'} />
          <div className="flex grid-cols-1 gap-[1.875rem] sm:grid-cols-2 md:grid-cols-3">
            <Article />
          </div>
        </div>
      </section> */}

      <div className="relative mt-24 sm:mt-24 md:mt-32 xl:mt-40">
        <Text small={'Our Blog'} main={'Tech Talks & News'} />
        <div className="container block xl:flex md:flex gap-[30px] md:grid-cols-2 gap-y-[60px] lg:grid-cols-2">
          <div
            className="relative mx-0 xl:mx-5 w-full lg:ml-2 lg:mr-[30px] xl:w-[900px]"
            data-slick-index="0"
            aria-hidden="false"
          >
            <div className="rounded-2xl p-0 flex items-center bg-white z-10 relative flex-col lg:gap-[50px] lg:flex-row">
              <Link
                className="block self-stretch flex-1 aspect-[580/421]"
                href="#"
              >
                <Image
                  width="300"
                  height="300"
                  quality="100"
                  className="h-full w-full object-cover rounded-2xl lg:rounded-tr-none lg:rounded-br-2xl"
                  src="/temp/thumbnail-4.png"
                  alt="Bizmetric"
                />
              </Link>
              <div className="flex-1">
                <div className="my-[60px] mr-[50px]">
                  <div className="flex items-center mb-3">
                    <div className="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"></div>
                    <span className="uppercase text-gray-500">
                      Marketing Event
                    </span>
                  </div>
                  <h2 className="font-bold font-inter text-lg dark:text-ebonyclay-900 leading-[30px] md:text-heading-3 mb-5">
                    {' '}
                    How To Blow Through Capital At An Incredible Rate
                  </h2>
                  <p className="text-text text-gray-500 mb-[44px]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    interdum ullamcorper sed pharetra senectus donec
                    nunc.Consequat semper.
                  </p>
                  <div className="flex items-center gap-[15px]">
                    <Image
                      width="300"
                      height="300"
                      quality="100"
                      className="h-full w-full object-cover rounded-full max-w-[55px]"
                      src="/temp/thumbnail-4.png"
                      alt="avatar"
                    />
                    <div>
                      <p className="line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6">
                        Jenny Wilson
                      </p>
                      <p className="text-sm font-bold">August 25, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full z-0 -translate-y-[95%] translate-x-[2%] pt-[45px]">
              <div className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-6 pb-0 border-b border-gray-200 justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-bold font-chivo text-[14px] md:text-heading-6 line-clamp-2 mb-[18px]">
                  Design Studios That Everyone Should Know
                </p>
                <div className="flex items-center gap-[11px]">
                  <div>
                    <p className="font-bold text-sm">August 25, 2022</p>
                  </div>
                </div>
              </div>
              <div className="relative flex-1 max-w-[133px]">
                <div className="pr-[13px] aspect-square">
                  <Image
                    width="300"
                    height="300"
                    quality="100"
                    className="w-[150px] h-[120px] object-cover rounded-2xl z-10 relative"
                    src="/temp/thumbnail-1.png"
                    alt="Bizmetric"
                  />
                </div>
                <div className="absolute w-full h-full left-0 z-0 top-0 translate-y-[13px] pl-[13px]">
                  <div className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-10 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6 pb-0 border-b border-gray-200 justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-bold font-chivo text-[14px] md:text-heading-6 line-clamp-2 mb-[18px]">
                  Design Studios That Everyone Should Know
                </p>
                <div className="flex items-center gap-[11px]">
                  <div>
                    <p className="font-bold text-sm">August 25, 2022</p>
                  </div>
                </div>
              </div>
              <div className="relative flex-1 max-w-[133px]">
                <div className="pr-[13px] aspect-square">
                  <Image
                    width="300"
                    height="300"
                    quality="100"
                    className="w-[150px] h-[120px] object-cover rounded-2xl z-10 relative"
                    src="/temp/thumbnail-2.png"
                    alt="Bizmetric"
                  />
                </div>
                <div className="absolute w-full h-full left-0 z-0 top-0 translate-y-[13px] pl-[13px]">
                  <div className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-3 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6 pb-0 border-b border-gray-200 justify-between cursor-pointer">
              <div className="flex-1">
                <p className="font-bold font-chivo text-[14px] md:text-heading-6 line-clamp-2 mb-[18px]">
                  Design Studios That Everyone Should Know
                </p>
                <div className="flex items-center gap-[11px]">
                  <div>
                    <p className="font-bold text-sm">August 25, 2022</p>
                  </div>
                </div>
              </div>
              <div className="relative flex-1 max-w-[133px]">
                <div className="pr-[13px] aspect-square">
                  <Image
                    width="300"
                    height="300"
                    quality="100"
                    className="w-[150px] h-[120px] object-cover rounded-2xl z-10 relative"
                    src="/temp/thumbnail-3.png"
                    alt="Bizmetric"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
