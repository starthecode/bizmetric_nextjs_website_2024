import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import React from 'react';

export const Links = () => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="text-dark mb-6 text-lg font-semibold">Quick Links</h4>
          <ul>
            <li>
              <a
                href="#"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                Success Stories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
        <h4 className="text-dark mb-6 text-lg font-semibold">Reach Us</h4>
        <p className="text-dark mb-5 flex items-center text-sm font-medium">
          <span className="text-primary mr-3">
            <MapPinIcon className="w-4 h-4 fill-current" />
          </span>
          <span>
            Bizmetric Partners Inc, 2241 Highway 6, Suite 120, TX 77478
          </span>
        </p>
        <p className="text-dark mb-5 flex items-center text-sm font-medium">
          <span className="text-primary mr-3">
            <PhoneIcon className="w-4 h-4 fill-current" />
          </span>
          <span>+012 (241) 551 00</span>
        </p>
        <p className="text-dark mb-5 flex items-center text-sm font-medium">
          <span className="text-primary mr-3">
            <EnvelopeIcon className="w-4 h-4 fill-current" />
          </span>
          <span>marketing@bizmetric.com</span>
        </p>
      </div>
      <div className="w-full px-4 sm:w-1/2 lg:w-4/12">
        <h4 className="text-dark mb-6 text-lg font-semibold">
          Get into the habit of being digital
        </h4>

        <form className="w-[250px]">
          <div className="grid grid-cols-1">
            <div className="mb-3">
              <span>
                Write your email <span className="text-red-600">*</span>
              </span>
              <div className="relative mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-mail w-4 h-4 absolute top-3 start-4"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <input
                  type="email"
                  className="form__input bg-gray-800 border pl-10 border-gray-800 text-gray-100 focus:shadow-none"
                  placeholder="Email"
                  name="email"
                />
              </div>
            </div>

            <button
              type="submit"
              id="submitsubscribe"
              name="send"
              className="btn-primary"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
