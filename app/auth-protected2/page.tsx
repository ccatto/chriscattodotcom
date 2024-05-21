'use client';

// import { useSession } from 'next-auth/react';
import React from 'react';
// import { auth, signIn, signOut } from 'auth';

export default async function Page() {
  <h1>holding</h1>;
  // const session = await auth();
  // const { data: session } = useSession();
  // console.log('99auth protected session: ', session);
  // if (!session || !session.user) {
  //   return (
  //     <div className="m-3 mt-20 text-white">
  //       <h2>NOT LOgged in auth protected fun page2</h2>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <>
  //       <hr className="m-3" />
  //       <div className="mt-20 text-white">
  //         <h2 className="mt-20 text-white">2 auth protected fun page2</h2>
  //       </div>
  //       <hr className="m-3" />
  //     </>
  //   );
  // }
}

// "use client";
// import { useSession } from 'next-auth/react';
// import React from 'react';

// // export default async function Page() {
// const page = () => {

//   const { data: session } = useSession();
//   console.log('here inside protect client page session: ', session);
//   console.log('here inside protect client page sessionUser: ', session?.user);
//   // console.log("data === ", data);
//   // if (!session || !session.user) return
//   // <div className='mt-20'>
//   //   you need to sign in yo!
//   // </div>

//   return
//   <div>
//     <hr className="m-3" />
//     <div className="text-white mt-20">
//       <h1>This is intended for a protected client page</h1>
//     </div>
//     <hr className="m-3" />
//   </div>;

// }
// export default page;

// // import JumbotronCattoCode from '../../components/JumbotronCattoCode/JumbotronCattoCode';
// // import {Metadata} from 'next';
// // import {getServerSession} from 'next-auth';
// // import {redirect} from 'next/navigation';

// // export const metadata: Metadata = {
// //   title: 'Chris Catto auth fun protected client',
// //   description:
// //     "Chris Catto Code | Code tutorials including: JavaScript SFCC Next API's .NET AWS SQL CSS React GraphQL TypeScript.",
// // };
// // const session = await getServerSession();

// // if (!session || !session.user) {
// //   redirect('/api/auth/signin');
// // }

// {/*
//         getServerSession Result: {session?.user?.name ? (
//           <div> {session?.user?.name}</div>
//         ) : (
//           <div>not logged in</div>
//         )} */}
