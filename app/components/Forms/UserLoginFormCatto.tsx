'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const schema = z.object({
  email: z.string().min(3),
  password: z.string().min(3),
});

type FormFields = z.infer<typeof schema>;


const UserLoginFormCatto = () => {
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
      email: 'email ... ',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log('inside onsubmit');
    try {
      console.log('data 22 ==', data);
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
      // const res = await fetch('http://localhost:3000/api/pages');
      const pagesDataResponse = await fetch('http://localhost:3000/api/pages', {
        // const pagesDataResponse = await fetch('api/pages', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
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
            {/* <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            </form> */}


            <form className="max-w-sm mx-auto">
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
          </div>
          <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
        </div>
      )}
      {isSubmitSuccessfulTrue && (
        <div className="mt-5 grid h-full items-center justify-center md:grid-cols-1">
          <div className="flex items-center justify-center">
            <JumbotronCattoFlexible
              title="Form Submitted Correctly"
              description="Form Submitted Correctly"
            />
          </div>
          <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-200 md:my-10" />
          {/* <div className="mt-5 grid h-full items-center justify-center md:grid-cols-1">
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
          </div> */}
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
          {/* <div className="mb-5 flex items-center justify-center">
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
          </div> */}
        </div>
      )}
    </>
  );
};

export default UserLoginFormCatto;
