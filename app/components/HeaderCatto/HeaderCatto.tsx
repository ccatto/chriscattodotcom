import NavCatto from '../NavCatto/NavCatto';
// AppBar
// import AppBar from '@/app/appbar';
// import AppBar44 from '@/app/appbar44';
// import AuthServerInOutFormsCatto from '../UI-client-server/AuthServerInOutFormsCatto/AuthServerInOutFormsCatto';
import NextAuthLoginOutCatto from '../Auth/NextAuthLoginOutCatto';

const HeaderCatto = () => {
  return (
    <>
      <header className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 dark:border-gray-600">
        <NavCatto>
          {/* <AuthServerInOutFormsCatto /> */}
          <NextAuthLoginOutCatto />
        </NavCatto>
        {/* <h1>app bar in nav</h1>
        <AppBar/>
        <AppBar44/> */}
      </header>
    </>
  );
};
export default HeaderCatto;
