import { Metadata } from 'next';
// import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
// import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';
// import JumbotronCattoFlexible from '../../../../../components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import JumbotronCattoFlexible from '@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible';
import SyntaxHighlightingReactCatto from '@/app/components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';
// import SyntaxHighlightingReactCatto from '../../../../../components/Utils/SyntaxHighlightingReactCatto/SyntaxHighlightingReactCatto';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Chris Catto Code Next.js React Hook Form',
  description: 'Chris Catto Next.js React-Hook-Form',
};

const page = () => {
  const codeBlock = 'npm install react-hook-form';
  const codeBlock2 =
    "import { SubmitHandler, useForm } from 'react-hook-form';";
  const codeBlock3 =
    'const schema = z.object({\n  email: z.string().min(3),\n  password: z.string().min(3),\n});\ntype FormFields = z.infer<typeof schema>;';
  const codeBlock4 =
    "const {\n  register,\n  handleSubmit,\n  setError,\n  formState: { errors, isSubmitting, isSubmitSuccessful },\n} = useForm<FormFields>({\n  defaultValues: {\n    email: 'email ... ',\n   },\n  resolver: zodResolver(schema),\n});\n";
  const codeBlock5 = "<input{...register('email')}";
  const codeBlock6 =
    'const onSubmit: SubmitHandler<FormFields> = async (data) => {\n console.log("data === ", data);\n //do stuff\n} \n\n<form onSubmit={handleSubmit(onSubmit)}>';
  const codeBlock7 = "{errors.email && (\n<div>{errors.email.message}</div>\n)}";
  const codeBlock8 = "<button disabled={isSubmitting}";


  return (
    <>
      <div className="flex h-full w-full flex-col flex-nowrap ">
        <div className="flex-none">
          <JumbotronCattoFlexible
            title="Next.js React-hook-form Tutorial"
            description="Next.js React-hook-form is a very popular library to create forms in React & Next.js. Let's take a look at how we an leverage & implement react-hook-form."
          />
        </div>
        <hr className="p-0" />
        <div className="m-4 flex-[80] rounded-2xl p-4 text-[#FAFAFA] ring-2 ring-gray-300 dark:bg-[#09090B] dark:ring-gray-500">
          <h2 className="mb-4 inline-block text-3xl font-extrabold tracking-tight">
            Next.js React-Hook-Form
          </h2>
          <div>
            <div>
              <ul className="text-xl font-normal text-gray-700 dark:text-gray-400">
                <li className="m-5">
                  React-hook-from is an interesting library since it helps us to
                  manage complex forms. The
                  <Link
                    target="_blank"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="https://react-hook-form.com/get-started"
                  >
                    official React-Hook-Form page
                  </Link>{' '}
                  they state it's performant; flexible & extensible forms with
                  easy-to-use validation & I agree with that which is why I
                  choose to use it. In this steps I am going to also use Zod as
                  validation. We will install these 3 packages: react-hook-form hookform/resolvers zod.
                </li>
              </ul>
            </div>
            <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
            <div>
              <p className="flex justify-center text-2xl">
                <span className="pr-2 font-bold">Summary</span>of setting up
                react-hook-form in Next.js includes the following:
              </p>
              <div className="mt-4 flex justify-center">
                <ol className="w-full space-y-4">
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">
                          1. Add the react-hook-form package
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">
                          2. Import useForm from react-hook-form
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">
                          3. Define our schema for Zod validation & the Type of
                          the form fields
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">4. Custom hook useForm</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">
                          5. Register function</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">
                          6. Custom onSubmit Function & handleSubmit function
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">
                          7. Display errors
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">
                          8. Utilize isSubmitting for async function
                        </h3>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
              <p className="flex justify-center text-2xl">
                <span className="pr-2 font-bold">Details</span> of setting up
                next-auth in Next.js includes the following:
              </p>
              <div className="mt-4">
                <ol className="w-full space-y-4">
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          1. Install the react-hook-form package
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className="indent-4">
                            To install react-hook-form we add the package.
                          </div>
                          <SyntaxHighlightingReactCatto
                            codeString={codeBlock}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          2. Import useForm from react-hook-form
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className="indent-4">
                            We simply import the hook at the top of the file:
                            <SyntaxHighlightingReactCatto
                              codeString={codeBlock2}
                            />
                            <p className="mt-2">
                              While we are doing this lets also import the
                              SubmitHandler function
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          3. Define our schema for Zod validation & the Type of
                          the form fields
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className="indent-4">
                            In typescript we have to define our a type of the
                            form fields. With Zod we obviously need to have that
                            installed & imported at the top.
                          </div>
                          <SyntaxHighlightingReactCatto
                            codeString={codeBlock3}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          4. Custom hook useForm
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className=" indent-4">
                            We will make use of the custom hook useForm:
                          </div>
                          <SyntaxHighlightingReactCatto
                            codeString={codeBlock4}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          5. Make use of Register function
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className=" indent-4">
                            We register each input field so that each input
                            fields are registered and when we change the values
                            it gets sent to the form.
                          </div>
                          <SyntaxHighlightingReactCatto
                            codeString={codeBlock5}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          6. Custom onSubmit function in typescript & implement
                          handleSubmit function
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className=" indent-4">
                            We will create a custom onSubmit function which will
                            utilize SubmitHandler imported from react-hook-form.
                            Then in our form element we will use onSubmit
                            attribute & call the handleSubmit function:
                          </div>
                          <SyntaxHighlightingReactCatto
                            codeString={codeBlock6}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          7. Access formState and error object
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className=" indent-4">
                            We will show errors so below each input field we will add the error.field_name.message:
                          </div>
                          <SyntaxHighlightingReactCatto
                            codeString={codeBlock7}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-full rounded-lg border border-green-300 bg-green-50 p-4 text-slate-200 dark:border-green-800 dark:bg-gray-800 dark:text-slate-200"
                      role="alert"
                    >
                      <div className="flex flex-wrap items-center lg:flex-nowrap">
                        <h3 className="mb-3 font-medium lg:mb-0 lg:basis-1/4">
                          8. Utilize isSubmitting for async function to display feedback to user.
                        </h3>
                        <div className="w-full rounded-2xl bg-slate-600 p-2 lg:ml-5 lg:basis-3/4">
                          <div className=" indent-4">
                            Utilize isSubmitting for async function to display feedback to user.
                          </div>
                          <SyntaxHighlightingReactCatto
                            codeString={codeBlock8}
                          />
                        </div>
                      </div>
                    </div>
                  </li>

                </ol>
              </div>
              <hr className="m-5 mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
              <p className="indent-5">
                Let's take a look at an entire file where we use react-hook-form:
                <script src="https://gist.github.com/ccatto/d33aadd7e683e25ba8c6942b5eeec9b1.js"></script>  
                end
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
