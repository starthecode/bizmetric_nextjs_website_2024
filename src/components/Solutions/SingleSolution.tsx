import React from 'react';
import { IconArrow } from '../icons';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LineSvg } from '../Home/Headings/LineSvg';
import { IoIosCheckmark } from 'react-icons/io';
import { BiSend } from 'react-icons/bi';
import Cards from './Cards';
import Slider from './Slider';

// const swiper = new Swiper('.proofSlides', {
//   effect: 'cube',
//   cubeEffect: {
//     slideShadows: false,
//     shadow: false,
//     shadowOffset: 20,
//     shadowScale: 0.94,
//   },
//   loop: true,
//   autoplay: {
//     delay: 3000,
//     duration: 500,
//   },
//   grabCursor: true,
//   modules: [Pagination],
//   centeredSlides: true,
//   pagination: {
//     el: '.swiper-pagination',
//   },
// });

const SingleSolution = () => {
  return (
    <section id="services" className="scroll-mt-17 relative pt-5">
      <div className="mx-auto px-2 w-fit">
        <div
          className="wow fadeInUp mb-16 text-center relative z-999"
          style={{ visibility: 'visible' }}
        >
          <div className="sm:col-span-5">
            <div className="relative rounded-3xl border-[1px] border-woodsmoke-300/20 bg-white dark:bg-woodsmoke-950/95 z-10">
              <div className="group relative overflow-hidden rounded-3xl p-7 box-hover-2 dark:before:bg-flamingo-500/20">
                <div className="relative z-20 flex flex-col justify-center items-center">
                  <iframe
                    className="relative z-10 rounded-2xl"
                    width="620"
                    height="350"
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
          </div>
        </div>
      </div>
      <div className="container">
        <div className="border-[0.6px] border-woodsmoke-600/50 mb-16"></div>
        <h1 className="mb-10 text-left font-inter tracking-[-0.02em] !leading-[1.2] font-extrabold text-2xl lg:text-4xl md:text-4xl text-ebonyclay-900 dark:text-white">
          Stream Processing with Kafka at the{' '}
          <span className="relative font-cursive bg-gradient-to-r from-formalGreenLight to-formalGreen bg-clip-text text-transparent dark:to-secondaryLight overflow-hidden">
            Edge
            <svg
              className="absolute right-1 w-[130px]"
              viewBox="0 0 220 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M134.66 13.107c-10.334-.37-20.721-.5-31.12-.291l-2.6.06c-4.116.04-8.193.602-12.3.749-14.502.43-29.029 1.196-43.514 2.465-6.414.63-12.808 1.629-19.04 2.866-7.93 1.579-16.113 3.71-23.367 5.003-2.211.374-3.397-1.832-2.31-4.906.5-1.467 1.838-3.456 3.418-4.813a16.047 16.047 0 0 1 6.107-3.365c16.88-4.266 33.763-6.67 51.009-7.389C71.25 3.187 81.81 1.6 92.309.966c11.53-.65 23.097-.938 34.66-.96 7.117-.054 14.25.254 21.36.318l16.194.803 4.62.39c3.85.32 7.693.618 11.53.813 8.346.883 16.673.802 25.144 2.159 1.864.276 3.714.338 5.566.873l.717.225c6.162 1.977 7.92 3.64 7.9 7.197l-.003.203c-.017.875.05 1.772-.112 2.593-.581 2.762-4.066 4.12-8.637 3.63-13.696-1.06-27.935-3.332-42.97-4.168-11.055-.83-22.314-1.459-33.596-1.603l-.022-.332Z"
                fill="#D1D5DB"
                fill-rule="evenodd"
              ></path>
            </svg>
          </span>
        </h1>
        <p>
          At Bizmetric, we’ve pioneered a robust solution for stream processing
          with Kafka at the edge, leveraging Kubernetes for seamless deployment.
          <br />
          Here’s how it works:
        </p>

        <div className="grid grid-cols-2 mt-10 gap-10">
          <div className="div">
            <div className="grid items-center mb-5 justify-start">
              <ul>
                <li className="mb-5">
                  <span className="grid">
                    <span className="flex items-center">
                      <IoIosCheckmark
                        size={40}
                        className="fill-junglegreen-500"
                      />{' '}
                      Data Streaming via MQTT Broker to Kafka{' '}
                    </span>
                    <span className="text-sm text-slate-400 ml-10">
                      Sensors and IoT devices transmit data to an optional MQTT
                      broker, which then forwards messages to Kafka.
                    </span>
                  </span>
                </li>
                <li className="mb-5">
                  <span className="grid">
                    <span className="flex items-center">
                      <IoIosCheckmark
                        size={40}
                        className="fill-junglegreen-500"
                      />{' '}
                      Data Streaming via MQTT Broker to Kafka{' '}
                    </span>
                    <span className="text-sm text-slate-400 ml-10">
                      Sensors and IoT devices transmit data to an optional MQTT
                      broker, which then forwards messages to Kafka.
                    </span>
                  </span>
                </li>
                <li className="mb-5">
                  <span className="grid">
                    <span className="flex items-center">
                      <IoIosCheckmark
                        size={40}
                        className="fill-junglegreen-500"
                      />{' '}
                      Data Streaming via MQTT Broker to Kafka{' '}
                    </span>
                    <span className="text-sm text-slate-400 ml-10">
                      Sensors and IoT devices transmit data to an optional MQTT
                      broker, which then forwards messages to Kafka.
                    </span>
                  </span>
                </li>
                <li className="mb-5">
                  <span className="grid">
                    <span className="flex items-center">
                      <IoIosCheckmark
                        size={40}
                        className="fill-junglegreen-500"
                      />{' '}
                      Data Streaming via MQTT Broker to Kafka{' '}
                    </span>
                    <span className="text-sm text-slate-400 ml-10">
                      Sensors and IoT devices transmit data to an optional MQTT
                      broker, which then forwards messages to Kafka.
                    </span>
                  </span>
                </li>
                <li className="mb-5">
                  <span className="grid">
                    <span className="flex items-center">
                      <IoIosCheckmark
                        size={40}
                        className="fill-junglegreen-500"
                      />{' '}
                      Data Streaming via MQTT Broker to Kafka{' '}
                    </span>
                    <span className="text-sm text-slate-400 ml-10">
                      Sensors and IoT devices transmit data to an optional MQTT
                      broker, which then forwards messages to Kafka.
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative w-full h-128 mb-20 lg:mb-0 animate__animated animate__fadeIn">
            <div className="absolute top-0 right-0 h-full w-full mt-6 -mr-6 bg-junglegreen-300/60 rounded-xl"></div>
            <img
              className="absolute top-0 right-0 h-full w-full rounded-xl object-cover object-top"
              src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-1.png"
              alt=""
            />
          </div>
        </div>
        <div className="mt-24">
          <h1 className="mb-4 text-center font-inter tracking-[-0.02em] !leading-[1.2] font-extrabold text-2xl lg:text-4xl md:text-4xl text-ebonyclay-900 dark:text-white">
            Addressing Deployment Challenges{' '}
          </h1>
          <p className="text-center">
            The deployment of our solution, particularly in the wake of
            Hivecell’s closure, presented unique challenges:
          </p>
          <div className="grid grid-cols-3 mt-10">
            <div className="div">
              <span className="grid">
                <span className="flex items-center">
                  <IoIosCheckmark size={40} className="fill-junglegreen-500" />{' '}
                  Technology Transition{' '}
                </span>
                <span className="text-sm text-slate-400 ml-10">
                  We swiftly adapted to the absence of the Hivecell platform,
                  ensuring uninterrupted functionality.
                </span>
              </span>
            </div>
            <div className="div">
              <span className="grid">
                <span className="flex items-center">
                  <IoIosCheckmark size={40} className="fill-junglegreen-500" />{' '}
                  Cost Implications{' '}
                </span>
                <span className="text-sm text-slate-400 ml-10">
                  We carefully evaluated our financial strategies to mitigate
                  the economic impact of Hivecell’s closure.
                </span>
              </span>
            </div>
            <div className="div">
              <span className="grid">
                <span className="flex items-center">
                  <IoIosCheckmark size={40} className="fill-junglegreen-500" />{' '}
                  Support Constraints{' '}
                </span>
                <span className="text-sm text-slate-400 ml-10">
                  The lack of technical support and updates posed challenges,
                  underscoring the need for robust solutions.
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="border-[0.6px] border-woodsmoke-600/50 mt-24"></div>
      </div>
      <div className="container mt-20">
        <h1 className="mb-10 text-left font-inter tracking-[-0.02em] !leading-[1.2] font-extrabold text-2xl lg:text-4xl md:text-4xl text-ebonyclay-900 dark:text-white">
          Bizmetric and Kelvin.ai{' '}
          <span className="relative font-cursive bg-gradient-to-r from-formalGreenLight to-formalGreen bg-clip-text text-transparent dark:to-secondaryLight overflow-hidden">
            Collaboration
            <svg
              className="absolute right-1 w-[130px]"
              viewBox="0 0 220 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M134.66 13.107c-10.334-.37-20.721-.5-31.12-.291l-2.6.06c-4.116.04-8.193.602-12.3.749-14.502.43-29.029 1.196-43.514 2.465-6.414.63-12.808 1.629-19.04 2.866-7.93 1.579-16.113 3.71-23.367 5.003-2.211.374-3.397-1.832-2.31-4.906.5-1.467 1.838-3.456 3.418-4.813a16.047 16.047 0 0 1 6.107-3.365c16.88-4.266 33.763-6.67 51.009-7.389C71.25 3.187 81.81 1.6 92.309.966c11.53-.65 23.097-.938 34.66-.96 7.117-.054 14.25.254 21.36.318l16.194.803 4.62.39c3.85.32 7.693.618 11.53.813 8.346.883 16.673.802 25.144 2.159 1.864.276 3.714.338 5.566.873l.717.225c6.162 1.977 7.92 3.64 7.9 7.197l-.003.203c-.017.875.05 1.772-.112 2.593-.581 2.762-4.066 4.12-8.637 3.63-13.696-1.06-27.935-3.332-42.97-4.168-11.055-.83-22.314-1.459-33.596-1.603l-.022-.332Z"
                fill="#D1D5DB"
                fill-rule="evenodd"
              ></path>
            </svg>
          </span>
        </h1>
        <p>
          As part of our collaboration with Kelvin.ai, Bizmetric provided its
          core technical expertise while harnessing the Kelvin Platform to
          enhance efficiency, simplify and streamline deployment.
        </p>

        <div className="grid grid-cols-2 mt-10 gap-10">
          <div className="relative w-full h-[300px] mb-20 lg:mb-0">
            <div className="absolute top-0 left-0 h-full w-full -mt-6 -ml-6 bg-junglegreen-300/60 rounded-xl"></div>
            <img
              className="absolute top-0 right-0 h-full w-full rounded-xl object-cover object-top"
              src="https://wp.alithemes.com/html/monst/assets/imgs/placeholders/img-1.png"
              alt=""
            />
          </div>
          <div className="flex h-full items-center">
            <ul className="flex flex-col h-full text-center items-center justify-center">
              <li>
                <span className="text-3xl font-bold">
                  Kelvin.ai Kelvin Platform
                </span>
              </li>
              <li>
                <span className="text-3xl font-bold">+</span>
              </li>
              <li>
                <span className="text-3xl font-bold">
                  Bizmetric Technical Expertise
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-[0.6px] border-woodsmoke-600/50 mt-24"></div>
      </div>
      <div className="container mt-16">
        <h1 className="mb-4 text-center font-inter tracking-[-0.02em] !leading-[1.2] font-extrabold text-2xl lg:text-4xl md:text-4xl text-ebonyclay-900 dark:text-white">
          Benefits of the Collaboration{' '}
        </h1>
        <p className="text-center">
          Bizmetric’s collaboration with Kelvin.ai offers a plethora of
          benefits, including:
        </p>
        <Cards />

        <div className="border-[0.6px] border-woodsmoke-600/50 mt-24 mb-16"></div>
      </div>
      <div className="div">
        <h1 className="mb-4 text-center font-inter tracking-[-0.02em] !leading-[1.2] font-extrabold text-2xl lg:text-4xl md:text-4xl text-ebonyclay-900 dark:text-white">
          Why Choose Us?
        </h1>
        <Slider />
      </div>

      <div
        className="relative container py-40 flex justify-center bg-top
      bg-no-repeat bg-cover mt-16 before:absolute dark:before:opacity-[0.1] before:content-[url('https://wp.alithemes.com/html/monst/assets/imgs/elements/blob.svg')] before:inline before:h-full items-center before:w-full"
      >
        <div className="relative max-w-3xl w-full">
          <svg
            className="absolute z-10 -top-10 right-10"
            xmlns="http://www.w3.org/2000/svg"
            width="69"
            height="77"
          >
            <path
              className="fill-junglegreen-500"
              d="M19.987 69.903a16 16 0 0 1-4.12.88 10 10 0 0 1-4.6-.76 9.15 9.15 0 0 1-3.71-3l-.63-.93-.51-1a9.07 9.07 0 0 1-.76-2.31 16.42 16.42 0 0 1 1-8.18 46 46 0 0 1 3.11-6.78 58.58 58.58 0 0 1 8.65-11.79 60.66 60.66 0 0 1 11.18-9.44 45.88 45.88 0 0 1 9.67-4.87 28.1 28.1 0 0 1 11-1.65 25.07 25.07 0 0 1 9.68 2.59 18.08 18.08 0 0 1 4.34 2.92 12.86 12.86 0 0 1 3.16 4.55 13.64 13.64 0 0 1 1 5.31 20.71 20.71 0 0 1-.7 5 35.54 35.54 0 0 1-3.79 8.91 52.15 52.15 0 0 1-5.46 7.63 72.54 72.54 0 0 1-6.52 6.6 58.48 58.48 0 0 1-15.51 10.06 39.78 39.78 0 0 1-3.91 1.47c-.67.2-1.35.39-2 .56a10.66 10.66 0 0 1-2.74.25 7.59 7.59 0 0 1-2.73-.63 3.17 3.17 0 0 1-1.82-1.94c-.48-1.77.65-3.57 1.92-5 .15-.17.33-.38.46-.51l.37-.37c.25-.25.5-.5.75-.73.5-.49 1-.94 1.54-1.4 1-.91 2.11-1.76 3.2-2.59a66 66 0 0 1 6.81-4.53 44.56 44.56 0 0 1 9.75-4.32 22.28 22.28 0 0 1 5.53-.91 13.5 13.5 0 0 1 5.91 1.09 10.75 10.75 0 0 1 4.61 4.13l.74 1.32c.229.488.42.993.57 1.51.28.977.438 1.984.47 3a17.19 17.19 0 0 1-.73 5.58 21.73 21.73 0 0 1-2.16 5.06c-1.24 2-2.26 2.51-2.44 2.23-.18-.28.17-1.39.5-3.15a24.07 24.07 0 0 0 .33-7 13.91 13.91 0 0 0-.83-3.9 8.73 8.73 0 0 0-2.2-2.87 6.64 6.64 0 0 0-3-1.32 12.39 12.39 0 0 0-4 .05 31.68 31.68 0 0 0-8.84 3.07 59.18 59.18 0 0 0-8.36 5.16c-1.34 1-2.64 2-3.84 3.05-.3.27-.61.54-.88.81l-.54.52c-.11.1-.08.06-.12.11-.04.05 0 .15.12.16h.17l.42-.09.56-.14c.75-.2 1.51-.44 2.26-.71a47.25 47.25 0 0 0 8.79-4.41 65.55 65.55 0 0 0 14.92-13.36 41 41 0 0 0 6.16-10.25c1.47-3.62 2.17-7.66.82-10.69a8.43 8.43 0 0 0-3.29-3.74 19.61 19.61 0 0 0-2.45-1.33c-.45-.17-.89-.37-1.34-.54l-1.37-.43a23 23 0 0 0-11.5 0 38.32 38.32 0 0 0-12.15 5.44 58.11 58.11 0 0 0-10.35 8.85 53.09 53.09 0 0 0-8 11.06 32.11 32.11 0 0 0-2.51 6.2c-.57 2.09-.72 4.22.06 5.77a6.4 6.4 0 0 0 2.2 2.63 5.15 5.15 0 0 0 1.51.61 6.23 6.23 0 0 0 1.74.11 17.27 17.27 0 0 0 7.38-2.8c4.75-2.91 9-6.88 13.05-10.89a97.44 97.44 0 0 0 16-20.33 49.73 49.73 0 0 0 4.91-11.72l.37-1.49.27-1.54c.199-.989.32-1.992.36-3a9.11 9.11 0 0 0-1.23-5.27 6.61 6.61 0 0 0-3.08-2.43 13.93 13.93 0 0 0-4.31-.84 32 32 0 0 0-9.31 1.08 59.27 59.27 0 0 0-9.08 3.11 60.65 60.65 0 0 0-8.39 4.66c-2.37 1.57-4.58 3.3-6.83 5.12-2.09 1.69-3.79 3.15-5.22 4.38a77.994 77.994 0 0 1-3.64 2.95 14 14 0 0 1-4.68 2.64 10.65 10.65 0 0 1-1.73.49c-.72 0-.44-.89.68-2.61a54.19 54.19 0 0 1 5.93-7.22 86.61 86.61 0 0 1 14.37-12.19 60.24 60.24 0 0 1 4.18-2.53 45.5 45.5 0 0 1 4.49-2.2 55.38 55.38 0 0 1 9.54-3 37.12 37.12 0 0 1 10.52-.89 17.78 17.78 0 0 1 5.84 1.44 12.52 12.52 0 0 1 5.32 4.36 13.2 13.2 0 0 1 2.19 6.31 21.59 21.59 0 0 1-.28 5.76 45.26 45.26 0 0 1-2.91 9.94 68.73 68.73 0 0 1-7.37 13 104.64 104.64 0 0 1-9.37 11.25 134.3 134.3 0 0 1-10.58 9.94 61.69 61.69 0 0 1-6 4.45 32.1 32.1 0 0 1-6.92 3.51l-.04-.12Z"
            ></path>
          </svg>
          <div className="relative overflow-hidden max-w-2xl mx-auto text-center bg-white dark:bg-woodsmoke-950 rounded-2xl p-5">
            <div
              aria-hidden="true"
              className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-junglegreen-600 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
            ></div>
            <div className="max-w-md mb-8 mx-auto ">
              <h1 className="mb-10 text-left font-inter tracking-[-0.02em] !leading-[1.2] font-extrabold text-2xl lg:text-4xl md:text-4xl text-ebonyclay-900 dark:text-white">
                Lets talk about{' '}
                <span className="relative font-cursive bg-gradient-to-r from-formalGreenLight to-formalGreen bg-clip-text text-transparent dark:to-secondaryLight overflow-hidden">
                  everything
                  <svg
                    className="absolute right-1 w-[130px]"
                    viewBox="0 0 220 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M134.66 13.107c-10.334-.37-20.721-.5-31.12-.291l-2.6.06c-4.116.04-8.193.602-12.3.749-14.502.43-29.029 1.196-43.514 2.465-6.414.63-12.808 1.629-19.04 2.866-7.93 1.579-16.113 3.71-23.367 5.003-2.211.374-3.397-1.832-2.31-4.906.5-1.467 1.838-3.456 3.418-4.813a16.047 16.047 0 0 1 6.107-3.365c16.88-4.266 33.763-6.67 51.009-7.389C71.25 3.187 81.81 1.6 92.309.966c11.53-.65 23.097-.938 34.66-.96 7.117-.054 14.25.254 21.36.318l16.194.803 4.62.39c3.85.32 7.693.618 11.53.813 8.346.883 16.673.802 25.144 2.159 1.864.276 3.714.338 5.566.873l.717.225c6.162 1.977 7.92 3.64 7.9 7.197l-.003.203c-.017.875.05 1.772-.112 2.593-.581 2.762-4.066 4.12-8.637 3.63-13.696-1.06-27.935-3.332-42.97-4.168-11.055-.83-22.314-1.459-33.596-1.603l-.022-.332Z"
                      fill="#D1D5DB"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Please enter the details and submit the form below to check our
                Azure Marketplace Offer, Case Studies and more.
              </p>
            </div>
            <div>
              <form>
                {/* <div
                className="mb-4 text-sm"
                data-wow-delay=".5s"
              >
                <span className="mr-4 font-semibold">Departament:</span>
                <label className="mr-4">
                  <input
                    className="mr-1"
                    type="radio"
                    name="department"
                    value="1"
                    checked
                  />
                  <span>Support</span>
                </label>
                <label>
                  <input
                    className="mr-1"
                    type="radio"
                    name="department"
                    value="2"
                  />
                  <span>Sales</span>
                </label>
              </div> */}
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-slate-100 dark:bg-woodsmoke-900 rounded outline-none"
                      type="text"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-slate-100 dark:bg-woodsmoke-900 rounded outline-none"
                      type="email"
                      placeholder="Business Email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5 mb-5">
                  <div>
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-slate-100 dark:bg-woodsmoke-900 rounded outline-none"
                      type="text"
                      placeholder="Company Name"
                    />
                  </div>
                  <div>
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-slate-100 dark:bg-woodsmoke-900 rounded outline-none"
                      type="text"
                      placeholder="Country"
                    />
                  </div>
                </div>

                {/* <div
                className="mb-4"

              >
                <textarea
                  className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-slate-100 dark:bg-woodsmoke-900 rounded outline-none"
                  placeholder="Message..."
                ></textarea>
              </div> */}

                <div className="flex justify-between items-center">
                  <label>
                    <input
                      className="mr-1"
                      type="checkbox"
                      name="terms"
                      value="1"
                    />
                    <span className="text-sm font-semibold">
                      I agree to terms and conditions.
                    </span>
                  </label>

                  <div className="p-1 rounded-3xl bg-gray-950/5 border dark:border-white/10 dark:bg-white/5">
                    <button className="*:select-none dark:shadow-flamingo-500/10 *:disabled:opacity-20 disabled:*:text-gray-300 disabled:dark:*:text-gray-700 dark:*:disabled:!text-white group relative z-[1] flex w-full h-11 items-center justify-center gap-1.5 rounded-3xl border border-flamingo-600 bg-flamingo-500 px-4 text-base text-white shadow-md shadow-flamingo-200 before:absolute before:inset-0 before:rounded-3xl before:border before:border-flamingo-500 before:bg-gradient-to-b before:from-flamingo-600 hover:bg-flamingo-600 active:bg-flamingo-700 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-950/40 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:bg-flamingo-600 dark:before:border-0 dark:before:border-t dark:before:border-flamingo-400 dark:before:shadow-inner dark:before:shadow-white/10 dark:hover:bg-flamingo-700 dark:active:bg-flamingo-800 dark:active:before:from-flamingo-700 dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none [&>*:not(.sr-only)]:relative">
                      <span className="flex items-center text-nowrap">
                        Submit
                        <BiSend className="ml-2 w-4 h-4" />
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleSolution;
