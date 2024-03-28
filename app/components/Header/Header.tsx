// import React from 'react'
// import Link from 'next/link';
// import Nav from '../Nav/Nav';
import NavCatto from '../NavCatto/NavCatto';

const Header = () => {
  return (
    <>
        <div className="fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <NavCatto/>
        </div>
    </>

  )
}
export default Header