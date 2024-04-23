import Image from 'next/image';
import imgG from '../../assets/imgs/gradient_dark.png';
import imgG1 from '../../assets/imgs/ai_img01.png';
import imgG2 from '../../assets/imgs/ai_img02.jpg';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
export const RightCard = ({ item }: { item: any }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <>
      <div className="relative flex 2xl:justify-end justify-center text-center lg:pl-32 lg:text-right">
        <div className="relative animate-[spin_30s_linear_infinite] -z-1">
          <span className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:h-2 after:w-8 after:rounded-md after:bg-junglegreen-600/20 relative after:z-10"></span>
          <span className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:rotate-90 after:h-2 after:w-8 after:rounded-md after:bg-junglegreen-600/20 relative after:z-10"></span>
        </div>
        {!!item?.addVideo && (
          <div className="relative z-[9999] left-[40px] top-0 bottom-0 translate-y-2/4 end-0 text-center">
            <div
              onClick={() => {
                setModalOpen(true);
              }}
              // href={item.addVideoUrl}
              className="animation-pulse cursor-pointer h-20 w-20 rounded-full shadow-lg inline-flex items-center justify-center bg-gradient-to-r from-formalGreenLight to-formalGreen"
            >
              <span className="">
                <svg
                  className="w-10 h-10 fill-white"
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
                      <path
                        d="M443.86,196.919L141.46,10.514C119.582-2.955,93.131-3.515,70.702,9.016c-22.429,12.529-35.819,35.35-35.819,61.041
			v371.112c0,38.846,31.3,70.619,69.77,70.829c0.105,0,0.21,0.001,0.313,0.001c12.022-0.001,24.55-3.769,36.251-10.909
			c9.413-5.743,12.388-18.029,6.645-27.441c-5.743-9.414-18.031-12.388-27.441-6.645c-5.473,3.338-10.818,5.065-15.553,5.064
			c-14.515-0.079-30.056-12.513-30.056-30.898V70.058c0-11.021,5.744-20.808,15.364-26.183c9.621-5.375,20.966-5.135,30.339,0.636
			l302.401,186.405c9.089,5.596,14.29,14.927,14.268,25.601c-0.022,10.673-5.261,19.983-14.4,25.56L204.147,415.945
			c-9.404,5.758-12.36,18.049-6.602,27.452c5.757,9.404,18.048,12.36,27.452,6.602l218.611-133.852
			c20.931-12.769,33.457-35.029,33.507-59.55C477.165,232.079,464.729,209.767,443.86,196.919z"
                      ></path>
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
              </span>
            </div>
          </div>
        )}

        <div className="relative overflow-hidden">
          <motion.div
            className="image__container"
            initial={false}
            animate={
              isLoaded && isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)}
          >
            <Image
              width={300}
              height={300}
              quality={100}
              priority={true}
              onLoad={() => setIsLoaded(true)}
              src={item.homeSliderImage?.sourceUrl}
              className={`lg:w-[400px] w-[280px] shadow dark:shadow-gray-800 object-contain ${
                !!item?.addVideo && 'rounded-tl-[100px] rounded-br-[100px]'
              }`}
              alt=""
            />
            <div className="glasss"></div>
          </motion.div>
        </div>
      </div>

      {modalOpen ? (
        <>
          <div
            id="defaultModal"
            className="absolute inset-0 flex justify-center items-center"
          >
            <div className="flex min-h-full w-[50%] items-end justify-center p-1 text-center sm:items-center sm:p-0">
              <div className="relative bg-white rounded-lg shadow-lg">
                <div className="flex items-start justify-between p-1 border-b rounded-t dark:border-gray-600">
                  <button
                    onClick={() => {
                      setModalOpen(false);
                    }}
                    type="button"
                    className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900
                    rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="defaultModal"
                  >
                    <svg
                      className=" w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/3sM5z8J7ZgE"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {/* <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId={`popup-${selectedId}`}
              className="bg-white w-64 p-4 rounded shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.h5>test1</motion.h5>
              <motion.h2>test2</motion.h2>
              <motion.button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => setSelectedId(null)}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </>
  );
};
