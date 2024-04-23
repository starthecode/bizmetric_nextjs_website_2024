import React from 'react';

type buttonProps = {
  title: string;
  link: string;
};

export const Button1 = ({ title, link }: buttonProps) => {
  return (
    <div className="block space-x-4">
      <a
        href={link}
        className="
            px-3 py-2 !font-light sm:font-normal
            text-white bg-flamingo-400 border border-transparent rounded-full transition-all
             hover:bg-flamingo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-flamingo-500"
      >
        {title}
      </a>
    </div>
  );
};
