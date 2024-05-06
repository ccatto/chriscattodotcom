'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const schema = z.object({
  page_title: z.string().min(3),
  page_description: z.string().min(3),
  page_body: z.string().min(3),
  is_active: z.boolean(),
  is_draft: z.boolean(),
});

type FormFields = z.infer<typeof schema>;

const PagesFormCatto = () => {
  const [isSubmitSuccessfulTrue, setIsSubmitSuccessfulTrue] = useState(false);
  const [isEmailSentFail500, setIsEmailSentFail500] = useState(false);
  const [isFormSentFail500, setIsFormSentFail500] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormFields>({
    defaultValues: {
      page_body: 'This page will ... ',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log('inside onsubmit');
    try {
      console.log('data ==', data);
      //   setIsEmailSentFail500(false);
      //   // const response = await fetch('api/sendgrid', {
      //   //   // const response = await fetch('api/email', {
      //   //   method: 'POST',
      //   //   headers: {
      //   //     'content-type': 'application/json',
      //   //   },
      //   //   body: JSON.stringify(data),
      //   // });
      // const pagesDataResponseGet = await getPages();
      const pagesDataResponse = await fetch('api/pages', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log('--------------pagesDataResponse === ', pagesDataResponse);
      //   // console.log("response.status === ", response.status);
      //   // console.log("response.statusText -=== ", response.statusText);

      //   if (
      //     contactDataResponse.status === 200 &&
      //     contactDataResponse.status === 200
      //   ) {
      //     // if (response.status === 200) {
      //     // console.log('in success response === ', response);
      //     setIsSubmitSuccessfulTrue(true);
      //     // resizeTo({});
      // }
    } catch (e) {
      console.log('YO an ERROR not 200 e ===', e);
      //   setError('root', {
      //     message: 'This is an error with the form',
      //   });
      //   setIsEmailSentFail500(true);
    }
  };

  const handleMailAgainClick = () => {
    console.log('inside handleMailAgainClick()');
    setIsSubmitSuccessfulTrue(false);
    // reset();
  };

  return (
    <>
      {!isSubmitSuccessfulTrue && (
        <div className="flex h-full w-full flex-col">
          <div className="mx-auto mb-5 flex h-full w-full max-w-3xl rounded-2xl border bg-slate-800 p-5">
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6 grid w-full gap-6 md:grid-cols-1">
                <div className="w-full">
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Page Title
                  </label>
                  <div className="relative">
                    <input
                      {...register('page_title')}
                      type="text"
                      placeholder="Page Title"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      autoFocus
                    />
                  </div>
                  {errors.page_title && (
                    <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {errors.page_title.message}
                    </div>
                  )}
                </div>
                <div className="">
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Page Description
                  </label>
                  <div className="relative">
                    <input
                      {...register('page_description')}
                      type="text"
                      placeholder="Page Description"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      autoFocus
                    />
                  </div>
                  {errors.page_description && (
                    <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {errors.page_description.message}
                    </div>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Page Body:
                  </label>
                  <textarea
                    {...register('page_body')}
                    className="block h-40 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                  {errors.page_body && <div>{errors.page_body?.message}</div>}
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-1 items-center justify-center">
                  <label className="inline-flex cursor-pointer items-center">
                    <input
                      {...register('is_active')}
                      type="checkbox"
                      className="peer sr-only"
                    />
                    <div className="peer relative h-7 w-14 rounded-full bg-gray-200 after:absolute after:start-[4px] after:top-0.5 after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Is Active
                    </span>
                  </label>
                  {errors.is_active && (
                    <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {errors.is_active.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <label className="inline-flex cursor-pointer items-center">
                    <input
                      {...register('is_draft')}
                      type="checkbox"
                      className="peer sr-only"
                    />
                    <div className="peer relative h-7 w-14 rounded-full bg-gray-200 after:absolute after:start-[4px] after:top-0.5 after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Is Draft
                    </span>
                  </label>
                  {errors.is_draft && (
                    <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {errors.is_draft.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-5 flex items-center justify-center">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {isSubmitting ? '📩 Mailing..' : '📨 Send Message'}
                </button>
                {errors.root && <div>{errors.root.message}</div>}
              </div>
            </form>
          </div>
          <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
        </div>
      )}
      {isSubmitSuccessfulTrue && (
        <div className="mt-5 grid h-full items-center justify-center md:grid-cols-1">
          <div className="flex items-center justify-center">
            <JumbotronCattoFlexible
              title="Your message has been sent to Chris Catto"
              description="I appreciate you reaching out to me and sending me a message. I will receive it in my email. Let's stay in touch!"
            />
          </div>
          <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-200 md:my-10" />
          <div className="mt-5 grid h-full items-center justify-center md:grid-cols-1">
            <div className="mb-5 flex items-center justify-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Check out my about page
                <svg
                  className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
            <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-200 md:my-10" />
            <div className="mb-5 flex items-center justify-center">
              <button
                onClick={handleMailAgainClick}
                className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Send another message
                <svg
                  className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      {isEmailSentFail500 && (
        <div className="mt-5 grid h-full items-center justify-center md:grid-cols-1">
          <div className="flex items-center justify-center">
            <JumbotronCattoFlexible
              title="Oops! There was an error"
              description="There was a technical difficulty and please try again"
            />
          </div>
          <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-200 md:my-10" />
          <div className="mb-5 flex items-center justify-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Checkout my about page
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
          <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-200 md:my-10" />
          <div className="mb-5 flex items-center justify-center">
            <button
              onClick={handleMailAgainClick}
              className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Send another email
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PagesFormCatto;
