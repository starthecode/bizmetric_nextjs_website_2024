import useFetch from '@/pages/api/useFetch';
import { formatDate } from '@/utils/utils';
import Image from 'next/image';
import React from 'react';
import SubscribeBox from '../extras/SubscribeBox';
import Tags from '../extras/Tags';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  slug: string;
  content: {
    rendered: string;
  };
  author_name: string;
  author_img: string;
  media: string;
  category: [string];
  date: string;
  // Add other properties as needed
}

const Blog = () => {
  const {
    data: allPosts,
    error: postsError,
    isLoading: postsLoading,
  }: any = useFetch('wp-json/wp/v2/posts?per_page=30');
  const [singlePost, setSinglePost] = React.useState<Post | null>(null); // Specify the type for singlePost
  const [isLoading, setIsLoading] = React.useState<boolean | null>(true);
  const [error, setError] = React.useState(null);

  // Fetch the single post
  React.useEffect(() => {
    const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

    const fetchSinglePost = async () => {
      try {
        const response = await fetch(
          `${apiDomain}wp-json/wp/v2/posts?per_page=1`
        ); // Assuming the single post ID is 1, replace with the actual ID
        if (!response.ok) {
          throw new Error('Failed to fetch single post');
        }
        const data = await response.json();
        setSinglePost(data[0]);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSinglePost();
  }, []);

  if (isLoading || postsLoading) {
    return <div>Loading...</div>;
  }

  if (error || postsError) {
    return <div>Error: {error || postsError}</div>;
  }

  return (
    <section className="relative z-10 py-24">
      <div className="container">
        <Tags />
        <div
          className="grid lg:grid-cols-3 grid-cols-1 gap-10 items-center lg:py-16 py-14 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="300"
        >
          {singlePost && (
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-5 gap-10">
                <div className="md:col-span-2 col-span-3">
                  <Image
                    width={300}
                    height={300}
                    alt="auther img"
                    src={singlePost.media}
                    className="w-auto h-auto rounded-md"
                  />
                </div>
                <div className="col-span-3">
                  <div className="flex flex-col gap-5 justify-between xl:h-full">
                    <div>
                      <a
                        className="bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2"
                        href={`blogs/${singlePost.slug}`}
                      >
                        {' '}
                        {singlePost.category.join(', ')}
                      </a>

                      <h1 className="text-lg my-3 transition-all hover:text-primary">
                        <Link href={singlePost.slug}>{singlePost?.title} </Link>
                      </h1>
                      <p className="text-sm/relaxed tracking-wider text-gray-500">
                        {singlePost.content.rendered?.length > 100
                          ? `${singlePost.content.rendered
                              .replace(/<[^>]*>?/gm, '')
                              .substring(0, 90)}...`
                          : singlePost.content.rendered}

                        <a href="#" className="text-primary">
                          read more
                        </a>
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Image
                          width={20}
                          height={20}
                          alt="auther img"
                          src={singlePost.author_img}
                          className="w-auto h-auto rounded-md"
                        />
                        <div>
                          <h6 className="text-sm transition-all hover:text-primary">
                            <a href="#">{singlePost.author_name}</a>
                          </h6>
                          <p className="text-sm text-gray-500">
                            {formatDate(singlePost.date)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <SubscribeBox />
        </div>

        <div
          className="grid lg:grid-cols-3 gap-6 lg:py-16 py-14 aos-init"
          data-aos="fade-up"
        >
          {allPosts && allPosts?.length > 0 ? (
            allPosts?.map((item: any) => (
              <div key={item.id}>
                <Image
                  width={300}
                  height={300}
                  alt="blog post img"
                  src={
                    item.media ? item.media : '/images/dummy-img-bizmetric.webp'
                  }
                  className="w-auto h-auto rounded-md mb-5"
                />

                <a
                  className="bg-teal-500/10 text-teal-500 font-medium rounded-md text-xs py-1 px-2"
                  href="#"
                >
                  {' '}
                  {item.category.join(', ')}
                </a>
                <h1 className="text-lg my-3 transition-all hover:text-primary">
                  <Link href={item.slug}>{item.title}</Link>
                </h1>
                <p className="text-sm/relaxed tracking-wider text-gray-500">
                  {item.content.rendered?.length > 100
                    ? `${item.content.rendered
                        .replace(/<[^>]*>?/gm, '')
                        .substring(0, 90)}...`
                    : item.content.rendered}

                  <a href={item.slug} className="text-primary">
                    read more
                  </a>
                </p>
              </div>
            ))
          ) : (
            <div>No data available</div>
          )}
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="flex items-center">
            <a
              href="javascript:void(0)"
              className="border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3"
            >
              <i className="fa-solid fa-arrow-left me-2"></i> Previous
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="javascript:void(0)"
              className="border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3"
            >
              Next <i className="fa-solid fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
