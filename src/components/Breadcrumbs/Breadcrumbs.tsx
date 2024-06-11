import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const Breadcrumbs = (props: any) => {
  const secondLevel =
    props?.props?.__typename == 'Post' ? 'Blogs' : 'Our Services';

  return (
    <section className={`pt-40 bg-blueGray-100`}>
      <div className="absolute [mask-image:linear-gradient(to_bottom,transparent,white)] h-96 inset-x-0 opacity-60 rotate-180 text-gray-500/20 top-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute h-full inset-0 w-full"
        >
          <defs>
            <pattern
              height="32"
              id="grid-pattern"
              patternTransform="translate(0 -1)"
              patternUnits="userSpaceOnUse"
              width="32"
              x="50%"
              y="100%"
            >
              <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
        </svg>
      </div>
      <div
        className={`container relative z-10 ${
          props?.props?.__typename == 'Solution'
            ? 'flex flex-col justify-center items-center text-center'
            : ''
        }`}
      >
        <div
          className={`${
            props?.props?.__typename == 'Post' ? 'hidden' : ''
          } grid w-[50rem] mb-10`}
        >
          <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
            {props?.props?.title}
          </h1>
          <p>{props?.props?.excerpt}</p>
        </div>
        <ul className="flex text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
          <li className="inline-flex items-center">
            <Link href="/" className="hover:text-blue-500 text-slate-500">
              Home
            </Link>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="h-5 w-auto text-gray-300"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </li>
          <li className="inline-flex items-center">
            <Link href={secondLevel == 'Blogs' ? '/tech-talks' : ''}>
              <span className="text-slate-400">{secondLevel}</span>
            </Link>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="h-5 w-auto text-gray-300"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </li>
          <li className="inline-flex items-center text-flamingo-500">
            <span> {props?.props?.title}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
