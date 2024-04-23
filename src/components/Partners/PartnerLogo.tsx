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
      <section className="bg-transparent relative overflow-hidden pt-10 xl:pt-20 md:pt-10 sm:pt-10">
        <div className="container m-auto">
          <div className="block relative h-full w-full ">
            <div
              className="mr-4 flex justify-center items-center
            text-center"
            >
              <span
                className="font-cursive border-[1px] border-gray-600 w-[200px] rounded-full xl:text-2xl md:text-xl sm:text-base font-bold bg-gradient-to-r
            from-formalGreenLight to-formalGreen bg-clip-text text-transparent dark:to-secondaryLight"
              >
                Partners
              </span>
            </div>

            <div className="">
              <Slider {...settings}>
                {partners?.partners?.HomePage.partnerLogo.map(
                  (item: any, index: any) => (
                    <div
                      key={index}
                      className="flex justify-center transition duration-200
                       focus-visible:outline-none "
                    >
                      <Image
                        className="w-[140px] h-[140px] object-contain dark:grayscale-[1] dark:invert"
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
        </div>
      </section>
    </>
  );
};
