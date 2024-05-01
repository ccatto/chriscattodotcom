'use client';

import SimpleForm from '@/app/components/Forms/simpleForm';

// import { SubmitHandler, useForm } from "react-hook-form";
// import { z } from 'zod';
// import { zodResolver } from "@hookform/resolvers/zod";

// const schema = z.object({
//   email: z.string().email(),
//   password: z.string().min(4),
// });

// type FormFields = z.infer<typeof schema>;
// // type FormFields = {
// //   email: string;
// //   password: string;
// // }

const page = () => {
  // const { register,
  //   handleSubmit,
  //   setError,
  //   formState: { errors, isSubmitting },
  // } = useForm<FormFields>({
  //   defaultValues: {
  //     email: "test@email.com"
  //   },
  //   resolver: zodResolver(schema),
  // });

  // const onSubmit: SubmitHandler<FormFields> = async (data) => {
  //   try {
  //     // simple await 1 second to prove await with async
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     console.log('data == ', data);
  //   } catch {
  //     setError("root", {
  //       message: "This is an error with the form",
  //     } )
  //   }
  // };

  return (
    <>
      <SimpleForm />
      {/* <form className="gap-2" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email")} type="text" placeholder="Email" />
        {errors.email && (
          <div>
            {errors.email.message}
          </div>
        )}
        <input {...register("password")}
          type="password" placeholder="Password" />
        {errors.password && (
          <div>
            {errors.password.message}
          </div>
        )}
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading.." : "Submit"}
        </button>
        {errors.root && (
          <div>
            {errors.root.message}
          </div>
        )}
      </form> */}
    </>
  );
};

export default page;

// const page = () => {
//   return (<h2>simple form</h2>);
// }
// export default page;
