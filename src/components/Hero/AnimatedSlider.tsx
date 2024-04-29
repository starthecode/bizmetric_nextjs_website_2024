import Slider from 'react-slick';

import { LeftCard } from './LeftCard';
import { RightCard } from './RightCard';
import imgG from '../../assets/imgs/gradient_dark.png';
import HeroImg from '@/assets/imgs/hero-illustration.svg';
import Stars from './Stars';
import Image from 'next/image';
export const AnimatedSlider = (heroData: any) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="m-auto relative py-28 pb-3 overflow-hidden z-0 custom-ring">
      <div className="absolute [mask-image:linear-gradient(to_bottom,transparent,white)] h-96 inset-x-0 opacity-60 rotate-180 text-gray-500/20 top-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute h-full inset-0 w-full"
        >
          <defs>
            <pattern
              height="32"
              id="grid-pattern"
              patternTransform="translate(0 -1)"
              patternUnits="userSpaceOnUse"
              width="32"
              x="50%"
              y="100%"
            >
              <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
        </svg>
      </div>
      <Stars />
      <div className="ml-auto mr-auto h-full max-w-full round__ui px-5 sm:px-5 md:px-24 2xl:px-56">
        <Slider {...settings}>
          {heroData.heroData.HomePage.homeSlider.map(
            (item: any, index: any) => (
              <div className="item" key={index}>
                <div className="grid h-full items-center gap-4 lg:grid-cols-12 relative z-20">
                  <div className="col-span-6 flex h-full flex-col items-center justify-center py-10 lg:items-start lg:py-20">
                    <LeftCard item={item} />
                  </div>
                  {item.homeSliderImage?.sourceUrl && (
                    <div className="col-span-6">
                      <RightCard item={item} />
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </Slider>
      </div>
      <picture className="pointer-events-none absolute -right-0 top-[50%] -z-10 hidden dark:block">
        <Image priority={true} alt="" width="350" height="350" src={imgG} />
      </picture>
    </section>
  );
};
