import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const Toggle = ({ active }: any) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const themeHandler = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      className={`${
        currentTheme === 'light' && 'transition-colors'
      } ml-2 flex h-7 w-7 items-center justify-center rounded-full border border-slate-400/80
         transition-colors hover:bg-accent focus:bg-accent
         `}
      onClick={themeHandler}
    >
      {currentTheme === 'dark' ? (
        <MoonIcon
          className={`${
            active ? 'fill-flamingo-600' : 'fill-[#00a59a]'
          } h-4 w-4 transition-colors`}
        />
      ) : (
        <SunIcon
          className={`${
            currentTheme === 'light' && 'fill-flamingo-600'
          } h-4 w-4 transition-colors dark:block fill-flamingo-600`}
        />
      )}
    </button>
  );
};
