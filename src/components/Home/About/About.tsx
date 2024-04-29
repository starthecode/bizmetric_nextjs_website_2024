import Image from 'next/image';
import { Button1 } from '../../Button/Button';
import { LineSvg } from '../Headings/LineSvg';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <>
      <section
        className="relative overflow-hidden overlay_background mt-24 sm:mt-24 md:mt-32 xl:mt-40 -z-0"
        style={{
          backgroundImage: `url('/images/about-banner.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="bg-transparent py-[40px] xl:py-0">
          <div className="orbit_animation circle_1" />
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mt-12 lg:m-0 col-span-2">
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

                  <p className="mt-3 text-lg text-ebony-700 dark:text-slate-400/70 mb-3">
                    We are on a mission of solving tough data challenges <br />{' '}
                    and helping you grow your business revenue.
                  </p>
                  {/* <Button1 title="About Us" link="/about-us" /> */}
                  <div className="relative w-fit mt-10">
                    <div
                      className="bg-flamingo-500 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-flamingo-400/40 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-junglegreen-400/40 dark:bg-gray-800 dark:before:border-flamingo-400/40 dark:after:border-junglegreen-400/40
                relative aspect-w-10 aspect-h-6 rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-fit"
                    >
                      <iframe
                        className="relative z-10"
                        width="430"
                        height="240"
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
          <div className="orbit_animation circle_2" />
        </div>
      </section>
    </>
  );
};

export default About;
