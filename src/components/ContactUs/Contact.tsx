import React, { useState } from 'react';
import Link from 'next/link';
import ContactDetails from './ContactDetails';

type ContactState = {
  state: 'loading' | 'error' | 'success' | string;
  message?: string;
  email: string;
  emailDesc: string;
};

export const Contact = () => {
  const [form, setForm] = useState<ContactState>({
    state: '',
    email: '',
    emailDesc: '', // Initialize emailDesc
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    // Dynamically update the state based on the input field's name
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, emailDesc } = form; // Destructure values from form state

    if (email) {
      setForm((prevForm) => ({ ...prevForm, state: 'loading' }));
      try {
        const res = await fetch(`api/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ form }),
        });

        const { error } = await res.json();

        if (error) {
          // setForm({ state: 'error', message: error });
          return error;
        }

        setForm({
          state: 'success',
          message: 'Your message was sent successfully.',
          email: '', // Clear email input
          emailDesc: '', // Clear emailDesc input
        });
      } catch (error) {
        return error;
        // setForm({
        //   state: 'error',
        //   message: 'Something went wrong',
        // });
      }
    }
  };

  return (
    <>
      <section className="w-full items-center grid justify-center">
        <div className="bg-gray-100 dark:bg-slate-950 relative p-[40px] md:pt-[91px] md:pr-[98px] md:pb-[86px] md:pl-[92px] mt-10 rounded-[58px]">
          <div className="mx-auto relative max-w-[1320px]">
            <svg
              className="absolute right-0 max-w-[129px] top-[-140px] fill-flamingo-600 w-28"
              id="fi_4697980"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m316.323 200.6a8 8 0 0 0 8.729-.991l176.066-146.566a8 8 0 0 0 -3.76-14.032l-225.758-38.895a8 8 0 0 0 -8.035 12.292l54.288 82.221-5.9 98.35a8 8 0 0 0 4.37 7.621zm-29.218-181.577 190.455 32.813-148.532 123.643 4.609-76.8 71.7-19.212a8 8 0 1 0 -4.14-15.455l-71.697 19.214z"></path>
              <path d="m152 328v144a40.045 40.045 0 0 0 40 40h208a40.045 40.045 0 0 0 40-40v-144a40.045 40.045 0 0 0 -40-40h-208a40.045 40.045 0 0 0 -40 40zm248 168h-208a24.028 24.028 0 0 1 -24-24v-129.294l106.27 68.763a40.064 40.064 0 0 0 43.46 0l106.27-68.763v129.294a24.028 24.028 0 0 1 -24 24zm23.639-172.119-114.6 74.154a24.038 24.038 0 0 1 -26.077 0l-114.6-74.154a24.035 24.035 0 0 1 23.638-19.881h208a24.034 24.034 0 0 1 23.639 19.881z"></path>
              <path d="m209.715 136.478a8 8 0 0 0 2.791-.5c7.043-2.623 14.278-5.2 21.5-7.648a8 8 0 1 0 -5.139-15.152c-7.375 2.5-14.76 5.128-21.95 7.806a8 8 0 0 0 2.794 15.5z"></path>
              <path d="m43.276 374.663a8 8 0 0 0 .4 11.307 112.626 112.626 0 0 0 19.824 14.754 8 8 0 0 0 8.083-13.809 96.536 96.536 0 0 1 -17-12.653 8 8 0 0 0 -11.307.401z"></path>
              <path d="m254.371 113.312a7.993 7.993 0 0 0 9.933 5.416c9.893-2.913 17.425-4.908 22-6.069a8 8 0 1 0 -3.934-15.508c-4.71 1.2-12.451 3.245-22.584 6.227a8 8 0 0 0 -5.415 9.934z"></path>
              <path d="m11.177 277.87a109.447 109.447 0 0 0 -3.164 24.437 8 8 0 0 0 7.876 8.122h.126a8 8 0 0 0 8-7.877 93.418 93.418 0 0 1 2.7-20.859 8 8 0 0 0 -15.536-3.824z"></path>
              <path d="m176.794 132.965c-7.273 3.09-14.446 6.291-21.319 9.514a8 8 0 1 0 6.794 14.486c6.695-3.141 13.687-6.261 20.78-9.274a8 8 0 1 0 -6.255-14.726z"></path>
              <path d="m110.335 183.718a7.96 7.96 0 0 0 4.188-1.19c6.2-3.817 12.783-7.63 19.573-11.332a8 8 0 0 0 -7.659-14.048c-7.036 3.837-13.868 7.792-20.3 11.757a8 8 0 0 0 4.2 14.813z"></path>
              <path d="m89.386 403.744a8 8 0 0 0 6.06 9.554 112.6 112.6 0 0 0 24.554 2.702 8 8 0 0 0 0-16 96.616 96.616 0 0 1 -21.06-2.315 8 8 0 0 0 -9.554 6.059z"></path>
              <path d="m79.021 187.311c-6.53 4.914-12.7 9.972-18.335 15.034a8 8 0 0 0 10.691 11.9c5.294-4.755 11.1-9.517 17.264-14.153a8 8 0 0 0 -9.62-12.785z"></path>
              <path d="m48.954 225.173a8 8 0 0 0 -11.247 1.221 155.234 155.234 0 0 0 -13.707 19.947 8 8 0 1 0 13.878 7.959 139.463 139.463 0 0 1 12.3-17.881 8 8 0 0 0 -1.224-11.246z"></path>
              <path d="m28.05 331.686a8 8 0 1 0 -15.322 4.607 111.556 111.556 0 0 0 9.7 22.739 8 8 0 1 0 13.929-7.873 95.5 95.5 0 0 1 -8.307-19.473z"></path>
            </svg>

            <p className="text-capitalized text-gray-500 uppercase tracking-[2px] mb-[15px]">
              Contact us
            </p>
            <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-[22px]">
              Have an query in mind?
            </h2>
            <p className="text-text text-gray-600 mb-[30px] md:mb-[60px]">
              The right move at the right time saves your work. live the dream
              of expanding your business.
            </p>
            <div className="flex flex-col gap-8 mb-[15px] md:mb-[25px] lg:flex-row lg:gap-[50px] xl:gap-[98px]">
              <div>
                <div className="flex gap-[13px] mb-[15px] md:mb-[25px]">
                  <svg
                    className="w-10 h-10 fill-flamingo-600"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    id="fi_5193766"
                  >
                    <g id="_13-Building" data-name="13-Building">
                      <path d="m32 2a24.0275 24.0275 0 0 0 -24 24c0 18.294 22.44971 35.09766 23.40576 35.8042a.99964.99964 0 0 0 1.18848 0c.95605-.70654 23.40576-17.5102 23.40576-35.8042a24.0275 24.0275 0 0 0 -24-24zm0 42a18 18 0 1 1 18-18 18.02047 18.02047 0 0 1 -18 18zm-11-23v15a1.003 1.003 0 0 0 1 1h5v-17h-5a1.003 1.003 0 0 0 -1 1zm2 4a1 1 0 0 1 2 0v1a1 1 0 0 1 -2 0zm0 5a1 1 0 0 1 2 0v1a1 1 0 0 1 -2 0zm19-15h-12a1.003 1.003 0 0 0 -1 1v21h4v-6a1.003 1.003 0 0 1 1-1h4a1.003 1.003 0 0 1 1 1v6h3a1.003 1.003 0 0 0 1-1v-20a1.003 1.003 0 0 0 -1-1zm-7 11a1 1 0 0 1 -2 0v-1a1 1 0 0 1 2 0zm0-5a1 1 0 0 1 -2 0v-1a1 1 0 0 1 2 0zm4 5a1 1 0 0 1 -2 0v-1a1 1 0 0 1 2 0zm0-5a1 1 0 0 1 -2 0v-1a1 1 0 0 1 2 0z"></path>
                    </g>
                  </svg>
                  <p className="text-heading-6 font-bold font-chivo">
                    CORPORATE OFFICE
                  </p>
                </div>
                <p className="text-text text-gray-600">
                  Biz-Metric Partners Inc,
                </p>
                <p className="text-text text-gray-600 mb-[10px] md:mb-[16px]">
                  1650 Highway 6, Suite 130, Sugar Land, TX 77478
                </p>
                <p className="text-text text-gray-600 underline">
                  (832) 742-9957
                </p>
                <Link
                  href="mailto: marketing@bizmetric.com"
                  className="text-text text-gray-600 underline"
                >
                  marketing@bizmetric.com
                </Link>
              </div>
              <form className="flex-1" onSubmit={(e) => onSubmitForm(e)}>
                {/* <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                  <input
                    className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                    type="text"
                    placeholder="Enter your name"
                  />
                  <input
                    className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                    type="text"
                    placeholder="Company (optional)"
                  />
                </div> */}
                <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                  <input
                    className="outline-none
                    flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                    type="text"
                    placeholder="Your email"
                    name="email"
                    value={form.email || ''}
                    onChange={handleChange}
                  />
                  {/* <input
                    className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                    type="text"
                    placeholder="Phone number"
                  /> */}
                </div>
                <textarea
                  className="w-full py-5 resize-none outline-0 px-[30px] max-h-[150px] mb-[35px] md:mb-[56px]"
                  cols={100}
                  rows={10}
                  name="emailDesc"
                  value={form.emailDesc || ''}
                  onChange={handleChange}
                  placeholder="Tell us about yourself"
                ></textarea>
                <div className="flex flex-col gap-5">
                  <button type="submit">Send Message</button>

                  <p className="text-md text-gray-500">
                    By clicking contact us button, you agree our terms and
                    policy,
                  </p>
                </div>
                {form.state === 'loading' ? (
                  <div>Sending....</div>
                ) : form.state === 'error' ? (
                  <div>{form.message}</div>
                ) : (
                  form.state === 'success' && <div>Sent successfully</div>
                )}
              </form>
            </div>
          </div>
        </div>

        <ContactDetails />
      </section>
    </>
  );
};
