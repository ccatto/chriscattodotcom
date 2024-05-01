'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  userNote: z.string().min(5),
});

type FormFields = z.infer<typeof schema>;

const ContactFormCatto = () => {
  const [isSubmitSuccessfulTrue, setIsSubmitSuccessfulTrue] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormFields>({
    defaultValues: {
      userNote: 'Hello Chris Catto ...',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const response = await fetch('api/email', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch {
      setError('root', {
        message: 'This is an error with the form',
      });
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      setIsSubmitSuccessfulTrue(true);
    }
  }, [isSubmitSuccessful]);

  return (
    <>
      {!isSubmitSuccessfulTrue && (
        <div>
          <div className="flex items-center justify-center">
            <JumbotronCattoFlexible
              title="Contact Chris Catto"
              description="Please feel free to reach out to me & send me a message."
            />
          </div>
          <div className="mx-auto mb-5 mt-5 max-w-3xl rounded-2xl border bg-slate-800 p-5">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6 grid gap-6 md:grid-cols-1">
                <div className="">
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                      <svg
                        className="h-4 w-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                      >
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                      </svg>
                    </div>
                    <input
                      {...register('email')}
                      type="text"
                      placeholder="Email"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      autoFocus
                    />
                  </div>
                  {errors.email && (
                    <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {errors.email.message}
                    </div>
                  )}
                </div>
                <div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                      Name
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      placeholder=""
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    />
                  </div>
                  {errors.name && (
                    <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {errors.name.message}
                    </div>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Message to Chris:
                  </label>
                  <textarea
                    {...register('userNote')}
                    className="block h-40 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                  {errors.name && <div>{errors.userNote?.message}</div>}
                </div>
              </div>
              <div className="flex items-center justify-center">
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
          <div className="mb-5 flex items-center justify-center">
            <Link
              href="/code"
              className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Check out some code
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
        </div>
      )}
    </>
  );
};

export default ContactFormCatto;
