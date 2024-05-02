import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Tags from '../extras/Tags';

export const SinglePost = ({ postData }: any) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="lg:w-4/5">
            <div className="flex gap-4">
              {postData.categories.nodes.map((cat: any, index: any) => (
                <Link
                  key={index}
                  className="bg-flamingo-500/10 text-flamingo-500 font-medium rounded-md text-xs py-1 px-2"
                  href="#"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
            <h1 className="lg:text-5xl/snug text-3xl/snug mt-3 text-ebony-900 dark:text-white">
              {postData.title}
            </h1>
          </div>
          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-3 mt-7">
                <img
                  src="https://themes.coderthemes.com/prompt_t/assets/img-1-f7888c4b.jpg"
                  alt="avatar"
                  className="h-11 w-11 rounded-full"
                />
                <div>
                  <h6 className="text-sm transition-all hover:text-primary">
                    <a href="#">Emily Blunt</a>
                  </h6>
                  <p className="text-sm text-gray-500">
                    11 Mar, 2020 · 3 min read
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <p className="text-sm text-gray-500">SHARE:</p>
                <div className="flex gap-3">
                  <span>
                    <a href="#">
                      <svg
                        className="w-5 h-5 text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <svg
                        className="w-5 h-5 text-teal-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <svg
                        className="w-5 h-5 text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: postData.content }} />

          {/* <div>
            <img
              src="https://themes.coderthemes.com/prompt_t/assets/hero-post-5614a597.png"
              className="rounded-md"
            />
            <p className="text-xs text-gray-500 mt-2 text-center">
              The image caption referencing the above image
            </p>
          </div> */}
          <h1 className="text-xl mb-3 mt-10">
            Itaque earum rerum hic tenetur sapiente delectu
          </h1>
          <p className="text-sm/relaxed tracking-wider text-gray-600 mb-6">
            Sed ut perspiciatis unde omnis iste natus the error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo Et harum quidem rerum facilis est et expedita
            distinctio nam libero tempore cum soluta nobis est eligendi optio
            cumque nihil impedit quo minus id quod maxime placeat facere
            possimus omnis voluptas assumenda est omnis dolor repellendus.
          </p>
          <div className="bg-gray-100 p-8 mb-6">
            <h5 className="text-base sm:text-lg font-normal text-gray-600 mb-3">
              Perspiciatis unde omnis iste natus error voluptatem accusantium
              doloremque laudantium totam rem aperiam eaque ipsa quae ab illo
              inventore veritatis et quasi architecto beataevitae dicta sunt
              explicabo tempore cum soluta.
            </h5>
            <p className="text-gray-500 font-light text-sm">
              <i className="fa-solid fa-minus me-2"></i> Christian Hall
            </p>
          </div>
          <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5">
            At vero eos et accusamus et iusto odio dignissimos ducimus that qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate
            provident similique sunt in culpa qui officia deserunt mollitia
            animi id est laborum et fuga.
          </p>
          <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5">
            Itaque earum rerum hic tenetur sapiente delectu aut reiciendis
            voluptatibus maiores alias consequ perferendis doloribus asperiores
            repellat. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium totam rem aperiam eaque
            ipsa quae ab illo inventore veritatisquasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam nisi aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate lit esse quam
            nihil molestiae consequatur eligendi optio cumque nihil impedit quo
            minus id quod maxime placeat facere possimus omnis voluptas
            assumenda est vel illum qui dolorem eum fugiat quo voluptas aperiam,
            eaque ipsa quae ab illo inventore.
          </p>
          <div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 my-10">
              <div>
                <img
                  src="https://themes.coderthemes.com/prompt_t/assets/3-3e088f04.jpg"
                  className="rounded"
                />
              </div>
              <div>
                <img
                  src="https://themes.coderthemes.com/prompt_t/assets/4-67ea0c5f.jpg"
                  className="rounded"
                />
              </div>
              <div>
                <img
                  src="https://themes.coderthemes.com/prompt_t/assets/5-6760e441.jpg"
                  className="rounded"
                />
              </div>
              <div>
                <img
                  src="https://themes.coderthemes.com/prompt_t/assets/6-dfd12c4b.jpg"
                  className="rounded"
                />
              </div>
            </div>
          </div>
          <h6 className="text-sm/relaxed tracking-wider mb-3">Conclusion</h6>
          <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5">
            Itaque earum rerum hic tenetur sapiente delectus aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat qui dolorem ipsum quia dolor sit amet
            consectetur velitsedquia non numquam eius modi tempora incidunt.
          </p>
          <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit sed quia consequuntur magni dolores eos qui ratione voluptatem
            sequi nesciunt.
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-sm tracking-wider text-gray-600">
              <i className="fa-solid fa-minus me-3"></i>Dream places
            </p>
            <p className="text-sm tracking-wider text-gray-600">
              <i className="fa-solid fa-minus me-3"></i>Walking/Hiking tours
            </p>
            <p className="text-sm tracking-wider text-gray-600">
              <i className="fa-solid fa-minus me-3"></i>Tennis lessons with
              expert coaches
            </p>
            <p className="text-sm tracking-wider text-gray-600">
              <i className="fa-solid fa-minus me-3"></i>Sailing adventures
            </p>
          </div>
          <div className="py-10">
            <Tags />
          </div>
          <div className="flex gap-2 mt-8 mb-14">
            <p className="text-sm text-gray-500">SHARE:</p>
            <div className="flex gap-3">
              <span>
                <a href="#">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </span>
              <span>
                <a href="#">
                  <svg
                    className="w-5 h-5 text-teal-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </span>
              <span>
                <a href="#">
                  <svg
                    className="w-5 h-5 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="border-t mb-5"></div>
          <div className="grid md:grid-cols-4 grid-cols-1 items-center">
            <div>
              <div>
                <div className="flex items-center justify-start">
                  <button
                    className="border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-500 hover:shadow-lg py-2 px-5"
                    data-fc-placement="top"
                    data-fc-type="tooltip"
                  >
                    <i className="fa-solid fa-arrow-left me-2"></i> Prev Post{' '}
                  </button>
                  <div
                    className="bg-white shadow-lg hidden rounded-md transition-all opacity-0 z-50 p-4 w-72"
                    role="tooltip"
                  >
                    <div className="flex items-center gap-5">
                      <img
                        src="https://themes.coderthemes.com/prompt_t/assets/blog-3-8c272f70.png"
                        className="w-16 rounded"
                      />
                      <div>
                        <h6 className="text-sm">
                          Introducing new blazzing fast user interface
                        </h6>
                        <p className="text-sm text-gray-500">by Emily Blunt</p>
                      </div>
                    </div>
                    <div
                      className="bg-white w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]"
                      data-fc-arrow=""
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="my-5 md:my-0">
                <div className="flex md:justify-center justify-start items-center gap-4">
                  <img
                    src="https://themes.coderthemes.com/prompt_t/assets/img-2-3bd8be1c.jpg"
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <h6 className="text-sm transition-all hover:text-primary">
                      <a href="#">Emily Blunt</a>
                    </h6>
                    <p className="text-sm text-gray-500">
                      I write about the latest trend in web design and
                      development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center md:justify-end justify-start">
              <button
                className="border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-500 hover:shadow-lg py-2 px-5"
                data-fc-placement="top"
                data-fc-type="tooltip"
              >
                {' '}
                Next Post <i className="fa-solid fa-arrow-right ms-2"></i>
              </button>
              <div
                className="bg-white shadow-lg hidden rounded-md transition-all opacity-0 z-50 p-4 w-72"
                role="tooltip"
              >
                <div className="flex items-center gap-5">
                  <img
                    src="https://themes.coderthemes.com/prompt_t/assets/blog-2-46fd5357.png"
                    className="w-16 rounded"
                  />
                  <div>
                    <h6 className="text-sm">What you should know before...</h6>
                    <p className="text-sm text-gray-500">by Emily Blunt</p>
                  </div>
                </div>
                <div
                  className="bg-white w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]"
                  data-fc-arrow=""
                ></div>
              </div>
            </div>
          </div>
          <div className="border-b mt-5"></div>
        </div>
      </section>
      <section className="lg:py-24 py-14">
        <div className="container">
          <div className="flex items-center gap-2">
            <h1 className="tracking-wider">Comments</h1>
            <span className="bg-gray-200 px-2 rounded-md">3</span>
          </div>
          <div>
            <div className="flex gap-3 my-6">
              <img
                src="https://themes.coderthemes.com/prompt_t/assets/img-4-e230b701.jpg"
                className="h-11 w-11 rounded-md"
              />
              <div>
                <h6 className="text-sm mb-1">Sansa Stark</h6>
                <p className="text-sm text-gray-500">2 days ago</p>
                <p className="text-sm/relaxed tracking-wider text-gray-600 mt-2">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque.
                </p>
                <a href="javascript: void(0);" className="text-primary text-sm">
                  <i className="fa-regular fa-comment me-1"></i> Reply
                </a>
                <div className="flex gap-3 my-6">
                  <img
                    src="https://themes.coderthemes.com/prompt_t/assets/img-1-f7888c4b.jpg"
                    className="h-11 w-11 rounded-md"
                  />
                  <div>
                    <h6 className="text-sm mb-1">Cersei Lannister</h6>
                    <p className="text-sm text-gray-500">1 days ago</p>
                    <p className="text-sm/relaxed tracking-wider text-gray-600 mt-2">
                      Itaque earum rerum hic tenetur sapiente delectus aut
                      reiciendis voluptatibus maiores alias consequatur aut
                      perferendis
                    </p>
                    <a
                      href="javascript: void(0);"
                      className="text-primary text-sm"
                    >
                      <i className="fa-regular fa-comment me-1"></i> Reply
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b"></div>
            <div className="flex gap-3 my-6">
              <img
                src="https://themes.coderthemes.com/prompt_t/assets/img-2-3bd8be1c.jpg"
                className="h-11 w-11 rounded-md"
              />
              <div>
                <h6 className="text-sm mb-1">Sansa Stark</h6>
                <p className="text-sm text-gray-500">2 days ago</p>
                <p className="text-sm/relaxed tracking-wider text-gray-600 mt-2">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque.
                </p>
                <a href="javascript: void(0);" className="text-primary text-sm">
                  <i className="fa-regular fa-comment me-1"></i> Reply
                </a>
              </div>
            </div>
          </div>
          <div className="mt-14">
            <div className="border bg-white rounded p-6">
              <h1>Post a comment</h1>
              <div className="flex flex-col gap-5 mt-5">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                  <div>
                    <input
                      className="rounded border-gray-300 focus:border-gray-400 focus:ring-0 w-full text-sm"
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      className="rounded border-gray-300 focus:border-gray-400 focus:ring-0 w-full text-sm"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div>
                  <input
                    className="rounded border-gray-300 focus:border-gray-400 focus:ring-0 w-full text-sm"
                    type="text"
                    id="Subject"
                    name="Subject"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <textarea
                    className="rounded border-gray-300 focus:border-gray-400 focus:ring-0 w-full text-sm"
                    id="message"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button className="flex">
                  <a
                    href="#"
                    className="bg-black/70 text-white rounded-md text-sm font-semibold flex-none shadow shadow-black hover:shadow-lg hover:shadow-black/30 focus:shadow-none focus:outline focus:outline-black/50 px-5 py-3"
                  >
                    Submit
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
