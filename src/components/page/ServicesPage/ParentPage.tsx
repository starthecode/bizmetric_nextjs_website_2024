import { Text } from '@/components/Home/Headings/Text';
import Industries from '@/components/Home/Industries/Industries';
import { IdentifyingSVG, DotAnimationSVG } from '@/components/svg';
import React from 'react';

const ParentPage = (homePage: any) => {
  console.log('homePage:', homePage);

  return (
    <section className="container mt-40">
      <div className="w-full text-center flex flex-col justify-center items-center">
        <div className="w-[700px]">
          <h1 className="mb-10 text-center font-inter tracking-[-0.02em] !leading-[1.2] font-extrabold text-2xl lg:text-4xl md:text-4xl text-ebonyclay-900 dark:text-white">
            Enabling Algorithms to Troubleshoot your{' '}
            <span className="relative font-cursive bg-gradient-to-r from-formalGreenLight to-formalGreen bg-clip-text text-transparent dark:to-secondaryLight overflow-hidden">
              Business Problems
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
            At Bizmetric, we’ve pioneered a robust solution for stream
            processing with Kafka at the edge, leveraging Kubernetes for
            seamless deployment. Here’s how it works:
          </p>
        </div>
      </div>
      <div className="mt-12 grid sm:grid-cols-3 lg:grid-cols-3 gap-3">
        <div className="relative group overflow-hidden p-[2rem] rounded-[1.5rem] bg-white border dark:border-woodsmoke-700 dark:bg-woodsmoke-950">
          <div
            aria-hidden="true"
            className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-success-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
          ></div>
          <div className="relative">
            <div className="flex gap-5 items-center">
              <div className="p-4 w-fit border border-success-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[1rem] dark:bg-gray-900 dark:border-white/15 before:rounded-[1rem] before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.98em"
                  height="1em"
                  viewBox="0 0 256 263"
                >
                  <defs>
                    <linearGradient
                      id="logosSupabaseIcon0"
                      x1="20.862%"
                      x2="63.426%"
                      y1="20.687%"
                      y2="44.071%"
                    >
                      <stop offset="0%" stop-color="#249361"></stop>
                      <stop offset="100%" stop-color="#3ecf8e"></stop>
                    </linearGradient>
                    <linearGradient
                      id="logosSupabaseIcon1"
                      x1="1.991%"
                      x2="21.403%"
                      y1="-13.158%"
                      y2="34.708%"
                    >
                      <stop offset="0%"></stop>
                      <stop offset="100%" stop-opacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#logosSupabaseIcon0)"
                    d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                  ></path>
                  <path
                    fill="url(#logosSupabaseIcon1)"
                    fill-opacity="0.2"
                    d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                  ></path>
                  <path
                    fill="#3ecf8e"
                    d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"
                  ></path>
                </svg>
              </div>
              <span className="font-bold text-lg">What We Do</span>
            </div>
            <div className="mt-6 pb-6 rounded-b-[1rem]">
              <p className="text-gray-700 dark:text-gray-300">
                We link the customer need with the market trends and come up
                with a solution that reduces the churn rate, ensures customer
                satisfaction, and improves customer retention at an enterprise
                level.
              </p>
            </div>
            <div className="flex gap-3 -mb-[1rem] py-4 border-dashed border-t dark:border-woodsmoke-600"></div>
          </div>
        </div>
        <div className="relative group overflow-hidden p-[2rem] rounded-[1.5rem] bg-white border dark:border-woodsmoke-700 dark:bg-woodsmoke-950">
          <div
            aria-hidden="true"
            className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-success-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
          ></div>
          <div className="relative">
            <div className="flex gap-5 items-center">
              <div className="p-4 w-fit border border-success-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[1rem] dark:bg-gray-900 dark:border-white/15 before:rounded-[1rem] before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.98em"
                  height="1em"
                  viewBox="0 0 256 263"
                >
                  <defs>
                    <linearGradient
                      id="logosSupabaseIcon0"
                      x1="20.862%"
                      x2="63.426%"
                      y1="20.687%"
                      y2="44.071%"
                    >
                      <stop offset="0%" stop-color="#249361"></stop>
                      <stop offset="100%" stop-color="#3ecf8e"></stop>
                    </linearGradient>
                    <linearGradient
                      id="logosSupabaseIcon1"
                      x1="1.991%"
                      x2="21.403%"
                      y1="-13.158%"
                      y2="34.708%"
                    >
                      <stop offset="0%"></stop>
                      <stop offset="100%" stop-opacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#logosSupabaseIcon0)"
                    d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                  ></path>
                  <path
                    fill="url(#logosSupabaseIcon1)"
                    fill-opacity="0.2"
                    d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                  ></path>
                  <path
                    fill="#3ecf8e"
                    d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"
                  ></path>
                </svg>
              </div>
              <span className="font-bold text-lg">How We Do</span>
            </div>
            <div className="mt-6 pb-6 rounded-b-[1rem]">
              <p className="text-gray-700 dark:text-gray-300">
                Our service is our strength. We develop highly personalized
                solutions that are powered by Machine Learning, Natural Language
                Processing, Predictive Analytics, and Recommendation Engines.
              </p>
            </div>
            <div className="flex gap-3 -mb-[1rem] py-4 border-dashed border-t dark:border-woodsmoke-600"></div>
          </div>
        </div>
        <div className="relative group overflow-hidden p-[2rem] rounded-[1.5rem] bg-white border dark:border-woodsmoke-700 dark:bg-woodsmoke-950">
          <div
            aria-hidden="true"
            className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-success-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
          ></div>
          <div className="relative">
            <div className="flex gap-5 items-center">
              <div className="p-4 w-fit border border-success-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[1rem] dark:bg-gray-900 dark:border-white/15 before:rounded-[1rem] before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.98em"
                  height="1em"
                  viewBox="0 0 256 263"
                >
                  <defs>
                    <linearGradient
                      id="logosSupabaseIcon0"
                      x1="20.862%"
                      x2="63.426%"
                      y1="20.687%"
                      y2="44.071%"
                    >
                      <stop offset="0%" stop-color="#249361"></stop>
                      <stop offset="100%" stop-color="#3ecf8e"></stop>
                    </linearGradient>
                    <linearGradient
                      id="logosSupabaseIcon1"
                      x1="1.991%"
                      x2="21.403%"
                      y1="-13.158%"
                      y2="34.708%"
                    >
                      <stop offset="0%"></stop>
                      <stop offset="100%" stop-opacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#logosSupabaseIcon0)"
                    d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                  ></path>
                  <path
                    fill="url(#logosSupabaseIcon1)"
                    fill-opacity="0.2"
                    d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                  ></path>
                  <path
                    fill="#3ecf8e"
                    d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"
                  ></path>
                </svg>
              </div>
              <span className="font-bold text-lg">Why We Do</span>
            </div>
            <div className="mt-6 pb-6 rounded-b-[1rem]">
              <p className="text-gray-700 dark:text-gray-300">
                The world is going digital. We want our clients to have easy
                access to the solutions that are smarter, quicker,
                transformative, and AI-driven. We aim for a smooth and
                successful digital ride.
              </p>
            </div>
            <div className="flex gap-3 -mb-[1rem] py-4 border-dashed border-t dark:border-woodsmoke-600"></div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <h1 className="mb-4 text-center font-inter tracking-[-0.02em] !leading-[1.2] font-extrabold text-2xl lg:text-4xl md:text-4xl text-ebonyclay-900 dark:text-white">
          Ways Business can Benefit with Artificial Intelligence
        </h1>

        <div className="grid grid-cols-3 mt-10">
          <div className="div">
            <span className="grid">
              <span className="flex items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="fill-junglegreen-500"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"></path>
                </svg>{' '}
                Smarter Resource Utilization
              </span>
              <span className="text-sm text-slate-400 ml-10">
                Focusing on what matters the most becomes cumbersome sometimes.
                To overcome such challenges, AI enables the strategic
                utilization of resources. It also ensures the investment of the
                business capitals is strategic, profit-driven, and in the right
                direction.
              </span>
            </span>
          </div>
          <div className="div">
            <span className="grid">
              <span className="flex items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="fill-junglegreen-500"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"></path>
                </svg>{' '}
                Improved Risk Management{' '}
              </span>
              <span className="text-sm text-slate-400 ml-10">
                Organizations are concerned about their data security.
                Enterprise governance and compliance-related issues are adding
                to the business complexities. The ability to identify
                security-related risks in real-time makes AI the first choice
                for clients.
              </span>
            </span>
          </div>
          <div className="div">
            <span className="grid">
              <span className="flex items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="fill-junglegreen-500"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"></path>
                </svg>{' '}
                Future Ready Business Framework{' '}
              </span>
              <span className="text-sm text-slate-400 ml-10">
                Predicting future business outcomes comes naturally with
                Artificial Intelligence. Right from real-time assistance to a
                personalized experience, AI navigates through the business
                portfolio and create a sense of trustworthiness among its users.
              </span>
            </span>
          </div>
        </div>
        <div className="border-[0.6px] border-woodsmoke-600/50 mt-24"></div>
      </div>

      <section className="relative mt-24 sm:mt-24 md:mt-32 xl:mt-40">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="text-center">
            <h2 className="font-inter tracking-[-0.02em] !leading-[1.2] font-extrabold text-2xl lg:text-4xl md:text-4xl text-ebonyclay-900 dark:text-white">
              Experiance our Diversified Industrial Exposure
            </h2>
            <p className="mx-auto mt-6 text-gray-700 dark:text-slate-400/70 md:w-3/4 lg:w-3/5">
              A growing team doesnt need to mean growing pains. Privacy, and the
              right tool for every step of your journey - Jira Software friction
              - company size.
            </p>
            <div
              role="tablist"
              aria-label="tabs"
              className="relative mx-auto mt-12 flex h-12 w-full items-center gap-x-1 overflow-hidden rounded-full border border-gray-200 bg-white dark:bg-woodsmoke-950/95 px-[3px] text-gray-600 dark:border-gray-700 dark:border-opacity-60 dark:text-gray-300 dark:shadow-none sm:w-max"
            >
              <div
                className="tab active tab-indicator h-10 rounded-full shadow-md transition-[left] duration-500 bg-flamingo-500 text-white "
                role="tab"
              >
                <button
                  aria-controls="panel-0"
                  className="group w-full items-center tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight "
                  type="button"
                >
                  <span className="m-auto block w-max text-sm font-medium tracking-wider font-display font-inter group-hover:text-accent">
                    Manufacturing
                  </span>
                </button>
              </div>
              <div className="tab text-slate-500 " role="tab">
                <button
                  aria-controls="panel-1"
                  className="group w-full items-center tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight "
                  type="button"
                >
                  <span className="m-auto block w-max text-sm font-medium tracking-wider font-display font-inter group-hover:text-accent">
                    Logistics
                  </span>
                </button>
              </div>
              <div className="tab text-slate-500 " role="tab">
                <button
                  aria-controls="panel-2"
                  className="group w-full items-center tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight "
                  type="button"
                >
                  <span className="m-auto block w-max text-sm font-medium tracking-wider font-display font-inter group-hover:text-accent">
                    Energy
                  </span>
                </button>
              </div>
              <div className="tab text-slate-500 " role="tab">
                <button
                  aria-controls="panel-3"
                  className="group w-full items-center tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight "
                  type="button"
                >
                  <span className="m-auto block w-max text-sm font-medium tracking-wider font-display font-inter group-hover:text-accent">
                    LifeSceince
                  </span>
                </button>
              </div>
              <div className="tab text-slate-500 " role="tab">
                <button
                  aria-controls="panel-4"
                  className="group w-full items-center tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight "
                  type="button"
                >
                  <span className="m-auto block w-max text-sm font-medium tracking-wider font-display font-inter group-hover:text-accent">
                    BFSI
                  </span>
                </button>
              </div>
              <div className="tab text-slate-500 " role="tab">
                <button
                  aria-controls="panel-5"
                  className="group w-full items-center tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight "
                  type="button"
                >
                  <span className="m-auto block w-max text-sm font-medium tracking-wider font-display font-inter group-hover:text-accent">
                    Retail
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-20 ">
            <div className="tab flex-1 gap-6 space-y-12 md:flex md:space-y-0">
              <div className="relative md:w-1/2">
                <div
                  className="panel inset-0 flex flex-col justify-center transition duration-500 md:absolute visible opacity-1 scale-90"
                  id="panel-0"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                      Make work flow across teams while connecting back to
                      company goals
                    </h3>
                    <p className="mt-8 text-gray-600 dark:text-gray-300">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eum omnis voluptatem accusantium nemo perspiciatis
                      delectus atque autem! repellat expedita consequatur!
                      Officiis id consequatur atque doloremque!
                    </p>
                    <div className="mt-12 space-y-6">
                      <div className="flex items-center gap-6">
                        <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                          <img
                            alt="icon illustration"
                            loading="lazy"
                            width="500"
                            height="500"
                            decoding="async"
                            data-nimg="1"
                            className="m-auto h-8 w-auto"
                          />
                        </div>
                        <div className="w-[calc(100%-7.5rem)]">
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                            Together as one
                          </h4>
                          <p className="mt-1 text-gray-600 dark:text-gray-400">
                            Accusantium nemo perspiciatis delectus atque autem!
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                          <img
                            alt="icon illustration"
                            loading="lazy"
                            width="500"
                            height="500"
                            decoding="async"
                            data-nimg="1"
                            className="m-auto h-8 w-auto"
                          />
                        </div>
                        <div className="w-[calc(100%-7.5rem)]">
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                            New ideas
                          </h4>
                          <p className="mt-1 text-gray-600 dark:text-gray-400">
                            Accusalectus atque autem accusantium nemo
                            perspiciatis delectus atque autem!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                <div className="relative p-5 xl:p-0 md:p-0 bg-white before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-flamingo-400/40 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-junglegreen-400/40 dark:bg-woodsmoke-900 dark:before:border-flamingo-400/40 dark:after:border-junglegreen-400/40">
                  <div className="relative overflow-clip py-2 h-[30rem] lg:p-2">
                    <div
                      data-target="panel-0"
                      className="transition duration-500 sm:px-5"
                    >
                      <section className="mt-5 relative z-10">
                        <div className="flex items-center p-2 rounded-lg mb-5 shadow-lg bg-white dark:bg-woodsmoke-950 ">
                          <img
                            alt=""
                            width="150"
                            height="150"
                            decoding="async"
                            data-nimg="1"
                            className="object-contain w-[100px] h-[100px] xl:w-auto xl:h-auto rounded-lg"
                            src=""
                          />
                          <div className="mt-0 ml-2 xl:ml-5 xl:mt-0 lg:w-1/2 lg:mt-0 ">
                            <p className="text-sm text-slate-300">Category</p>
                            <h1 className="block mt-2 text-sm md:text-md xl:text-lg font-semibold text-ebony-900 dark:text-white">
                              Case Study: Advanced Analytics (AWS)
                            </h1>
                            <a
                              href="#"
                              className="flex mt-2 text-flamingo-400 text-sm no-underline hover:text-blue-400"
                            >
                              View Case Study
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-[1.25rem] h-[1.25rem]"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center p-2 rounded-lg mb-5 shadow-lg bg-white dark:bg-woodsmoke-950 ">
                          <div className="mt-0 ml-2 xl:ml-5 xl:mt-0 lg:w-1/2 lg:mt-0 ">
                            <p className="text-sm text-slate-300">Category</p>
                            <h1 className="block mt-2 text-sm md:text-md xl:text-lg font-semibold text-ebony-900 dark:text-white">
                              Case Study: Spotfire to Power BI Migration
                            </h1>
                            <a
                              href="#"
                              className="flex mt-2 text-flamingo-400 text-sm no-underline hover:text-blue-400"
                            >
                              View Case Study
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-[1.25rem] h-[1.25rem]"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center p-2 rounded-lg mb-5 shadow-lg bg-white dark:bg-woodsmoke-950 ">
                          <img
                            alt=""
                            width="150"
                            height="150"
                            decoding="async"
                            data-nimg="1"
                            className="object-contain w-[100px] h-[100px] xl:w-auto xl:h-auto rounded-lg"
                          />
                          <div className="mt-0 ml-2 xl:ml-5 xl:mt-0 lg:w-1/2 lg:mt-0 ">
                            <p className="text-sm text-slate-300">Category</p>
                            <h1 className="block mt-2 text-sm md:text-md xl:text-lg font-semibold text-ebony-900 dark:text-white">
                              ChatGPT Solutions Case Study
                            </h1>
                            <a
                              href="#"
                              className="flex mt-2 text-flamingo-400 text-sm no-underline hover:text-blue-400"
                            >
                              View Case Study
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-[1.25rem] h-[1.25rem]"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-40">
        <div className="border-[0.6px] border-woodsmoke-600/50 mb-16"></div>
        <div>
          <h1 className="mb-10 text-left font-inter tracking-[-0.02em] !leading-[1.2] font-extrabold text-2xl lg:text-4xl md:text-4xl text-ebonyclay-900 dark:text-white">
            Defining Roadmaps and Strategies for Accelerated Business{' '}
            <span className="relative font-cursive bg-gradient-to-r from-formalGreenLight to-formalGreen bg-clip-text text-transparent dark:to-secondaryLight overflow-hidden">
              Outcomes
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
            Bizmetric is leading the digital transformation space in full
            capacity. We are successfully making ways into the era of
            disruptions by linking humans and machines. Harnessing technologies
            to reinvent the business outcome is our competitive advantage.
          </p>
          <div className="grid grid-cols-2 mt-10 gap-10">
            <div className="div">
              <div className="grid items-center mb-5 justify-start">
                <ul>
                  <li className="mb-5">
                    <span className="grid mb-5">
                      <span className="flex items-center">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          className="fill-junglegreen-500"
                          height="50"
                          width="50"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"></path>
                        </svg>{' '}
                        Creating outcome-based, digitally sophisticated, and
                        AI-driven business opportunities{' '}
                      </span>
                    </span>
                    <span className="grid mb-5">
                      <span className="flex items-center">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          className="fill-junglegreen-500"
                          height="40"
                          width="40"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"></path>
                        </svg>{' '}
                        Ethical transparency with zero tolerance towards set
                        back{' '}
                      </span>
                    </span>
                    <span className="grid mb-5">
                      <span className="flex items-center">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          className="fill-junglegreen-500"
                          height="40"
                          width="40"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"></path>
                        </svg>{' '}
                        Exceptional business deliverance with 100% customer
                        satisfaction{' '}
                      </span>
                    </span>
                    <span className="grid">
                      <span className="flex items-center">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          className="fill-junglegreen-500"
                          height="40"
                          width="40"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"></path>
                        </svg>{' '}
                        Tailored solutions for all kinds of business scenarios
                        and use cases
                      </span>
                    </span>
                  </li>
                </ul>
                <div className="w-fit p-1 rounded-3xl bg-gray-950/5 border dark:border-white/10 dark:bg-white/5">
                  <button className="*:select-none dark:shadow-flamingo-500/10 *:disabled:opacity-20 disabled:*:text-gray-300 disabled:dark:*:text-gray-700 dark:*:disabled:!text-white group relative z-[1] flex w-full h-11 items-center justify-center gap-1.5 rounded-3xl border border-flamingo-600 bg-flamingo-500 px-4 text-base text-white shadow-md shadow-flamingo-200 before:absolute before:inset-0 before:rounded-3xl before:border before:border-flamingo-500 before:bg-gradient-to-b before:from-flamingo-600 hover:bg-flamingo-600 active:bg-flamingo-700 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-950/40 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:bg-flamingo-600 dark:before:border-0 dark:before:border-t dark:before:border-flamingo-400 dark:before:shadow-inner dark:before:shadow-white/10 dark:hover:bg-flamingo-700 dark:active:bg-flamingo-800 dark:active:before:from-flamingo-700 dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none [&amp;>*:not(.sr-only)]:relative">
                    <span className="flex items-center text-nowrap">
                      Talk to our expert
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        className="ml-2 w-4 h-4"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative w-full h-128 mb-20 lg:mb-0 animate__animated animate__fadeIn">
              <div className="absolute top-0 right-0 h-full w-full mt-6 -mr-6 bg-junglegreen-300/60 rounded-xl"></div>
              <img
                alt="single solution image"
                loading="lazy"
                width="400"
                height="400"
                decoding="async"
                data-nimg="1"
                className="absolute top-0 right-0 h-full w-full rounded-xl object-cover object-top"
                src="/_next/image?url=https%3A%2F%2Ftest.experimentalapp.xyz%2Fwp-content%2Fuploads%2F2023%2F08%2Fmedium-shot-woman-holding-tablet.jpg&amp;w=828&amp;q=75"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-999 overflow-hidden rounded-[30px] bg-gradient-to-t from-white to-transparent dark:bg-gradient-to-t dark:from-woodsmoke-950 dark:to-woodsmoke-950/98 pt-25 px-4 pb-20 sm:px-20 lg:px-27.5 mt-40">
        <div className="flex justify-center text-center">
          <Text
            small={'Approach'}
            main={'Our Approach'}
            classes={'font-inter'}
          />
          <h1 className="mb-10 text-left font-inter tracking-[-0.02em] !leading-[1.2] font-extrabold text-2xl lg:text-4xl md:text-4xl text-ebonyclay-900 dark:text-white"></h1>
        </div>

        <DotAnimationSVG />
        <div className="relative w-full h-full mt-20">
          <div className="absolute flex justify-center items-center top-0 left-0 rounded-full before:bg-ebony-600/20 after:bg-ebony-600/30 circle__pulse">
            <svg
              className="w-[4rem] h-[4rem]"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  x1="0%"
                  y1="32.443%"
                  x2="104.18%"
                  y2="50%"
                  id="a"
                >
                  <stop
                    stop-color="#FFF"
                    stop-opacity=".299"
                    offset="0%"
                  ></stop>
                  <stop
                    stop-color="#7587E4"
                    stop-opacity="0"
                    offset="100%"
                  ></stop>
                </linearGradient>
                <linearGradient x1="18.591%" y1="0%" x2="100%" y2="100%" id="b">
                  <stop stop-color="#818CF8" offset="0%"></stop>
                  <stop stop-color="#C7D2FE" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <path fill="#3730A3" d="M16 18.5V32l15.999-9.25V9.25z"></path>
                <path fill="#4F46E5" d="m0 23 16 9V18.501L0 9.251z"></path>
                <path
                  fill-opacity=".64"
                  fill="url(#a)"
                  d="M16 13 0 23l16 9 16-9z"
                ></path>
                <path
                  fill="url(#b)"
                  d="M16 0 0 9.25l16 9.25 15.999-9.25z"
                ></path>
              </g>
            </svg>
          </div>

          <div className="block mt-28">
            <div className="relative overflow-hidden w-[1px] h-[90px] m-auto">
              <div
                className="absolute w-full h-[40%] bg-gray-500 top-[30%]"
                style={{ boxShadow: '0px 0px 30px 20px grey' }}
              ></div>
            </div>
            <div className="border-[0.6px] border-woodsmoke-600/50" />
            <div className="grid grid-cols-6">
              <div className="flex flex-col items-center justify-center">
                <div className="relative overflow-hidden w-[1px] h-[60px] m-auto">
                  <div
                    className="absolute w-full h-[40%] bg-gray-500 top-[30%]"
                    style={{ boxShadow: '0px 0px 30px 20px grey' }}
                  ></div>
                </div>
                <div className="border border-gray-600/30 dark:bg-woodsmoke-950/95 w-[150px] shadow-lg bg-white rounded-xl p-3 flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center items-center p-5">
                    <span className="flex justify-center items-center bg-gradient-to-b from-[#0f172a] to-[#1e293b] w-[4rem] h-[4rem] rounded-full mb-5">
                      <IdentifyingSVG />
                    </span>
                    <h1 className="text-center text-md uppercase font-bold">
                      Identifying
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="relative overflow-hidden w-[1px] h-[60px] m-auto">
                  <div
                    className="absolute w-full h-[40%] bg-gray-500 top-[30%]"
                    style={{ boxShadow: '0px 0px 30px 20px grey' }}
                  ></div>
                </div>
                <div className="border border-gray-600/30 dark:bg-woodsmoke-950/95 w-[150px] shadow-lg bg-white rounded-xl p-3 flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center items-center p-5">
                    <span className="flex justify-center items-center bg-gradient-to-b from-[#0f172a] to-[#1e293b] w-[4rem] h-[4rem] rounded-full mb-5">
                      <IdentifyingSVG />
                    </span>
                    <h1 className="text-center text-md uppercase font-bold">
                      Mitigating
                    </h1>
                  </div>
                </div>
              </div>{' '}
              <div className="flex flex-col items-center justify-center">
                <div className="relative overflow-hidden w-[1px] h-[60px] m-auto">
                  <div
                    className="absolute w-full h-[40%] bg-gray-500 top-[30%]"
                    style={{ boxShadow: '0px 0px 30px 20px grey' }}
                  ></div>
                </div>
                <div className="border border-gray-600/30 dark:bg-woodsmoke-950/95 w-[150px] shadow-lg bg-white rounded-xl p-3 flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center items-center p-5">
                    <span className="flex justify-center items-center bg-gradient-to-b from-[#0f172a] to-[#1e293b] w-[4rem] h-[4rem] rounded-full mb-5">
                      <IdentifyingSVG />
                    </span>
                    <h1 className="text-center text-md uppercase font-bold">
                      Exercising
                    </h1>
                  </div>
                </div>
              </div>{' '}
              <div className="flex flex-col items-center justify-center">
                <div className="relative overflow-hidden w-[1px] h-[60px] m-auto">
                  <div
                    className="absolute w-full h-[40%] bg-gray-500 top-[30%]"
                    style={{ boxShadow: '0px 0px 30px 20px grey' }}
                  ></div>
                </div>
                <div className="border border-gray-600/30 dark:bg-woodsmoke-950/95 w-[150px] shadow-lg bg-white rounded-xl p-3 flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center items-center p-5">
                    <span className="flex justify-center items-center bg-gradient-to-b from-[#0f172a] to-[#1e293b] w-[4rem] h-[4rem] rounded-full mb-5">
                      <IdentifyingSVG />
                    </span>
                    <h1 className="text-center text-md uppercase font-bold">
                      Deploying
                    </h1>
                  </div>
                </div>
              </div>{' '}
              <div className="flex flex-col items-center justify-center">
                <div className="relative overflow-hidden w-[1px] h-[60px] m-auto">
                  <div
                    className="absolute w-full h-[40%] bg-gray-500 top-[30%]"
                    style={{ boxShadow: '0px 0px 30px 20px grey' }}
                  ></div>
                </div>
                <div className="border border-gray-600/30 dark:bg-woodsmoke-950/95 w-[150px] shadow-lg bg-white rounded-xl p-3 flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center items-center p-5">
                    <span className="flex justify-center items-center bg-gradient-to-b from-[#0f172a] to-[#1e293b] w-[4rem] h-[4rem] rounded-full mb-5">
                      <IdentifyingSVG />
                    </span>
                    <h1 className="text-center text-md uppercase font-bold">
                      Testing
                    </h1>
                  </div>
                </div>
              </div>{' '}
              <div className="flex flex-col items-center justify-center">
                <div className="relative overflow-hidden w-[1px] h-[60px] m-auto">
                  <div
                    className="absolute w-full h-[40%] bg-gray-500 top-[30%]"
                    style={{ boxShadow: '0px 0px 30px 20px grey' }}
                  ></div>
                </div>
                <div className="border border-gray-600/30 dark:bg-woodsmoke-950/95 w-[150px] shadow-lg bg-white rounded-xl p-3 flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center items-center p-5">
                    <span className="flex justify-center items-center bg-gradient-to-b from-[#0f172a] to-[#1e293b] w-[4rem] h-[4rem] rounded-full mb-5">
                      <IdentifyingSVG />
                    </span>
                    <h1 className="text-center text-md uppercase font-bold">
                      Live
                    </h1>
                  </div>
                </div>
              </div>{' '}
            </div>
          </div>
        </div>
        <div className="absolute [mask-image:linear-gradient(to_bottom,transparent,white)] h-96 inset-x-0 opacity-60 rotate-0 text-gray-500/20 bottom-0">
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
      </div>
    </section>
  );
};

export default ParentPage;
