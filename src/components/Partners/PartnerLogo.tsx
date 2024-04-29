import Image from 'next/image';
import Slider from 'react-slick';
export const PartnerLogo = (partners: any) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <section className="relative mt-24 sm:mt-24 md:mt-32 xl:mt-40">
        <div className="container m-auto">
          <div className="block relative h-full w-full ">
            <div
              className="mr-4 flex justify-center items-center
            text-center"
            >
              <span
                className="font-cursive rounded-full xl:text-2xl md:text-xl sm:text-base font-bold bg-gradient-to-r
            from-formalGreenLight to-formalGreen bg-clip-text text-transparent dark:to-secondaryLight"
              >
                Our Partners
              </span>
            </div>
            <div
              aria-hidden="true"
              className="absolute m-auto -bottom-16 grid h-max w-full grid-cols-2 -space-x-52 opacity-40 dark:opacity-80"
            >
              <div className="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
              <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
            </div>
            <Slider {...settings}>
              {partners?.partners?.HomePage.partnerLogo.map(
                (item: any, index: any) => (
                  <div
                    key={index}
                    className="flex justify-center transition duration-200
                       focus-visible:outline-none "
                  >
                    <Image
                      className="w-[140px] h-[140px] object-contain dark:brightness-0 dark:invert-[1]"
                      width="140"
                      height="140"
                      quality={100}
                      src={item?.partnerLogoImage?.sourceUrl}
                      alt="partner logo"
                    />
                  </div>
                )
              )}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
