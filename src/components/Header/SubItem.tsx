import {
  ChevronRightIcon,
  IdentificationIcon,
} from '@heroicons/react/24/solid';
import { BiSolidRightArrow } from 'react-icons/bi';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const SubItem = ({ menuAcfFields, childrenItem }: any) => {
  const SubItemVariants = {
    hidden: {
      x: -40,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const [isOpen, setIsOpen] = useState<string | null>(
    'Artificial Intelligence'
  );

  const handleMenuHover = (title: string) => {
    setIsOpen(title);
  };

  return (
    <>
      {menuAcfFields?.showServicesMegaMenu ? (
        <motion.div
          className="cursor-pointer w-[750px] h-full"
          layout
          variants={SubItemVariants}
        >
          {/* Tabs */}

          <nav className="w-[16rem] bg-[#eff3f9] dark:bg-woodsmoke-900/20 shadow-xl">
            <ul className="flex flex-col">
              {childrenItem?.map((item: any, index: number) => (
                <li
                  className={`${
                    isOpen === item.title
                      ? 'bg-white dark:bg-woodsmoke-950/95'
                      : ''
                  } group menu__items flex flex-col gap-2 text-left h-full px-5 py-5 transition-all duration-300 ease-in-out`}
                  key={index}
                  onMouseEnter={() => handleMenuHover(item.title)}
                  // onMouseLeave={() => setIsOpen(null)}
                >
                  <Link href={item.path}>
                    {isOpen === item.title ? (
                      <span className="absolute top-[45px] -right-[12px] shadow-xl">
                        <BiSolidRightArrow className="h-4 w-4 fill-white" />
                      </span>
                    ) : (
                      ''
                    )}

                    <span className="flex items-center gap-2 text-[1rem] text-ebonyclay-900 font-bold dark:text-white dark:hover:text-flamingo-400 group-hover:text-flamingo-400">
                      {item.title}
                      {/* {item.children.length > 0 && (
                      <ChevronRightIcon className="h-4 w-4 dark:fill-black transition-all group:rotate-0 group:hover:rotate-180" />
                    )} */}
                    </span>
                    <span className="text-xs text-slate-400">
                      {item.description}
                    </span>
                  </Link>
                  {item.children.length > 0 && (
                    <ul
                      style={{ top: item?.menuAcfFields.menuClasses | 0 }}
                      className={`${
                        isOpen === item.title ? 'visible' : 'hidden'
                      } -right-[510px] top-0 grid grid-cols-2 z-10 w-fit gap-x-4 transition-all will-change-transform lg:absolute lg:py-4 lg:px-2 relative`}
                    >
                      {item.children.map((child: any) => (
                        <li key={child.key} className="w-[240px]">
                          <Link
                            className="flex items-center rounded-xl px-5 py-5 justify-between"
                            href={child.path}
                          >
                            <span className="flex gap-2 items-center text-ebony-900 dark:text-white text-sm dark:hover:text-flamingo-400 hover:text-flamingo-400">
                              {child.menuAcfFields?.menuIcon?.mediaItemUrl ? (
                                <span className="bg-junglegreen-200/20 p-2">
                                  <Image
                                    width={25}
                                    height={25}
                                    src={
                                      child.menuAcfFields?.menuIcon
                                        ?.mediaItemUrl
                                    }
                                    alt="menu icon"
                                  />
                                </span>
                              ) : (
                                ''
                              )}

                              {child.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      ) : menuAcfFields?.showMegaMenu ? (
        <motion.div
          className="my-2 cursor-pointer min-w-max h-fit overflow-auto"
          layout
          variants={SubItemVariants}
        >
          <div className="grid grid-cols-2 px-5 py-5 h-[350px]">
            {childrenItem?.map((item: any, index: number) => (
              <Link key={index} className="flex m-3" href={item.path}>
                <span className="group relative flex gap-3 rounded-md items-start w-[280px] hover:bg-flamingo-200/40 dark:hover:bg-junglegreen-200/20 px-3 py-3 font-bold text-ebonyclay-900 text-md hover:text-flamingo-400">
                  {item.menuAcfFields?.menuIcon?.mediaItemUrl && (
                    <Image
                      width={20}
                      height={20}
                      src={item.menuAcfFields?.menuIcon?.mediaItemUrl}
                      alt="menu icon"
                    />
                  )}
                  <span className="flex flex-col">
                    <span className="flex">
                      <p className="text-ebony-900 dark:text-white">
                        {item.title}
                      </p>
                      {item.menuAcfFields?.showMenuLabel ? (
                        <label className=" bg-junglegreen-100/80 text-junglegreen-600 flex items-center text-xs font-medium mr-2 px-2.5 py-1 rounded-full h-5 ml-4">
                          <span>{item.menuAcfFields?.menuLabelText}</span>
                        </label>
                      ) : (
                        ''
                      )}
                    </span>
                    <span className="font-medium text-slate-500 dark:text-slate-400 text-sm">
                      {item.description}
                    </span>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="my-2 cursor-pointer min-w-max h-fit overflow-auto w-fit"
          layout
          variants={SubItemVariants}
        >
          <div className="grid grid-cols-2 px-5 py-5 h-fit">
            {childrenItem?.map((item: any, index: number) => (
              <Link key={index} className="flex m-3" href={item.path}>
                <span className="group relative flex gap-3 rounded-md items-start w-[150px] hover:bg-flamingo-200/40 dark:hover:bg-junglegreen-200/20 px-3 py-3 font-bold text-ebonyclay-900 text-md hover:text-flamingo-400">
                  {item.menuAcfFields?.menuIcon?.mediaItemUrl && (
                    <Image
                      width={20}
                      height={20}
                      src={item.menuAcfFields?.menuIcon?.mediaItemUrl}
                      alt="menu icon"
                    />
                  )}
                  <span className="flex flex-col">
                    <span className="flex">
                      <p className="text-ebony-900 dark:text-white">
                        {item.title}
                      </p>
                      {item.menuAcfFields?.showMenuLabel ? (
                        <label className=" bg-junglegreen-100/80 text-junglegreen-600 flex items-center text-xs font-medium mr-2 px-2.5 py-1 rounded-full h-5 ml-4">
                          <span>{item.menuAcfFields?.menuLabelText}</span>
                        </label>
                      ) : (
                        ''
                      )}
                    </span>
                    <span className="font-medium text-slate-500 dark:text-slate-400 text-sm">
                      {item.description}
                    </span>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SubItem;
