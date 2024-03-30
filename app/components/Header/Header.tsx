import NavCatto from '../NavCatto/NavCatto';

const Header = () => {
  return (
    <>
        <header className="fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <NavCatto/>
        </header>
    </>
  )
}
export default Header
