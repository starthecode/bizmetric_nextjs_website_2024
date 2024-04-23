import Link from 'next/link';

export const Breadcrumbs = (props: any) => {
  return (
    <section className="pt-40 pb-12 bg-blueGray-100">
      <div className="container">
        <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
          {props?.props?.title}
        </h1>
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
            <span className="text-slate-400">Our Services</span>
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
          <li className="inline-flex items-center text-flamingo-600">
            <span> {props?.props?.title}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
