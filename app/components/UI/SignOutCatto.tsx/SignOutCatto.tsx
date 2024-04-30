// "use server";

import Link from "next/link";
import { auth, signOut } from "../../../../auth";
import { Button } from "@/app/ui/button";

async function SignOutCatto() {
  const session = await auth();
  return (
    <>

      <div className="flex gap-2">
        <p>{session?.user.name}</p>
        <form
          action={async () => {
            // "use server";
            await signOut();
          }}
        >
          <Link href="/api/auth/signout"
        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
      > | sign out | </Link>
          {/* <button type="submit">Sign Out</button> */}
        </form>
      </div>


      {/* <Link href="/api/auth/signout"
        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
      > | sign out | </Link> */}



      {/* <form action={async () => {
      await signOut()
    }}>
      <Button type="submit" className="text-white">Sign Out</Button>
    </form> */}
    </>
  )
}
export default SignOutCatto