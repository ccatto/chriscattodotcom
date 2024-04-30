import NavWrapperCatto from '../Nav/NavWrapperCatto';
// import NavCatto from '../NavCatto/NavCatto';
// import NextAuthLoginOutCatto from '../Auth/NextAuthLoginOutCatto';
// import NavSimpleCatto from '../NavSimpleCatto/NavSimpleCatto';

const HeaderCatto = () => {
  return (
    <>
      <header className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 dark:border-gray-600">
        <NavWrapperCatto />
      </header>
    </>
  );
};
export default HeaderCatto;
