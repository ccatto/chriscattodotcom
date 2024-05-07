'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { GET } from '@/app/api/pages/route';

const schema = z.object({
  page_title: z.string().min(3),
  page_description: z.string().min(3),
  page_body: z.string().min(3),
  is_active: z.boolean(),
  is_draft: z.boolean(),
});

type FormFields = z.infer<typeof schema>;



const PagesListFormCatto = () => {
  const [isSubmitSuccessfulTrue, setIsSubmitSuccessfulTrue] = useState(false);
  const [isEmailSentFail500, setIsEmailSentFail500] = useState(false);
  const [isFormSentFail500, setIsFormSentFail500] = useState(false);

  const getPagesData = async () => {
    console.log("------ start");

    // fetch(`/api/pages`, method: "GET")
    // .then((res) => res.json())
    // .then((data) => {
    //   ....
    // });
    
    const pagesDataResponse = await fetch('api/pages', {
      method: 'GET',
      // headers: {
      //   'content-type': 'application/json',
      // },
      // body: JSON.stringify(data),
    });
    // console.log('--------------pagesDataResponse === ', pagesDataResponse);
    console.log('--------------pagesDataResponse === ', pagesDataResponse);
  }

  useEffect(() => {
    getPagesData();
  }, [])
  // const pagesDataResponse = await fetch('api/pages/get', {
  //   method: 'GET',
  //   headers: {
  //     'content-type': 'application/json',
  //   },
  //   // body: JSON.stringify(data),
  // });
  // console.log('--------------pagesDataResponse === ', pagesDataResponse);



  // const pagesDataResponse = fetch('http://localhost:3000/api/pages');

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
      // const pagesDataResponseGet = await getPages;
      const pagesDataResponse = await fetch('api/pages', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
        // body: JSON.stringify(data),
      });
      console.log('--------------pagesDataResponse === ', pagesDataResponse);
      //   // console.log("response.status === ", response.status);
      //   // console.log("response.statusText -=== ", response.statusText);

      if (
        pagesDataResponse.status === 200
        // && contactDataResponse.status === 200
      ) {
        //     // if (response.status === 200) {
        //     // console.log('in success response === ', response);
        setIsSubmitSuccessfulTrue(true);
        //     // resizeTo({});
      }
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
    // setIsSubmitSuccessfulTrue(false);
    // reset();
  };

  return (
    <>
      {!isSubmitSuccessfulTrue && (
        <div className="flex h-full w-full flex-col">

          <div className="mx-auto mb-5 flex h-full w-full max-w-3xl rounded-2xl border bg-slate-800 p-5">

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div className="pb-4 pt-3 bg-white dark:bg-gray-900">
                <label className="sr-only">Search</label>
                {/* <label for="table-search" className="sr-only">Search</label> */}
                <div className="relative ml-3">
                  <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search for items"
                  />
                </div>
              </div>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        ID
                        {/* <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                          <label for="checkbox-all-search" class="sr-only">checkbox</label> */}
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Page Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Body
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Is Active
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>

                {/* LOOP HERE */}

                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        boots
                        {/* <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                          <label for="checkbox-table-search-1" class="sr-only">
                            checkbox
                          </label> */}
                      </div>
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">
                      Silver
                    </td>
                    <td className="px-6 py-4">
                      Laptop
                    </td>
                    <td className="px-6 py-4">
                      $2999
                    </td>
                    <td className="px-6 py-4">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        bill
                        {/* <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                          <label for="checkbox-table-search-2" class="sr-only">checkbox</label> */}
                      </div>
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">
                      White
                    </td>
                    <td className="px-6 py-4">
                      Laptop PC
                    </td>
                    <td className="px-6 py-4">
                      $1999
                    </td>
                    <td className="px-6 py-4">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>



            <hr />
            {/* <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
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
            </form> */}
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

export default PagesListFormCatto;
