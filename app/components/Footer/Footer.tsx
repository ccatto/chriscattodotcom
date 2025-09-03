import React from 'react';
// import fs from 'fs';
// import path from 'path';

const Footer = () => {
  // const packageJsonPath = path.resolve(process.cwd(), 'package.json');
  // const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
  // const version = packageJson.version;
  
  return (
    <>
      <footer className="m-4 rounded-lg bg-white shadow dark:bg-gray-800">
        <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © {new Date().getFullYear()}{' '}
            <a href="https://www.ChrisCatto.com/" className="hover:underline">
              ChrisCatto.com™
            </a>
            . All Rights Reserved.
            {/* <span className="text-center text-sm text-slate-500 dark:text-slate-500">
            (v{version})
            </span> */}
          </div>
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
