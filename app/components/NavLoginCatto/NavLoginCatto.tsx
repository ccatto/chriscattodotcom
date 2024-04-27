'use client';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import ImageCatto from '../ImageCatto/ImageCatto';
// import { getServerSession } from 'next-auth';
// import { SessionProvider } from 'next-auth/react';

const NavLoginCatto = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {/* Logged IN */}
        <li>
          {/* <li className='justify-center'>
          <span className='text-slate-400 text-xs'>
          <span className='text-slate-400 text-xs justify-center flex'>
          </span> */}
          <button
            className="block rounded text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
            onClick={() => signOut()}
          >
                    {/* Hey {session?.user?.name} - */}
            <div className="pr-1 text-slate-400">
      
              Hey - need name here session.user.name ?
               {/* {session} */}
            </div>
            Sign Out
          </button>
          {/* <ImageCatto {session.user.image ?? ""} */}
        </li>
      </>
    );
  }
  return (
    <>
      {/* Not signed in */}
      <li>
        {/* <li className='justify-center h-2.5 leading-[2.5rem]'> */}
        <button
          className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
          onClick={() => signIn()}
        >
          Sign In
        </button>
      </li>
    </>
  );
};

export default NavLoginCatto;
