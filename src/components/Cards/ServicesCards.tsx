import Image from 'next/image';
import React from 'react';
import { SvgShape01 } from '../svg';
import { IconArrow } from '../icons';

const ServicesCards = () => {
  return (
    <>
      <div className="grid sm:grid-cols-12 gap-10" data-highlighter="">
        <div className="sm:col-span-12 relative overflow-hidden">
          <div className="relative rounded-3xl border-[1px] border-woodsmoke-300/20 bg-white dark:bg-woodsmoke-950/95 z-10">
            <div className="group relative overflow-hidden rounded-3xl px-7 xl:p-15 box-hover dark:before:bg-flamingo-500/20">
              {/* <span className="absolute left-0 top-0 -z-1">
                <SvgShape01 />
              </span> */}
              <div className="flex items-center justify-between relative z-20">
                <div className="max-w-[477px] w-full">
                  <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-6 rounded-full">
                    <span className="font-bold text-xl text-ebony-900 dark:text-white">
                      Artificial Intelegence
                    </span>
                  </span>
                  {/* <h3 className="text-white mb-4.5 font-bold text-heading-4">
                    Intelligent Writing Assistance
                  </h3> */}
                  <p className="font-normal text-md text-slate-600">
                    Transform your legacy technology with AI-enabled processes.
                    Witness an imaginable improvement in your business with the
                    latest intelligent developments.
                  </p>
                  <a
                    href="#"
                    className="relative inline-flex items-center gap-1.5 rounded-full py-3 px-6 text-flamingo-500 text-sm ease-in duration-300 hover:shadow-button mt-5"
                  >
                    Learn more
                    <span className="group-hover:-rotate-45 transition-all duration-400">
                      <IconArrow />
                    </span>
                  </a>
                </div>
                <div className="max-w-[428px] w-full sm:block md:flex flex justify-center items-center">
                  <Image
                    width={300}
                    height={300}
                    className="w-auto h-auto mix-blend-color-dodge"
                    src="/images/ai_services_img.png"
                    alt="icon"
                  />
                </div>
                <div className="max-w-[482px] w-full h-60 overflow-hidden absolute -z-1 top-20 left-1/2 -translate-x-1/2">
                  <div className="stars"></div>
                  <div className="stars2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:col-span-5">
          <div className="relative rounded-3xl border-[1px] border-woodsmoke-300/20 bg-white dark:bg-woodsmoke-950/95 z-10">
            <div className="group relative overflow-hidden rounded-3xl p-7 h-[290px] box-hover-2 dark:before:bg-flamingo-500/20">
              <div className="relative z-20 flex flex-col justify-center items-center">
                <a href="#" className="text-flamingo-500">
                  <span className="absolute right-0 top-0 group-hover:-rotate-45 transition-all duration-400">
                    <IconArrow />
                  </span>
                </a>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-13.5 mx-auto">
                  <svg
                    className="dark:fill-white fill-flamingo-500"
                    id="fi_4592852"
                    enable-background="new 0 0 512 512"
                    height="512"
                    viewBox="0 0 512 512"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <g>
                        <path d="m32.123 497h-21.599c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h21.599c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"></path>
                        <path d="m67.237 497h-8.415c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h8.415c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"></path>
                        <path d="m106.512 469.167h-95.988c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h95.987c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.499-7.5z"></path>
                        <path d="m54.117 15h21.598c4.143 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-21.598c-4.143 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path>
                        <path d="m102.415 15h8.414c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-8.414c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z"></path>
                        <path d="m54.117 42.833h95.987c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-95.987c-4.143 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path>
                        <path d="m262.16 185.75h65.633c1.989 0 3.896-.79 5.304-2.197l39.084-39.084c15.218 18.602 24.803 41.932 25.972 67.23.333 7.231 6.239 12.895 13.447 12.895h15.107c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-13.644c-1.598-27.987-12.16-54.511-30.07-75.938l10.858-10.858c2.929-2.929 2.929-7.678 0-10.606-2.929-2.929-7.677-2.929-10.607 0l-10.516 10.516c-22.418-21.338-51.458-33.963-82.275-35.722v-61.906c100.049 3.855 180.662 84.468 184.517 184.514h-14.938c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h16.516c3.677 0 7.111-1.454 9.673-4.094 2.56-2.638 3.908-6.112 3.797-9.784-3.32-109.212-91.472-197.363-200.685-200.684-3.679-.113-7.145 1.236-9.783 3.795-2.642 2.562-4.096 5.998-4.096 9.674v64.947c0 7.207 5.664 13.114 12.894 13.448 28.281 1.307 54.105 13.128 73.61 31.582l-37.271 37.271h-62.527c-4.143 0-7.5 3.358-7.5 7.5s3.358 7.501 7.5 7.501z"></path>
                        <path d="m262.16 243.366h21.598c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-21.598c-4.143 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path>
                        <path d="m310.457 228.366c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h8.415c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z"></path>
                        <path d="m262.16 215.534h87.269c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-87.269c-4.143 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path>
                        <path d="m430.538 406.066c1.407 1.407 3.314 2.197 5.304 2.197h65.634c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-62.527l-26.73-26.73c13.801-26.94 21.571-56.776 22.513-87.771.112-3.672-1.236-7.147-3.796-9.787-2.562-2.641-5.997-4.095-9.674-4.095h-64.943c-7.208 0-13.116 5.668-13.451 12.904-1.938 41.853-25.574 77.309-59.775 95.92l-28.403-28.403c-1.407-1.407-3.314-2.197-5.304-2.197h-63.276c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h60.17l22.252 22.252c-12.689 4.754-26.448 7.347-40.827 7.347-.587 0-1.179-.004-1.769-.013-26.503-.391-52.313-10.125-72.678-27.407-3.158-2.68-7.89-2.292-10.571.865-2.68 3.158-2.292 7.891.866 10.571 21.587 18.321 48.607 29.134 76.617 30.765v61.897c-41.344-1.614-79.515-16.552-110.292-40.61l23.266-23.266c2.929-2.929 2.929-7.678 0-10.606-2.929-2.929-7.677-2.929-10.607 0l-24.152 24.152c-36.815-33.654-60.66-81.308-62.72-134.172h61.902c1.345 23.435 9.009 45.996 22.317 65.537 1.452 2.132 3.808 3.279 6.206 3.279 1.453 0 2.923-.422 4.215-1.302 3.424-2.332 4.309-6.998 1.978-10.421-12.61-18.517-19.497-40.093-19.913-62.397-1.16-62.057 46.414-113.581 108.307-117.299 7.131-.429 12.717-6.333 12.717-13.442v-15.192c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v13.752c-32.98 2.331-63.544 16.986-86.192 41.365-20.815 22.405-32.912 50.9-34.634 81.12h-61.905c2.867-71.764 46.362-134.605 108.159-165.084l22.305 22.305c1.465 1.464 3.385 2.197 5.304 2.197s3.839-.732 5.304-2.197c2.929-2.929 2.929-7.678 0-10.606l-18.204-18.204c18.738-7.353 38.871-11.827 59.86-12.834v14.862c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-16.453c0-3.646-1.509-7.188-4.14-9.717-2.627-2.526-6.234-3.889-9.861-3.749-25.298 1-49.799 6.547-72.547 16.205l-21.79-21.79c-1.407-1.407-3.314-2.197-5.304-2.197h-65.632c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h62.526l15.789 15.789c-20.075 10.432-38.515 24.216-54.576 41.04-37.526 39.309-57.887 90.834-57.335 145.081.555 54.401 22.219 105.667 61.003 144.355 2.014 2.009 4.07 3.961 6.151 5.877l-14.624 14.624h-62.527c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h65.634c1.989 0 3.896-.79 5.304-2.197l17.635-17.635c36.11 28.789 80.389 44.618 126.932 44.98.549.004 1.098.007 1.646.007 53.87 0 104.862-20.604 143.748-58.124 12.928-12.474 24.025-26.355 33.168-41.295zm-195.369 58.314v-61.89c15.587-.885 30.71-4.539 44.777-10.719l21.003 21.003c1.465 1.464 3.385 2.197 5.304 2.197s3.839-.732 5.304-2.197c2.929-2.929 2.929-7.678 0-10.606l-17.6-17.6c8.244-4.895 16.004-10.73 23.131-17.46 1.111-1.05 2.195-2.121 3.264-3.203 14.063 14.017 28.641 28.581 43.481 43.438-33.331 33.574-78.783 55.052-128.664 57.037zm138.821-68.094c-14.918-14.935-29.567-29.569-43.694-43.649 16.354-20.82 25.96-46.031 27.484-72.757h61.905c-1.038 26.843-7.716 52.309-18.839 75.281l-11.382-11.382c-2.93-2.929-7.678-2.929-10.607 0s-2.929 7.678 0 10.606l14.593 14.593c-5.698 9.669-12.221 18.801-19.46 27.308z"></path>
                        <path d="m501.476 450.879h-21.599c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h21.599c4.143 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path>
                        <path d="m453.178 450.879h-8.415c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h8.415c4.143 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path>
                        <path d="m501.476 423.047h-87.269c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h87.269c4.143 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path>
                        <path d="m186.108 296.716h21.598c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-21.598c-4.143 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path>
                        <path d="m226.906 289.216c0 4.142 3.357 7.5 7.5 7.5h8.414c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-8.414c-4.142 0-7.5 3.358-7.5 7.5z"></path>
                        <path d="m186.108 324.548h91.628c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-91.628c-4.143 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path>
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="hero-subtitle-gradient w-fit relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-6 rounded-full">
                  <span className="font-bold text-xl">Data Analytics</span>
                </span>
                {/* <h3 className="text-white mb-4.5 font-semibold text-heading-6">
                  Empowering Writing Excellence
                </h3> */}
                <p className="font-normal text-md text-slate-600">
                  Adopt the best analytics methodologies and reporting solutions
                  to bring out the enterprise-centric insights from the large
                  data volumes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:col-span-7">
          <div className="relative rounded-3xl border-[1px] border-woodsmoke-300/20 bg-white dark:bg-woodsmoke-950/95 z-10">
            <div className="group relative overflow-hidden rounded-3xl p-7 h-[290px] box-hover-2 dark:before:bg-flamingo-500/20">
              <div className="relative z-20 flex flex-col justify-center items-center">
                <a href="#" className="text-flamingo-500">
                  <span className="absolute right-0 top-0 group-hover:-rotate-45 transition-all duration-400">
                    <IconArrow />
                  </span>
                </a>
                <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-13.5 mx-auto">
                  <svg
                    className="dark:fill-white fill-flamingo-500"
                    id="fi_8759068"
                    enable-background="new 0 0 512 512"
                    height="512"
                    viewBox="0 0 512 512"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m498.874 97.085-9.925-3.82c-1.561-5.265-3.667-10.344-6.292-15.176l4.319-9.726c1.344-3.024.686-6.563-1.654-8.904l-15.854-15.854c-2.339-2.34-5.879-2.998-8.904-1.654l-9.728 4.32c-4.833-2.625-9.911-4.731-15.174-6.291l-3.821-9.926c-1.188-3.089-4.156-5.126-7.466-5.126h-22.42c-3.31 0-6.277 2.038-7.466 5.126l-3.821 9.926c-5.263 1.56-10.342 3.666-15.174 6.291l-9.728-4.32c-3.026-1.344-6.564-.686-8.904 1.654l-15.854 15.854c-2.34 2.34-2.998 5.879-1.655 8.904l4.319 9.724c-2.625 4.833-4.732 9.913-6.293 15.18l-9.923 3.819c-3.089 1.188-5.126 4.156-5.126 7.466v3.211h-229.676c-21.344 0-38.708 17.364-38.708 38.708v134.201l-2.51-1.115c-3.025-1.342-6.564-.687-8.904 1.655l-15.854 15.854c-2.34 2.34-2.998 5.879-1.655 8.904l4.319 9.724c-2.626 4.833-4.732 9.914-6.293 15.18l-9.923 3.819c-3.088 1.187-5.126 4.155-5.126 7.464v22.421c0 3.31 2.038 6.277 5.126 7.466l9.926 3.821c1.561 5.264 3.666 10.342 6.292 15.174l-4.321 9.729c-1.343 3.024-.686 6.564 1.655 8.904l15.854 15.854c2.34 2.34 5.881 2.997 8.904 1.655l9.724-4.319c4.833 2.625 9.913 4.731 15.18 6.293l3.819 9.923c1.188 3.089 4.156 5.126 7.466 5.126h22.421c3.31 0 6.277-2.038 7.466-5.126l3.821-9.926c5.263-1.561 10.341-3.666 15.174-6.292l9.728 4.321c3.026 1.344 6.564.686 8.904-1.654l15.854-15.854c2.34-2.34 2.998-5.879 1.654-8.904l-1.923-4.331h20.178v32.789h-38.743c-18.851 0-34.188 12.975-34.188 28.923v20.924c0 4.418 3.582 8 8 8h271.403c4.418 0 8-3.582 8-8v-20.924c0-15.948-15.337-28.923-34.188-28.923h-38.743v-32.789h98.247c21.344 0 38.708-17.365 38.708-38.708v-169.752c.022-.021.047-.037.068-.059l15.854-15.854c2.34-2.34 2.998-5.88 1.655-8.904l-4.319-9.724c2.625-4.833 4.732-9.913 6.292-15.18l9.923-3.819c3.089-1.188 5.126-4.156 5.126-7.466v-22.421c.003-3.309-2.035-6.277-5.123-7.466zm-324.958 231.624c-1.474-4.492-3.326-8.849-5.589-13.014l4.319-9.726c1.343-3.024.686-6.563-1.654-8.904l-15.854-15.854c-2.34-2.34-5.88-2.996-8.904-1.655l-9.729 4.321c-4.833-2.625-9.911-4.731-15.174-6.292l-3.821-9.927c-1.189-3.088-4.157-5.126-7.466-5.126h-14.42v-113.092h246.033c.636 1.347 1.302 2.68 2.015 3.992l-4.321 9.728c-1.343 3.024-.686 6.563 1.655 8.904l15.854 15.854c2.34 2.341 5.88 2.997 8.904 1.655l9.724-4.319c4.833 2.626 9.914 4.732 15.18 6.293l3.819 9.923c1.188 3.089 4.156 5.126 7.466 5.126h22.42c1.182 0 2.316-.27 3.345-.745v122.858zm-81.262-204.947h229.676v3.209c0 2.608 1.278 4.989 3.326 6.469h-233.772c-6.759 0-12.258 5.5-12.258 12.259v123.347l-3.287 8.539c-2.167.642-4.293 1.4-6.393 2.225v-133.34c0-12.521 10.187-22.708 22.708-22.708zm59.397 270.052 3.743 8.428-8.085 8.085-8.432-3.745c-2.41-1.071-5.195-.884-7.441.499-5.697 3.507-11.873 6.068-18.358 7.612-2.566.611-4.667 2.447-5.614 4.909l-3.311 8.601h-11.435l-3.31-8.598c-.947-2.462-3.048-4.298-5.614-4.909-6.491-1.544-12.669-4.106-18.363-7.612-2.247-1.384-5.032-1.57-7.442-.5l-8.428 3.743-8.086-8.086 3.745-8.432c1.071-2.411.884-5.195-.5-7.441-3.507-5.696-6.068-11.873-7.611-18.358-.611-2.566-2.447-4.667-4.909-5.614l-8.6-3.311v-11.435l8.598-3.31c2.462-.947 4.298-3.048 4.909-5.614 1.544-6.491 4.105-12.669 7.612-18.364 1.383-2.247 1.57-5.031.5-7.442l-3.743-8.427 8.086-8.085 8.431 3.745c2.41 1.07 5.195.883 7.441-.499 5.696-3.507 11.874-6.068 18.359-7.612 2.566-.611 4.666-2.447 5.614-4.909l3.311-8.601h11.435l3.311 8.601c.947 2.461 3.047 4.298 5.613 4.909 6.486 1.543 12.663 4.104 18.359 7.612 2.247 1.383 5.031 1.568 7.441.499l8.432-3.745 8.085 8.086-3.744 8.43c-1.071 2.411-.884 5.195.499 7.442 3.507 5.696 6.068 11.873 7.612 18.359.61 2.566 2.447 4.667 4.909 5.614l8.6 3.31v11.435l-8.598 3.31c-2.462.947-4.298 3.048-4.909 5.614-1.544 6.491-4.105 12.669-7.612 18.363-1.384 2.247-1.571 5.032-.5 7.443zm237.323 64.335v12.924h-255.403v-12.924c0-7.005 8.329-12.923 18.188-12.923h219.027c9.859 0 18.188 5.918 18.188 12.923zm-72.931-28.923h-109.542v-32.789h109.542zm114.247-48.789h-257.595c.55-1.509 1.068-3.03 1.525-4.573l9.923-3.819c3.089-1.188 5.126-4.156 5.126-7.466v-19.869h246.051c4.418 0 8-3.582 8-8v-148.05c2.423-1.017 4.799-2.149 7.116-3.407l2.563 1.139v171.337c0 12.521-10.187 22.708-22.709 22.708zm57.31-258.958-8.598 3.31c-2.462.947-4.298 3.048-4.909 5.614-1.544 6.49-4.105 12.668-7.613 18.363-1.383 2.247-1.57 5.031-.5 7.442l3.743 8.428-8.086 8.086-8.432-3.745c-2.412-1.07-5.194-.884-7.442.5-5.696 3.507-11.872 6.068-18.357 7.611-2.566.611-4.667 2.447-5.614 4.909l-3.311 8.601h-11.435l-3.31-8.598c-.947-2.462-3.048-4.299-5.614-4.909-6.489-1.544-12.667-4.105-18.363-7.612-2.246-1.382-5.03-1.57-7.442-.5l-8.427 3.743-8.085-8.086 3.745-8.431c1.07-2.411.884-5.195-.499-7.441-3.507-5.696-6.068-11.873-7.612-18.359-.611-2.566-2.447-4.666-4.909-5.613l-8.601-3.312v-11.435l8.597-3.309c2.462-.947 4.298-3.047 4.909-5.613 1.545-6.491 4.106-12.669 7.613-18.364 1.383-2.247 1.57-5.031.5-7.442l-3.743-8.428 8.086-8.085 8.432 3.745c2.41 1.071 5.196.884 7.442-.499 5.696-3.507 11.872-6.068 18.357-7.611 2.566-.611 4.667-2.447 5.614-4.909l3.311-8.601h11.435l3.311 8.601c.947 2.462 3.048 4.298 5.614 4.909 6.485 1.543 12.662 4.104 18.358 7.611 2.246 1.383 5.03 1.57 7.442.499l8.431-3.745 8.086 8.086-3.744 8.43c-1.071 2.411-.884 5.195.499 7.442 3.507 5.696 6.068 11.873 7.612 18.359.61 2.566 2.447 4.667 4.909 5.614l8.6 3.31zm-74.835-56.237c-27.856 0-50.519 22.663-50.519 50.52s22.663 50.519 50.519 50.519 50.52-22.663 50.52-50.519-22.664-50.52-50.52-50.52zm0 85.039c-19.034 0-34.519-15.485-34.519-34.519s15.485-34.52 34.519-34.52 34.52 15.485 34.52 34.52c-.001 19.033-15.486 34.519-34.52 34.519zm-314.33 152.568c-27.856 0-50.519 22.663-50.519 50.52s22.663 50.519 50.519 50.519 50.52-22.663 50.52-50.519-22.664-50.52-50.52-50.52zm0 85.038c-19.034 0-34.519-15.485-34.519-34.519s15.485-34.52 34.519-34.52 34.52 15.485 34.52 34.52c-.001 19.034-15.486 34.519-34.52 34.519zm183.759-195.982-26.388 98.48c-.958 3.574-4.19 5.932-7.723 5.932-.686 0-1.382-.089-2.075-.274-4.268-1.144-6.801-5.53-5.657-9.798l26.388-98.48c1.144-4.268 5.533-6.798 9.798-5.657 4.268 1.143 6.8 5.53 5.657 9.797zm-54.79 17.055-35.737 30.115 35.737 30.115c3.378 2.847 3.809 7.894.962 11.273-1.583 1.877-3.845 2.845-6.122 2.845-1.821 0-3.65-.618-5.151-1.882l-42.997-36.233c-1.804-1.52-2.845-3.759-2.845-6.118s1.041-4.598 2.845-6.118l42.997-36.232c3.378-2.847 8.425-2.416 11.273.962 2.848 3.379 2.417 8.426-.962 11.273zm123.888 30.115c0 2.359-1.041 4.598-2.845 6.118l-42.997 36.233c-1.501 1.265-3.331 1.882-5.151 1.882-2.277 0-4.539-.967-6.122-2.845-2.847-3.379-2.416-8.426.962-11.273l35.737-30.115-35.737-30.115c-3.378-2.847-3.81-7.894-.962-11.273 2.848-3.378 7.895-3.809 11.273-.962l42.997 36.232c1.804 1.521 2.845 3.759 2.845 6.118z"></path>
                  </svg>
                </span>
                <span className="hero-subtitle-gradient w-fit relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-6 rounded-full">
                  <span className="font-bold text-xl">
                    Enterprise Applications
                  </span>
                </span>
                {/* <h3 className="text-white mb-4.5 font-semibold text-heading-6">
                  Grammar and Spell Check
                </h3> */}
                <p className="font-normal text-md text-slate-600">
                  Right from development and modernization to maintenance, we
                  fulfill the end-to-end requirement of the ERP and application
                  services using a value-added approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCards;