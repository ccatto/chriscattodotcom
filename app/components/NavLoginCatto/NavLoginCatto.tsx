"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { getServerSession } from 'next-auth';
// import SessionProvider from "./components/SessionProvider";
import { SessionProvider } from "next-auth/react";
// import { getServerSession } from 'next-auth';


const NavLoginCatto = () => {
  const session =   getServerSession();
  // const session = await getServerSession(req, res, authConfig);
  // <SessionProvider>
    // const { data: session } = useSession();
  // </SessionProvider>
  
  if (session) {
    return (
      <>
        {/* <SessionProvider session={session}> */}
          {session?.user?.name} <br />
          <button onClick={() => signOut()}>Sign Out</button>
        {/* </SessionProvider> */}

      </>
    )
  }
  return (
    <>
      {/* <SessionProvider session={session}> */}
        Not signed in <br />
        <button className="text-white" onClick={() => signIn()}>Sign In</button>

      {/* </SessionProvider> */}
    </>
  )
}

export default NavLoginCatto;


// function AuthButton() {
//   const {data: session} = useSession();

//   if (session) {
//     return (
//       <>
//         {session?.user?.name} <br/>
//         <button onClick={() => signOut()}>Sign Out</button>
//       </>
//     )
//   }
//   return(
//     <>
//       Not signed in <br/>
//       <button className="text-white" onClick={() => signIn()}>Sign In</button>
//     </>
//   )
// }
