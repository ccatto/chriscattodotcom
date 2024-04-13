import NavCatto from '../NavCatto/NavCatto';
import GitSimpleTestNavCatto from '../Git/GitSimpleTestNavCatto/GitSimpleTestNavCatto';
// GitSimpleTestNavCatto

const HeaderCatto = () => {
  return (
    <>
        <header className="fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <NavCatto/>
            {/* <div className='h-44 bg-red-200'>
             gere 
              <GitSimpleTestNavCatto/>
            </div> */}
        </header>
    </>
  )
}
export default HeaderCatto
