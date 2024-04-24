import logo from '@/assets/imgs/logo.png';
import Link from 'next/link';
import {
  XMarkIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  PhoneXMarkIcon,
} from '@heroicons/react/24/solid';
import { flatListToHierarchical } from '@/utils/flatListToHierarchical';
import Image from 'next/image';
import { Toggle } from './Toggle';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useTheme } from 'next-themes';
import { Search } from '../Search/Search';

export const Header = ({ menus }: any) => {
  const menuList = flatListToHierarchical(menus?.nodes);
  const [active, setActive] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const menuHandler = () => {
    setActive(!active);
  };

  const [width, setWidth] = useState(0);
  const [scroll, setScroll] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  const handleSearch = () => {
    showSearch ? setShowSearch(false) : setShowSearch(true);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scroll) {
        setScroll(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scroll]);

  const headerClasses = `transition-colors ${
    scroll ? 'relative z-20 bg-white dark:bg-woodsmoke-950/95' : ''
  }`;

  return (
    <>
      <header>
        <div
          className={`${
            width < 1024 && active
              ? 'mobile-nav--active inset-0 z-20 fixed'
              : 'large-menu'
          } ${
            width < 1024 && active && currentTheme === 'dark'
              ? 'dark:dark-gradiant'
              : 'light-gradiant'
          }`}
        >
          <div
            className={`mobile-nav-btns lg:items-center flex lg:justify-start md:justify-between sm:justify-between ${headerClasses} lg:px-6 lg:py-2 lg:xl:px-24`}
          >
            <Link className="2xl:mr-16 xl:mr-16 sm:mr-5 md:mr-5" href="/">
              <Image
                priority={true}
                width="62"
                height="62"
                className="flex object-contain w-auto h-auto"
                src={logo}
                alt="logo"
              />
            </Link>
            {/* Logo End */}
            <div className="flex justify-between lg:w-full md:w-0 sm:w-0 items-center">
              <Navbar menuList={menuList} active={active} width={width} />

              <div className="flex relative items-center">
                {/* Menu Open-Close Button */}
                <div className="ml-auto flex">
                  <button
                    onClick={menuHandler}
                    className={`${
                      active && currentTheme === 'dark'
                        ? 'dark:border-slate-500 '
                        : ''
                    } lg:hidden border-slate-500 hover:bg-white/[.15] dark:hover:bg-accent
                focus:bg-white ml-2 flex h-7 w-7 items-center justify-center rounded-full
                border bg-white transition-colors focus:border-slate-400
                 dark:bg-white/[.15]"
                  aria-label="open mobile menu`}
                  >
                    {active ? (
                      <XMarkIcon
                        className={`${
                          active && currentTheme === 'dark'
                            ? 'dark:fill-slate-500 '
                            : ''
                        } fill-slate-500 h-4 w-4 transition-colors`}
                      />
                    ) : (
                      <Bars3Icon
                        className={`fill-slate-500 h-4 w-4 transition-colors hover:fill-flamingo-500 focus:fill-flamingo-500`}
                      />
                    )}
                  </button>
                  {/* Dark-Light Mode */}
                  <Toggle active={active} />
                </div>
                <div className="relative z-20">
                  <button
                    onClick={() => handleSearch()}
                    className="flex ml-4 h-7 w-7 items-center justify-center rounded-full border border-slate-400/80"
                  >
                    {!showSearch ? (
                      <MagnifyingGlassIcon className="h-4 w-4 fill-flamingo-600 dark:fill-[#00a59a]" />
                    ) : (
                      <XMarkIcon className="h-4 w-4 fill-flamingo-600" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`${
                showSearch
                  ? 'visible bg-ebony-100 dark:bg-gray-800 w-full opacity-100'
                  : 'hidden bg-transparent opacity-0'
              } absolute z-10 inset-0 h-full transition-opacity ease-in duration-700`}
            >
              <Search active={active} width={width} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
