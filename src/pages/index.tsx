import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Head from 'next/head';
import { Header } from '@/components/Header/Header';

import { Hero } from '@/components/Hero/Hero';
import { PartnerLogo } from '@/components/Partners/PartnerLogo';
// import About from '@/components/Home/About';
import Services from '@/components/Home/Services/Services';
import Industries from '@/components/Home/Industries/Industries';
import Choose from '@/components/Home/Why Choose/Choose';
import Testimonials from '@/components/Home/Testimonials/Testimonials';
import Blog from '@/components/Home/Blogs/Blog';
import { Footer } from '@/components/Footer/Footer';
import { getPageStaticProps } from '@/utils/getPageStaticProps';
import About from '@/components/Home/About/About';

export default function Home({ data, homePage }: any) {
  return (
    <>
      {/* <main className="w-full h-auto light-gradiant dark:dark-gradiant "> */}

      <Hero heroData={homePage} />
      <PartnerLogo partners={homePage} />
      <About />
      <Services services={data.pages} />
      <Industries industries={homePage} />
      <Choose />
      <Testimonials testimonials={homePage.HomePage.testimonialsItems} />
      <Blog />
      <Footer />
    </>
  );
}

export const getStaticProps = getPageStaticProps;
