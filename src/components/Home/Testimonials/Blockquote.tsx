export const Blockquote = ({ testimonials }: any) => {
  return (
    <>
      {testimonials.map((item: any, index: any) => (
        <blockquote
          key={index}
          className="rounded-lg bg-white dark:bg-gray-100 p-5"
        >
          <div className="block items-center">
            <h3 className="mt-1 text-lg font-inter font-bold text-gray-700">
              {item.testimonialsTitle}
            </h3>
            <span className="font-inter font-medium text-gray-400">
              {item.testimonialsSub}
            </span>
            <p className="line-clamp-2 text-sm font-inter sm:line-clamp-none mt-4 text-gray-500">
              {item.testimonialsDesc}
            </p>
          </div>
        </blockquote>
      ))}
    </>
  );
};
