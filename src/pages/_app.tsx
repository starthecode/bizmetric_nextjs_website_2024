import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.scss';
import { Toaster } from 'react-hot-toast';
import NextNProgress from 'nextjs-progressbar';
import client from '../../client';
import type { AppProps } from 'next/app';
import { Header } from '@/components/Header/Header';
import Head from 'next/head';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { UseMousePosition } from '@/components/UseMousePosition';
import { Poll } from '@/components/Poll/Poll';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Footer } from '@/components/Footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const hideHeight = 1138; // Adjust this value based on your needs

      if (scrollPosition > hideHeight) {
        setShouldHide(true);
      } else {
        setShouldHide(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider attribute="class">
          <UseMousePosition />
          <Head>
            <title>Bizmetric</title>
            <meta
              name="description"
              content="
Bizmetric | Artificial Intelligence | Data Analytics | Consultancy Services Bizmetric | find the real balance"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="w-full h-auto overflow-hidden bg-[#f6f9fc] dark:dark-gradiant ">
            <Toaster position="top-center" />
            <span className={`${shouldHide ? 'hidden' : ''}`}>
              <Poll />
            </span>
            <span className="fixed blur-[300px] w-[600px] h-[600px] rounded-full top-1/2 -translate-y-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 bg-flamingo-600/40 dark:bg-junglegreen-400/25"></span>
            <Header menus={pageProps?.data?.menuItems} />
            {pageProps?.data?.pageBy?.title != 'Home' && (
              <Breadcrumbs props={pageProps?.data?.nodeByUri} />
            )}
            <NextNProgress
              color="#d8703c"
              startPosition={0.3}
              height={3}
              showOnShallow={true}
            />
            <Component {...pageProps} /> <Footer />
          </main>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
