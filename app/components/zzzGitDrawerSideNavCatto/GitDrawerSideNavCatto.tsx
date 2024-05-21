'use client';
import React, { useState } from 'react';
import ImageCatto from '../ImageCatto/ImageCatto';
import SideNavGitCatto from '../SideNavGitCatto/SideNavGitCatto';
// import { usePageDrawerDataCattoContext } from '../Utils/PageDrawerDataProviderCatto/PageDrawerCattoDataProvider';
// import GitSimpleTestNavCatto from '../Git/zzzGitSimpleTestNavCatto/GitSimpleTestNavCatto';
// import GitSimpleTestNavCatto from '../Git/zzzGitSimpleTestNavCatto/GitSimpleTestNavCatto';

const GitDrawerSideNavCatto = () => {
  let [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // New Context approach YO:
  // let { isPageDrawerOpen } = usePageDrawerDataCattoContext();
  // console.log("------ Context isPageDrawerOpen2 === ", isPageDrawerOpen);
  // let { isPageDrawerOpen } = usePageDrawerDataCattoContext();
  // console.log('-- ++ ---- Context isPageDrawerOpen === ', isPageDrawerOpen);
  let openDrawer = false;
  // const [isGitDrawerOpen, setGitDrawerOpen] = useState(false);
  let simpleFalse = false;

  const clickSideNavHandler = () => {
    // console.log('isGitDrawerOpen === ', isPageDrawerOpen);
    // isPageDrawerOpen = !isPageDrawerOpen;
    // isDrawerOpen = isPageDrawerOpen;
    // console.log('state variable isDrawerOpen === ', isDrawerOpen);
    // console.log('After Set | isGitDrawerOpen === ', isPageDrawerOpen);
    // console.log(typeof isPageDrawerOpen);
    simpleFalse = true;
    console.log('simpleFalse ', simpleFalse);
  };

  console.log(
    '~~~~~~~~~~~~~~~~~~state variable isDrawerOpen === ',
    isDrawerOpen,
  );

  return (
    <>
      {/* <div className={`w-full md:block md:w-auto ${isNavOpen ? "hidden" : "block"}`}></div> */}
      {/* <div
        className={`${simpleFalse ? 'hidden' : 'block'}  h-20 w-20 bg-red-500 `}
      >
        <GitSimpleTestNavCatto />
      </div> */}

      <aside
        className={`lg:flex-[20]  ${isDrawerOpen ? 'hidden' : 'block'} `}
        aria-label="Sidebar"
      >
        {/* <aside className={`lg:flex-[20]  ${isPageDrawerOpen ? "hidden" : "block"} `} aria-label="Sidebar"> */}

        {/* <aside className={`lg:flex-[20]  `} aria-label="Sidebar"> */}
        <button
          className="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={clickSideNavHandler}
        >
          whole aside button!
          <div className="relative h-5 w-5 overflow-hidden rounded-lg shadow dark:border-gray-700 dark:bg-gray-100 dark:hover:bg-gray-700">
            <ImageCatto
              src="/images/icons/close-x.svg"
              alt="cattoImage"
              priority={false}
              sizes="calc(49vw - 16px)"
            />
          </div>
        </button>

        {/* working below simple no button or hiding */}
        {/* <aside className="hidden lg:block lg:flex-[20]" aria-label="Sidebar"> */}
        {/* <!-- drawer init and toggle --> */}
        {/* <div className="text-center">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
              Show drawer
            </button>
          </div> */}
        <SideNavGitCatto />
      </aside>
    </>
  );
};
export default GitDrawerSideNavCatto;
