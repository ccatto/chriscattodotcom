import React from 'react';
const Footer = () => {
  return (
    <>
      <footer className="m-4 rounded-lg bg-white shadow dark:bg-gray-800">
        <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © {new Date().getFullYear()}{' '}
            <a href="https://www.ChrisCatto.com/" className="hover:underline">
              ChrisCatto.com™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Footer;
