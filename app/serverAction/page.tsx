// import { getServerSession } from 'next-auth';

export default async function ServerActionPage() {
  const whoAmI = async () => {
    'use server';
    // const session = await getServerSession();
    // return session?.user?.name || "Not Logged In";
    return 'Not Logged In';
  };
}
