import Link from 'next/link';
import {
  ChevronDownIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Search } from '../Search/Search';

import MenuItem from './MenuItem';
import SubItem from './SubItem';

import { motion } from 'framer-motion';

interface NavbarProps {
  menuList: any[]; // Adjust the data type as needed
  active: any; // Adjust the data type as needed
  width: number; // Adjust the data type as needed
}

const Navbar: React.FC<NavbarProps> = ({ menuList, active, width }) => {
  const [MDropdown, setMDropdown] = useState<boolean>(false);

  const dropdownHandler = (params: any) => {
    setMDropdown((prevDropdown) => (prevDropdown !== params ? params : false));
  };

  return (
    <>
      <div
        className={`${
          width < 1024 && active
            ? 'block absolute inset-0 mt-[100px] mx-[20px]'
            : 'hidden'
        } lg:relative lg:flex`}
      >
        {/* <Search active={active} width={width} /> */}
        {/* Mobile Menu */}
        <div>
          <nav className="w-full block lg:hidden">
            <ul className="flex flex-col lg:flex-row mt-10">
              {menuList?.map((item) => (
                <li className="js-nav-dropdown group relative" key={item.key}>
                  <button
                    onClick={() => dropdownHandler(item.key)}
                    className="hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 dark:text-white lg:px-5 w-full"
                  >
                    <span className="text-base sm:text-sm md:text-md 2xl:text-lg dark:text-accent">
                      {item.title}
                    </span>
                    {item?.children.length > 0 && (
                      <ChevronDownIcon className="lg:hidden h-4 w-4 dark:fill-white" />
                    )}
                  </button>
                  {item?.children.length > 0 && (
                    <ul
                      className={` left-0 top-[85%] z-10 min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative ${
                        MDropdown == item.key ? 'block' : 'hidden'
                      }`}
                    >
                      {item?.children.map((child: any) => (
                        <li key={child.key}>
                          <Link
                            className="hover:text-accent focus:text-accent flex items-center rounded-xl px-5 py-2 transition-colors justify-between"
                            href="/"
                          >
                            <span className="text-sm dark:text-white">
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
        </div>
      </div>

      <div
        className="hidden invisible z-10
  items-center opacity-0 lg:visible lg:relative lg:flex lg:bg-transparent lg:opacity-100"
      >
        <motion.div className="flex justify-center">
          {menuList?.map((item, index) => (
            <MenuItem key={index} item={item}>
              <SubItem
                key={index}
                menuAcfFields={item.menuAcfFields}
                childrenItem={item.children}
                text="A SaaS for e-company"
              />
              <div className="relative py-5 px-5 bottom-0 w-full shadow-md border-t-slate-50 bg-white dark:bg-woodsmoke-900/20">
                <span className="text-slate-500 dark:text-white text-xs px-4 flex gap-2 items-center">
                  <QuestionMarkCircleIcon className="w-4 h-4" />
                  <b>Need Help?</b>{' '}
                  <Link
                    className="underline hover:text-flamingo-400"
                    href={'/contact'}
                  >
                    Contact our expert
                  </Link>
                </span>
              </div>
            </MenuItem>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
