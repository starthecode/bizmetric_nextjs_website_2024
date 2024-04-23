import Image from 'next/image';
import { format } from 'date-fns';
import useFetch from '@/pages/api/useFetch';
import Link from 'next/link';

export const Article = () => {
  const blogs: any = useFetch(`/wp-json/wp/v2/posts?_embed&per_page=3`);

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    return format(date, 'd MMM yy');
  };

  return (
    <>
      {blogs &&
        blogs.map((item: any, index: any) => (
          <article key={index}>
            <div className="rounded-2xl overflow-hidden transition-shadow hover:shadow-lg">
              <figure className="group overflow-hidden">
                <Link href="/single_post/post_1">
                  <Image
                    priority={true}
                    width={300}
                    height={300}
                    src={item.media}
                    alt="Blog Img"
                    className="h-full w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                  />
                </Link>
              </figure>
              <div className="dark:border-slate-600 dark:bg-slate-700 border-jacarta-100 rounded-b-[1.25rem] border border-t-0 bg-white p-[10%]">
                <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
                  <Link
                    href="#"
                    className="dark:text-slate-200 text-slate-200 font-display hover:text-accent"
                  >
                    {item.category.map((cat: any, index: any) => (
                      <span
                        className="px-1 py-1 mr-2 rounded-sm bg-slate-500"
                        key={index}
                      >
                        {cat}
                      </span>
                    ))}
                  </Link>
                </div>
                <h2 className="font-display text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white">
                  <Link href="single_post/post_1"> {item.title.rendered}</Link>
                </h2>
                <p className="dark:text-jacarta-200 mb-8">
                  {item.content.rendered.substring(0, 100)}
                </p>
                <div className="text-jacarta-400 flex flex-wrap items-center space-x-2 text-sm">
                  <span>
                    <time>{formatDate(item.date)}</time>
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
    </>
  );
};
