import { auth, signIn, signOut } from 'auth';

async function AuthServerInOutFormsCatto() {
  const session = await auth();
  return (
    <>
      {session && session.user ? (
        <>
          <h1>sign out 44</h1>
          <form
            action={async () => {
              await signOut();
            }}
          >
            <button className="text-white" type="submit">
              Sign Out 44
            </button>
          </form>
        </>
      ) : (
        <>
          <h1>sign in 444</h1>
          <form
            action={async () => {
              await signIn();
            }}
          >
            <button className="text-white" type="submit">
              🔐 Sign In 444
            </button>
          </form>
        </>
      )}
    </>
  );
}
export default AuthServerInOutFormsCatto;
