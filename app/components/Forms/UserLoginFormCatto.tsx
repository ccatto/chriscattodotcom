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
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // throw new Error();
      console.log('data 22 ==', data);
      setIsSubmitSuccessfulTrue(true);
    } catch (e) {
      setError("email", { message: "this email is already taken" });
      console.log('YO an ERROR not 200 e ===', e);
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

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mx-auto max-w-sm"
            >
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="name@flowbite.com"
                  required
                />
                {errors.email && (
                  <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.email.message}
                  </div>
                )}
              </div>
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Your password
                </label>
                <input
                  {...register('password')}
                  type="password"
                  id="password"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  required
                />
                {errors.password && (
                  <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.password.message}
                  </div>
                )}
              </div>
              {/* <div className="mb-5 flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                    
                  />
                </div>
              </div> */}
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
              >
                Submit
              </button>
              {errors.root && <div>{errors.root.message}</div>}
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
