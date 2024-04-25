'use client';

import { useState } from 'react';
import ImageCatto from '../../ImageCatto/ImageCatto';
import JSSideNavLinkList from '../JSSideNavLinkList/JSSideNavLinkList';

const JSNavDrawerCatto = () => {
  const [isJSDrawerOpen, setIsJSDrawerOpen] = useState(false);
  const clickCloseJSDrawer = () => {
    console.log('inside close ');
    setIsJSDrawerOpen(!isJSDrawerOpen);
  };
  const clickOpenJSDrawer = () => {
    console.log('inside open ');
    setIsJSDrawerOpen(!isJSDrawerOpen);
  };

  return (
    <>
      <div className="h-full">
        {/* Closed */}
        <div className={`${!isJSDrawerOpen ? 'hidden' : 'block'} h-full w-5`}>
          <div className="flex justify-end">
            <button
              className="m-auto mb-1 me-1 rounded-lg px-1 py-1 focus:ring-1"
              onClick={clickOpenJSDrawer}
            >
              <div className="relative h-5 w-5 overflow-hidden rounded-lg shadow dark:border-gray-700 dark:bg-gray-300 dark:hover:bg-gray-700">
                <ImageCatto
                  src="/images/icons/drawer.svg"
                  alt="cattoImage"
                  priority={false}
                  sizes="calc(49vw - 16px)"
                />
              </div>
            </button>
          </div>
        </div>
        {/* Open */}
        <div className={`${isJSDrawerOpen ? 'hidden' : 'block'} h-full w-full`}>
          <div className="relative w-full">
            {/* <div className="absolute w-full"> */}
            <div className="absolute block w-full lg:hidden">
              <div className="flex justify-end">
                <button
                  className="m-auto mb-1 me-1 rounded-lg px-1 py-1 focus:ring-1"
                  onClick={clickCloseJSDrawer}
                >
                  <div className="relative h-5 w-5 overflow-hidden rounded-lg shadow dark:border-gray-700 dark:bg-gray-300 dark:hover:bg-gray-700">
                    <ImageCatto
                      src="/images/icons/close-x.svg"
                      alt="cattoImage"
                      priority={false}
                      sizes="calc(49vw - 16px)"
                    />
                  </div>
                </button>
              </div>
            </div>
            <JSSideNavLinkList />
          </div>
        </div>
      </div>
    </>
  );
};

export default JSNavDrawerCatto;
