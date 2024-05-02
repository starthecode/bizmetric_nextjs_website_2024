import React from 'react';

const ParentPage = () => {
  return (
    <section className="container">
      <div className="mt-20 relative grid md:grid-cols-3 gap-20">
        <img
          alt=""
          loading="lazy"
          width="1431"
          height="105"
          decoding="async"
          data-nimg="1"
          className="hidden md:block absolute inset-x-0 top-10"
          src="https://chisfis-nextjs.vercel.app/_next/static/media/VectorHIW.2937dfc5.svg"
        />
        <div className="relative flex flex-col items-center max-w-xs mx-auto">
          <img
            alt=""
            loading="lazy"
            width="293"
            height="269"
            decoding="async"
            data-nimg="1"
            className="dark:hidden block mb-8 max-w-[180px] mx-auto"
            src="https://chisfis-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW2-1.ef2ed601.png&amp;w=640&amp;q=75"
          />
          <img
            alt=""
            loading="lazy"
            width="256"
            height="269"
            decoding="async"
            data-nimg="1"
            className="hidden dark:block mb-8 max-w-[180px] mx-auto"
            src="https://chisfis-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW2-1-dark.16fbf1fe.png&amp;w=640&amp;q=75"
          />
          <div className="text-center h-[200px]">
            <h3 className="text-xl font-semibold">What We Do</h3>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              We link the customer need with the market trends and come up with
              a solution that reduces the churn rate, ensures customer
              satisfaction, and improves customer retention at an enterprise
              level.
            </span>
          </div>
        </div>
        <div className="relative flex flex-col items-center max-w-xs mx-auto">
          <img
            alt=""
            loading="lazy"
            width="295"
            height="269"
            decoding="async"
            data-nimg="1"
            className="dark:hidden block mb-8 max-w-[180px] mx-auto"
            src="https://chisfis-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW2-2.4cca03ec.png&amp;w=640&amp;q=75"
          />
          <img
            alt=""
            loading="lazy"
            width="256"
            height="269"
            decoding="async"
            data-nimg="1"
            className="hidden dark:block mb-8 max-w-[180px] mx-auto"
            src="https://chisfis-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW2-2-dark.5d20c6ad.png&amp;w=640&amp;q=75"
          />
          <div className="text-center h-[200px]">
            <h3 className="text-xl font-semibold">How We Do</h3>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Our service is our strength. We develop highly personalized
              solutions that are powered by Machine Learning, Natural Language
              Processing, Predictive Analytics, and Recommendation Engines.
            </span>
          </div>
        </div>
        <div className="relative flex flex-col items-center max-w-xs mx-auto">
          <img
            alt=""
            loading="lazy"
            width="293"
            height="269"
            decoding="async"
            data-nimg="1"
            className="dark:hidden block mb-8 max-w-[180px] mx-auto"
            src="https://chisfis-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW2-3.9199685e.png&amp;w=640&amp;q=75"
          />
          <img
            alt=""
            loading="lazy"
            width="256"
            height="269"
            decoding="async"
            data-nimg="1"
            className="hidden dark:block mb-8 max-w-[180px] mx-auto"
            src="https://chisfis-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW2-3-dark.dd44140b.png&amp;w=640&amp;q=75"
          />
          <div className="text-center h-[200px]">
            <h3 className="text-xl font-semibold">Why We Do</h3>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              The world is going digital. We want our clients to have easy
              access to the solutions that are smarter, quicker, transformative,
              and AI-driven. We aim for a smooth and successful digital ride.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentPage;
