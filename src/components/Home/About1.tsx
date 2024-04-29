import Image from 'next/image';
import { Button1 } from '../Button/Button';
import { LineSvg } from './Headings/LineSvg';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <>
      <section className="relative mt-24 sm:mt-24 md:mt-32 xl:mt-40 -z-0">
        <div className="bg-white dark:bg-woodsmoke-950/95 py-[40px] xl:py-0">
          <div className="orbit_animation circle_1" />
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative flex items-center">
              <div className="mx-auto w-fit px-4 sm:px-6 lg:p-0 lg:h-fit">
                <div
                  className="bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700
                relative aspect-w-10 aspect-h-6 rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-fit"
                >
                  <iframe
                    width="570"
                    height="340"
                    src="https://www.youtube-nocookie.com/embed/0DysrE4uCsk?si=MibOm7PfXvI-lfy_&amp;controls=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>

                  {/* <Image
                    width={400}
                    height={400}
                    quality={100}
                    className="w-auto h-auto object-cover lg:h-full lg:w-full"
                    src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2102&amp;q=80"
                    alt="about_img"
                  /> */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-flamingo-600 via-flamingo-600 opacity-90"></div> */}
                  {/* <div className="absolute bottom-0">
                    <blockquote className="px-5 py-5">
                      <div className="relative text-lg font-medium text-white md:flex-grow">
                        <svg
                          className="absolute -top-5 left-2 transform -translate-x-3 -translate-y-2 h-8 w-8 text-white opacity-25"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                        </svg>
                        <p className="relative text-sm font-light tracking-wide font-inter ">
                          Tincidunt integer commodo, cursus etiam aliquam neque,
                          et. Consectetur pretium in volutpat, diam. Montes,
                          magna cursus nulla feugiat dignissim id lobortis amet.
                        </p>
                      </div>

                      <footer className="mt-4">
                        <p className="text-base font-semibold text-rose-200">
                          Amit Mittal, CEO at Bizmetric
                        </p>
                      </footer>
                    </blockquote>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="mt-12 lg:m-0 lg:pl-8">
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
                    className="mb-8 text-center font-inter tracking-[-0.02em]
                  !leading-[1.2] font-extrabold text-2xl lg:text-4xl md:text-5xl text-ebonyclay-900 dark:text-white lg:text-left"
                  >
                    Empowering you to make Intelligent-Driven Business{' '}
                    <span
                      className="relative font-cursive
                    bg-gradient-to-r from-formalGreenLight to-formalGreen bg-clip-text
                    text-transparent dark:to-secondaryLight overflow-hidden"
                    >
                      Decisions
                      <LineSvg classname={'right-1 w-[130px]'} />
                    </span>
                  </motion.h1>

                  <p className="mt-5 text-lg text-ebony-700 dark:text-slate-400/70 mb-5">
                    We are on a mission of solving tough data challenges and
                    helping you grow your business revenue.
                  </p>
                  <Button1 title="About Us" link="/about-us" />
                </div>
              </div>
            </div>
          </div>
          <div className="orbit_animation circle_2" />
        </div>
      </section>
    </>
  );
};

export default About;
