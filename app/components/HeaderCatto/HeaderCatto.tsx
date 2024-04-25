import NavCatto from '../NavCatto/NavCatto';

const HeaderCatto = () => {
  return (
    <>
      <header className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 dark:border-gray-600">
        <NavCatto />
      </header>
    </>
  );
};
export default HeaderCatto;
