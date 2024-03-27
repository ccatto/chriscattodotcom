import React from 'react'
import Link from 'next/link';
import Nav from '../Nav/Nav';
import NavCatto from '../NavCatto/NavCatto';

const Header = () => {
  return (
    <>
        <span>Header Component</span>
        <Nav/>
        <h3>different navs</h3>
        <NavCatto/>
    </>

  )
}
export default Header