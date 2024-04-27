import JumbotronCattoCode from '../../components/JumbotronCattoCode/JumbotronCattoCode';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Chris Catto auth fun',
  description:
    "Chris Catto Code | Code tutorials including: JavaScript SFCC Next API's .NET AWS SQL CSS React GraphQL TypeScript.",
};

export default async function Page() {
  const session = await getServerSession();

  if (!session || !session.user) {
    redirect('/api/auth/signin');
  }

  return (
    <>
      <hr className="m-3" />
      <div className="text-white">
        {/* <h1>This is protected CMS</h1>
        getServerSession Result: {session?.user?.name ? (
          <div> {session?.user?.name}</div>
        ) : (
          <div>not logged in</div>
        )} */}
      </div>
      <hr className="m-3" />
    </>
  );
}
