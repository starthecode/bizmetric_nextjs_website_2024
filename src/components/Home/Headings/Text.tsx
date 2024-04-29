import React from 'react';
import { LineSvg } from './LineSvg';

export const Text = ({ small, main }: any) => {
  const words = main.split(' ');
  const wordIndexToWrap = words.length - 1;
  words[wordIndexToWrap] = (
    <span className="font-cursive relative bg-gradient-to-r from-formalGreenLight to-formalGreen bg-clip-text text-transparent dark:to-secondaryLight">
      {words[wordIndexToWrap]}
    </span>
  );

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
            <h2 className="text-sm font-inter font-semibold tracking-wide uppercase">
              <span className="bg-gradient-to-r from-flamingo-400 to-flamingo-300 bg-clip-text text-transparent">
                {small}
              </span>
            </h2>
            <h2 className="mt-3 mb-4 font-inter tracking-[-0.02em] !leading-[1.2] font-extrabold text-2xl lg:text-4xl md:text-4xl text-ebonyclay-900 dark:text-white">
              {words.map((word: string, index: any) => (
                <span key={index}>
                  {word}
                  {index !== words.length - 1 && ' '}
                </span>
              ))}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
