import useFetch from '@/pages/api/useFetch';
import Image from 'next/image';

type caseProps = {
  catId: number;
};

const CaseStudies = ({ catId }: caseProps) => {
  const posts = useFetch(
    `/wp-json/wp/v2/casestudies?casestudies_industry=${catId}&_embed&per_page=4`
  );

  return (
    <>
      <section className="mt-5 relative z-10">
        {/* @ts-ignore */}
        {posts?.length > 0
          ? // @ts-ignore
            posts?.slice(0, 3).map((item: any) => (
              <div
                className="flex items-center p-2 rounded-lg mb-5 shadow-lg bg-[#f1f8fc]"
                key={item.id}
              >
                <Image
                  width="150"
                  height="150"
                  src={item._embedded['wp:featuredmedia']['0'].source_url}
                  className="object-contain w-[100px] h-[100px] xl:w-auto xl:h-auto rounded-lg"
                  alt=""
                />

                <div className="mt-0 ml-2 xl:ml-5 xl:mt-0 lg:w-1/2 lg:mt-0 ">
                  <p className="text-sm text-ebony-400">Category</p>

                  <h1 className="block mt-2 text-sm md:text-md xl:text-lg font-semibold text-gray-800 dark:text-ebony-900">
                    {item.title.rendered}
                  </h1>

                  <a
                    href="#"
                    className="flex mt-2 text-[#0284c7] text-sm no-underline hover:text-blue-400"
                  >
                    View Case Study
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-[1.25rem] h-[1.25rem]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))
          : 'Loading...'}
      </section>
    </>
  );
};

export default CaseStudies;
