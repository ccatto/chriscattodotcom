'use client';
import React, { useState } from 'react';
import ImageCatto from '@/app/components/ImageCatto/ImageCatto';

const [isDrawerContainerOpen, setIsDrawerContainerOpen] = useState(true);

const clickCloseContainerDrawer = () => {
  console.log(
    'inside click CloseJSDrawer is container DrawerOpen===',
    isDrawerContainerOpen,
  );
  setIsDrawerContainerOpen(!isDrawerContainerOpen);
  console.log(
    'inside AFTER SET click CloseJSDrawer is container DrawerOpen===',
    isDrawerContainerOpen,
  );
};

const clickOpenJSDrawer = () => {
  console.log(
    'inside click OPEN JSDrawer is container DrawerOpen===',
    isDrawerContainerOpen,
  );
  setIsDrawerContainerOpen(!isDrawerContainerOpen);
  console.log(
    'inside AFTER SET click OPEN JSDrawer is containerDrawerOpen===',
    isDrawerContainerOpen,
  );
};

const DrawerTwoColumnContainer = () => {
  return (
    <>
      <div className="h-96 bg-red-800">DrawerTwoColumnContainer</div>
      <aside>
        <h3 className="text-white">
          Inside aside
          <br />
          <br />
          <button
            className="m-auto mb-1 me-1 rounded-lg px-1 py-1 focus:ring-1"
            onClick={clickCloseContainerDrawer}
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
          <br />
          <br />
        </h3>
      </aside>
    </>
  );
};
export default DrawerTwoColumnContainer;
