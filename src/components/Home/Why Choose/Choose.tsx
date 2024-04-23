const Choose = () => {
  return (
    <>
      <div className="relative mt-24 sm:mt-24 md:mt-32 xl:mt-40">
        {/* <div className="absolute inset-0 bg-bottom bg-[url('https://api.strengthmaximum.com/wp-content/uploads/2023/05/cta1.png')] object-cover opacity-[0.1] bg-no-repeat bg-cover"></div> */}
        <div
          aria-hidden="true"
          className="absolute m-auto -bottom-16 grid h-max w-full grid-cols-2 -space-x-52 opacity-40 dark:opacity-80"
        >
          <div className="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
          <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
        </div>
        <div className="w-auto px-6 md:px-12 lg:px-6 xl:px-0">
          <div className="m-auto flex justify-center text-center lg:w-8/12 xl:w-7/12">
            <h1 className="dark:text-white text-ebonyclay-900 font-inter text-center 2xl:text-left text-3xl font-bold sm:text-4xl md:text-[40px]">
              Trusted by the Worlds Leading{' '}
              <span className="font-cursive font-bold bg-gradient-to-r from-formalGreenLight to-formalGreen bg-clip-text text-transparent dark:to-secondaryLight">
                Organizations
              </span>
            </h1>
          </div>
          <div className="mt-14">
            <div
              className="relative border border-gray-100 bg-white shadow-2xl
             shadow-gray-200/20 transition duration-500 dark:border-white/10 dark:bg-woodsmoke-950/95"
            >
              <div className="flex justify-center dark:divide-gray-800 md:flex-row md:divide-y-0 md:divide-x">
                <div className="grid justify-center items-center px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-10">
                  <div className="grid grid-cols-2 flex-1 text-center gap-2 gap-y-4 md:grid-cols-2 xl:gap-y-[20px] lg:grid-cols-4 mb-10 md:mb-10 ">
                    <div>
                      <h1 className="font-inter font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-flamingo-500">
                        <span>+</span>10
                      </h1>
                      <p className="text-text text-gray-500 mx-auto md:w-[26ch]">
                        years in business
                      </p>
                    </div>
                    <div>
                      <h1 className="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-flamingo-500">
                        100<span>+</span>
                      </h1>
                      <p className="text-text text-gray-500 mx-auto md:w-[26ch]">
                        projects done
                      </p>
                    </div>
                    <div>
                      <h1 className="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-flamingo-500">
                        60<span>+</span>
                      </h1>
                      <p className="text-text text-gray-500 mx-auto md:w-[26ch]">
                        Certified Consultants
                      </p>
                    </div>
                    <div>
                      <h1 className="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-flamingo-500">
                        10
                      </h1>
                      <p className="text-text text-gray-500 mx-auto md:w-[26ch]">
                        Countries
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose;
