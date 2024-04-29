export const Blockquote = ({ testimonials }: any) => {
  return (
    <>
      {testimonials.map((item: any, index: any) => (
        <blockquote
          key={index}
          className="rounded-lg shadow-lg bg-white dark:bg-woodsmoke-950/95 p-5 h-[200px]"
        >
          <div className="block items-center">
            <h3 className="mt-1 text-lg font-inter font-bold text-woodsmoke-950/95 dark:text-white">
              {item.testimonialsTitle}
            </h3>
            <span className="font-inter font-medium dark:text-slate-300 text-woodsmoke-600">
              {item.testimonialsSub}
            </span>
            <p className="line-clamp-2 text-sm font-inter sm:line-clamp-none mt-4 dark:text-slate-300 text-woodsmoke-600 pt-3 border-dashed border-t-[1px] border-flamingo-400/40 dark:border-junglegreen-400/40">
              {item.testimonialsDesc}
            </p>
          </div>
        </blockquote>
      ))}
    </>
  );
};
