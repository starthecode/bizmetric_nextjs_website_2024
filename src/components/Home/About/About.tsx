import Image from 'next/image';
import { Button1 } from '../../Button/Button';
import { LineSvg } from '../Headings/LineSvg';
import { motion } from 'framer-motion';
import { IconArrow } from '@/components/icons';
import GLightbox from 'glightbox';

const About = () => {
  return (
    <>
      {/* <section className="py-32 relative overflow-hidden dark:bg-woodsmoke-950 mt-40">
        <div className="absolute top-0 inset-x-0 hidden sm:block">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="w-full -scale-x-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1920 120"
            preserveAspectRatio="none"
            width="1920"
            height="120"
          >
            <g className="n2-ss-divider-end">
              <path
                className="dark:fill-junglegreen-400/70 fill-flamingo-400/70"
                opacity="0.25"
                d="M1920,0,0,120,0,0z"
              ></path>
              <path
                className="dark:fill-junglegreen-400/70 fill-flamingo-400/70"
                opacity="0.5"
                d="M1920,0,0,80,0,0z"
              ></path>
              <path
                className="dark:fill-junglegreen-400/70 fill-flamingo-400/70"
                d="M1920,-2,1920,0,0,40,0,-2z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="bg-transparent py-[40px] xl:py-0">
          <div className="orbit_animation circle_1" />
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mt-12 lg:m-0">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                <div className="relative xl:col-start-1 text-center xl:text-left md:text-left sm:text-center">
                  <h2 className="text-sm font-inter font-semibold tracking-wide uppercase">
                    <span className="bg-gradient-to-r from-flamingo-400 to-flamingo-300 bg-clip-text text-transparent">
                      What does Bizmetric do
                    </span>
                  </h2>
                  <motion.h1
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="mb-4 text-center font-inter tracking-[-0.02em] !leading-[1.2] font-extrabold text-2xl lg:text-4xl md:text-4xl text-ebonyclay-900 dark:text-white lg:text-left"
                  >
                    Empowering you to make <br /> Intelligent-Driven Business{' '}
                    <span
                      className="relative font-cursive
                    bg-gradient-to-r from-formalGreenLight to-formalGreen bg-clip-text
                    text-transparent dark:to-secondaryLight overflow-hidden"
                    >
                      Decisions
                      <LineSvg classname={'right-1 w-[130px]'} />
                    </span>
                  </motion.h1>

                  <p className="mt-10 text-lg text-ebony-700 dark:text-slate-400/70 mb-10">
                    We are on a mission of solving tough data challenges <br />{' '}
                    and helping you grow your business revenue.
                  </p>
                  <Button1 title="About Us" link="/about-us" />
                </div>
              </div>
            </div>
            <div className="relative w-fit h-full flex items-center justify-center">
              <div
                className="bg-flamingo-500 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-flamingo-400/40 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-junglegreen-400/40 dark:bg-gray-800 dark:before:border-flamingo-400/40 dark:after:border-junglegreen-400/40
                relative aspect-w-10 aspect-h-6 rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-fit"
              >
                <iframe
                  className="relative z-10"
                  width="520"
                  height="310"
                  src="https://www.youtube-nocookie.com/embed/0DysrE4uCsk?si=MibOm7PfXvI-lfy_&amp;controls=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="orbit_animation circle_2" />
        </div>
        <div className="absolute bottom-0 inset-x-0 hidden sm:block">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="w-full scale-x-100 -scale-y-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1920 120"
            preserveAspectRatio="none"
            width="1920"
            height="120"
          >
            <g className="n2-ss-divider-end">
              <path
                className="dark:fill-junglegreen-400/70 fill-flamingo-400/70"
                opacity="0.25"
                d="M1920,0,0,120,0,0z"
              ></path>
              <path
                className="dark:fill-junglegreen-400/70 fill-flamingo-400/70"
                opacity="0.5"
                d="M1920,0,0,80,0,0z"
              ></path>
              <path
                className="dark:fill-junglegreen-400/70 fill-flamingo-400/70"
                d="M1920,-2,1920,0,0,40,0,-2z"
              ></path>
            </g>
          </svg>
        </div>
      </section> */}

      <section className="relative video-area video-two bg-flamingo-700/20 dark:bg-inherit pt-[100px] z-10 mt-28">
        {/* <div className="absolute -z-1 -top-[128%] sm:-top-[107%] xl:-top-[73%] left-1/2 -translate-x-1/2 -u-z-10 hero-circle-gradient w-full h-[952px] rounded-full max-w-[935px]"></div>
        <div className="absolute -z-1 -top-[112%] sm:-top-[93%] xl:-top-[62%] left-1/2 -translate-x-1/2 -u-z-10 hero-circle-gradient w-full h-[1046px] rounded-full max-w-[1046px]"></div> */}

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner-content-head">
                <div className="relative group inner-content pt-16 pb-20 bg-white dark:bg-woodsmoke-950/95">
                  <a href="#" className="text-flamingo-500">
                    <span className="absolute right-10 top-10 group-hover:-rotate-45 transition-all duration-400">
                      <IconArrow />
                    </span>
                  </a>
                  <span className="shape2">
                    <svg
                      viewBox="0 0 22 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.7 4.60019C17.8 4.60019 17.2 3.90019 17.1 3.10019C17 2.30019 17.8 1.60019 18.6 1.50019C19.4 1.40019 20.1 2.20019 20.2 3.00019C20.2 3.90019 19.5 4.60019 18.7 4.60019ZM18.7 12.8002C17.8 12.8002 17.2 12.1002 17.1 11.3002C17 10.5002 17.8 9.80019 18.6 9.70019C19.4 9.60019 20.1 10.4002 20.2 11.2002C20.2 12.1002 19.5 12.8002 18.7 12.8002ZM18.7 21.1002C17.8 21.1002 17.2 20.4002 17.1 19.6002C17 18.8002 17.8 18.1002 18.6 18.0002C19.4 17.9002 20.1 18.7002 20.2 19.5002C20.2 20.4002 19.5 21.0002 18.7 21.1002ZM18.7 29.3002C17.8 29.3002 17.2 28.6002 17.1 27.8002C17 27.0002 17.8 26.3002 18.6 26.2002C19.4 26.1002 20.1 26.9002 20.2 27.7002C20.2 28.6002 19.5 29.3002 18.7 29.3002ZM18.7 37.5002C17.8 37.5002 17.2 36.8002 17.1 36.0002C17 35.2002 17.8 34.5002 18.6 34.4002C19.4 34.3002 20.1 35.1002 20.2 35.9002C20.2 36.8002 19.5 37.5002 18.7 37.5002ZM10.7 4.60019C9.79995 4.60019 9.19995 3.90019 9.19995 3.10019C9.19995 2.30019 9.89995 1.60019 10.7 1.60019C11.6 1.60019 12.2 2.30019 12.2 3.10019C12.2 3.90019 11.6 4.60019 10.7 4.60019ZM10.7 12.8002C9.79995 12.8002 9.19995 12.1002 9.19995 11.3002C9.19995 10.5002 9.89995 9.80019 10.7 9.80019C11.6 9.80019 12.2 10.5002 12.2 11.3002C12.2 12.1002 11.6 12.8002 10.7 12.8002ZM10.7 21.0002C9.79995 21.0002 9.19995 20.3002 9.19995 19.5002C9.19995 18.7002 9.79995 18.0002 10.7 18.0002C11.6 18.0002 12.2 18.7002 12.2 19.5002C12.2 20.4002 11.6 21.0002 10.7 21.0002C10.7 21.1002 10.7 21.1002 10.7 21.0002ZM10.7 29.3002C9.79995 29.3002 9.19995 28.6002 9.19995 27.8002C9.19995 27.0002 9.89995 26.3002 10.7 26.3002C11.6 26.3002 12.2 27.0002 12.2 27.8002C12.2 28.6002 11.6 29.3002 10.7 29.3002ZM10.7 37.5002C9.79995 37.5002 9.19995 36.8002 9.19995 36.0002C9.19995 35.2002 9.89995 34.5002 10.7 34.5002C11.6 34.5002 12.2 35.2002 12.2 36.0002C12.2 36.8002 11.6 37.5002 10.7 37.5002ZM2.69995 4.60019C1.79995 4.60019 1.19995 3.90019 1.19995 3.10019C1.19995 2.30019 1.89995 1.60019 2.69995 1.60019C3.59995 1.60019 4.19995 2.30019 4.19995 3.10019C4.29995 3.90019 3.59995 4.60019 2.69995 4.60019ZM2.69995 12.8002C1.79995 12.8002 1.19995 12.1002 1.19995 11.3002C1.19995 10.5002 1.89995 9.80019 2.69995 9.80019C3.59995 9.80019 4.19995 10.5002 4.19995 11.3002C4.29995 12.1002 3.59995 12.8002 2.69995 12.8002ZM2.69995 21.0002C1.79995 21.0002 1.19995 20.3002 1.19995 19.5002C1.19995 18.7002 1.89995 18.0002 2.69995 18.0002C3.59995 18.0002 4.19995 18.7002 4.19995 19.5002C4.29995 20.4002 3.59995 21.0002 2.69995 21.0002C2.69995 21.1002 2.69995 21.1002 2.69995 21.0002ZM2.69995 29.3002C1.79995 29.3002 1.19995 28.6002 1.19995 27.8002C1.19995 27.0002 1.89995 26.3002 2.69995 26.3002C3.59995 26.3002 4.19995 27.0002 4.19995 27.8002C4.29995 28.6002 3.59995 29.3002 2.69995 29.3002ZM2.69995 37.5002C1.79995 37.5002 1.19995 36.8002 1.19995 36.0002C1.19995 35.2002 1.89995 34.5002 2.69995 34.5002C3.59995 34.5002 4.19995 35.2002 4.19995 36.0002C4.29995 36.8002 3.59995 37.5002 2.69995 37.5002ZM18.7 45.6002C17.8 45.6002 17.2 44.9002 17.1 44.1002C17 43.3002 17.8 42.6002 18.6 42.5002C19.4 42.4002 20.1 43.2002 20.2 44.0002C20.2 44.9002 19.5 45.6002 18.7 45.6002ZM18.7 53.8002C17.8 53.8002 17.2 53.1002 17.1 52.3002C17 51.5002 17.8 50.8002 18.6 50.7002C19.4 50.6002 20.1 51.4002 20.2 52.2002C20.2 53.2002 19.5 53.8002 18.7 53.8002C18.7 53.9002 18.7 53.9002 18.7 53.8002ZM18.7 62.1002C17.8 62.1002 17.2 61.4002 17.1 60.6002C17 59.8002 17.8 59.1002 18.6 59.0002C19.4 58.9002 20.1 59.7002 20.2 60.5002C20.2 61.4002 19.5 62.1002 18.7 62.1002ZM18.7 70.3002C17.8 70.3002 17.2 69.6002 17.1 68.8002C17 68.0002 17.8 67.3002 18.6 67.2002C19.4 67.1002 20.1 67.9002 20.2 68.7002C20.2 69.6002 19.5 70.3002 18.7 70.3002ZM18.7 78.5002C17.8 78.5002 17.2 77.8002 17.1 77.0002C17 76.2002 17.8 75.5002 18.6 75.4002C19.4 75.3002 20.1 76.1002 20.2 76.9002C20.2 77.8002 19.5 78.5002 18.7 78.5002ZM10.7 45.6002C9.79995 45.6002 9.19995 44.9002 9.19995 44.1002C9.19995 43.3002 9.89995 42.6002 10.7 42.6002C11.6 42.6002 12.2 43.3002 12.2 44.1002C12.2 44.9002 11.6 45.6002 10.7 45.6002ZM10.7 53.8002C9.79995 53.8002 9.19995 53.1002 9.19995 52.3002C9.19995 51.5002 9.89995 50.8002 10.7 50.8002C11.6 50.8002 12.2 51.5002 12.2 52.3002C12.2 53.2002 11.6 53.8002 10.7 53.8002C10.7 53.9002 10.7 53.9002 10.7 53.8002ZM10.7 62.1002C9.79995 62.1002 9.19995 61.4002 9.19995 60.6002C9.19995 59.8002 9.79995 59.0002 10.7 59.0002C11.6 59.0002 12.2 59.7002 12.2 60.5002C12.2 61.4002 11.6 62.1002 10.7 62.1002ZM10.7 70.3002C9.79995 70.3002 9.19995 69.6002 9.19995 68.8002C9.19995 68.0002 9.89995 67.3002 10.7 67.3002C11.6 67.3002 12.2 68.0002 12.2 68.8002C12.2 69.6002 11.6 70.3002 10.7 70.3002ZM10.7 78.5002C9.79995 78.5002 9.19995 77.8002 9.19995 77.0002C9.19995 76.2002 9.89995 75.5002 10.7 75.5002C11.6 75.5002 12.2 76.2002 12.2 77.0002C12.2 77.8002 11.6 78.5002 10.7 78.5002ZM2.69995 45.6002C1.79995 45.6002 1.19995 44.9002 1.19995 44.1002C1.19995 43.3002 1.89995 42.6002 2.69995 42.6002C3.59995 42.6002 4.19995 43.3002 4.19995 44.1002C4.29995 44.9002 3.59995 45.6002 2.69995 45.6002ZM2.69995 53.8002C1.79995 53.8002 1.19995 53.1002 1.19995 52.3002C1.19995 51.5002 1.89995 50.8002 2.69995 50.8002C3.59995 50.8002 4.19995 51.5002 4.19995 52.3002C4.29995 53.2002 3.59995 53.8002 2.69995 53.8002C2.69995 53.9002 2.69995 53.9002 2.69995 53.8002ZM2.69995 62.1002C1.79995 62.1002 1.19995 61.4002 1.19995 60.6002C1.19995 59.8002 1.89995 59.0002 2.69995 59.0002C3.59995 59.0002 4.19995 59.7002 4.19995 60.5002C4.29995 61.4002 3.59995 62.1002 2.69995 62.1002ZM2.69995 70.3002C1.79995 70.3002 1.19995 69.6002 1.19995 68.8002C1.19995 68.0002 1.89995 67.3002 2.69995 67.3002C3.59995 67.3002 4.19995 68.0002 4.19995 68.8002C4.29995 69.6002 3.59995 70.3002 2.69995 70.3002ZM2.69995 78.5002C1.79995 78.5002 1.19995 77.8002 1.19995 77.0002C1.19995 76.2002 1.89995 75.5002 2.69995 75.5002C3.59995 75.5002 4.19995 76.2002 4.19995 77.0002C4.29995 77.8002 3.59995 78.5002 2.69995 78.5002Z"
                        className="fill-junglegreen-400/40 dark:fill-flamingo-400/40"
                      ></path>
                    </svg>
                  </span>
                  <span className="shape1">
                    <svg
                      viewBox="0 0 49 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.2001 1C11.1001 1 0.600098 11.6 0.600098 24.6C0.600098 37.6 11.2001 48.2 24.2001 48.2C37.2001 48.2 47.8001 37.6 47.8001 24.6C47.8001 11.6 37.2001 1 24.2001 1ZM24.2001 40C15.7001 40 8.8001 33.1 8.8001 24.6C8.8001 16.1 15.7001 9.2 24.2001 9.2C32.7001 9.2 39.6001 16.1 39.6001 24.6C39.6001 33.1 32.7001 40 24.2001 40Z"
                        className="fill-junglegreen-400/40 dark:fill-flamingo-400/40"
                      ></path>
                    </svg>
                  </span>
                  <div className="flex flex-col justify-center items-center">
                    <div className="relativ text-center ">
                      <h2 className="text-sm font-inter font-semibold tracking-wide uppercase">
                        <span className="bg-gradient-to-r from-flamingo-400 to-flamingo-300 bg-clip-text text-transparent">
                          What does Bizmetric do
                        </span>
                      </h2>
                      <motion.h1
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className="mb-4 text-center font-inter tracking-[-0.02em] !leading-[1.2] font-extrabold text-2xl lg:text-4xl md:text-4xl text-ebonyclay-900 dark:text-white"
                      >
                        Empowering you to make <br /> Intelligent-Driven
                        Business{' '}
                        <span
                          className="relative font-cursive
                    bg-gradient-to-r from-formalGreenLight to-formalGreen bg-clip-text
                    text-transparent dark:to-secondaryLight overflow-hidden"
                        >
                          Decisions
                          <LineSvg classname={'right-1 w-[130px]'} />
                        </span>
                      </motion.h1>

                      <p className="mt-10 text-lg text-ebony-700 dark:text-slate-400/70 mb-10">
                        We are on a mission of solving tough data challenges{' '}
                        <br /> and helping you grow your business revenue.
                      </p>

                      {/* <Button1 title="About Us" link="/about-us" /> */}
                    </div>
                    {/* <div className="relative w-fit h-full flex items-center justify-center bg-flamingo-400/10 border-transparent rounded-2xl p-7">
                      <iframe
                        className="relative z-10"
                        width="520"
                        height="310"
                        src="https://www.youtube-nocookie.com/embed/0DysrE4uCsk?si=MibOm7PfXvI-lfy_&amp;controls=0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div> */}
                  </div>

                  <div className="flex flex-col justify-center w-full items-center gap-5">
                    <div className="animation-pulse cursor-pointer h-20 w-20 rounded-full shadow-lg inline-flex items-center justify-center bg-gradient-to-r from-formalGreenLight to-formalGreen">
                      <a
                        href="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
                        className="glightbox video"
                      >
                        {' '}
                        <svg
                          className="w-8 h-8 fill-white"
                          version="1.1"
                          id="fi_748134"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 511.999 511.999"
                          xmlSpace="preserve"
                        >
                          <g>
                            <g>
                              <path d="M443.86,196.919L141.46,10.514C119.582-2.955,93.131-3.515,70.702,9.016c-22.429,12.529-35.819,35.35-35.819,61.041    v371.112c0,38.846,31.3,70.619,69.77,70.829c0.105,0,0.21,0.001,0.313,0.001c12.022-0.001,24.55-3.769,36.251-10.909    c9.413-5.743,12.388-18.029,6.645-27.441c-5.743-9.414-18.031-12.388-27.441-6.645c-5.473,3.338-10.818,5.065-15.553,5.064    c-14.515-0.079-30.056-12.513-30.056-30.898V70.058c0-11.021,5.744-20.808,15.364-26.183c9.621-5.375,20.966-5.135,30.339,0.636    l302.401,186.405c9.089,5.596,14.29,14.927,14.268,25.601c-0.022,10.673-5.261,19.983-14.4,25.56L204.147,415.945    c-9.404,5.758-12.36,18.049-6.602,27.452c5.757,9.404,18.048,12.36,27.452,6.602l218.611-133.852    c20.931-12.769,33.457-35.029,33.507-59.55C477.165,232.079,464.729,209.767,443.86,196.919z"></path>
                            </g>
                          </g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                        </svg>
                      </a>
                    </div>
                    <span className="uppercase text-xs">
                      Watch Our intro video
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
