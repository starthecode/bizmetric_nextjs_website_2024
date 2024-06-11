import useFetch from '@/pages/api/useFetch';
import Image from 'next/image';

type caseProps = {
  catId: number;
};

const CaseStudies = ({ catId }: caseProps) => {
  const { data, error, isLoading }: any = useFetch(
    `/wp-json/custom/v1/case-studies?casestudies_industry=${catId}`
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <section className="mt-5 relative z-10">
      {data && data?.length > 0 ? (
        data?.slice(0, 3).map((item: any) => (
          <div
            className="flex items-center p-2 rounded-lg mb-5 shadow-lg bg-white dark:bg-woodsmoke-950 "
            key={item.id}
          >
            {item?.featured_image && (
              <Image
                width="150"
                height="150"
                src={item.featured_image}
                className="object-contain w-[100px] h-[100px] xl:w-auto xl:h-auto rounded-lg"
                alt=""
              />
            )}

            <div className="mt-0 ml-2 xl:ml-5 xl:mt-0 lg:w-1/2 lg:mt-0 ">
              <p className="text-sm text-slate-300">Category</p>

              <h1 className="block mt-2 text-sm font-semibold text-ebony-900 dark:text-white">
                {item.title}
              </h1>

              <a
                href="#"
                className="flex mt-2 text-flamingo-400 text-sm no-underline hover:text-blue-400"
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
      ) : (
        <div>No data available</div>
      )}
    </section>
  );
};

export default CaseStudies;
