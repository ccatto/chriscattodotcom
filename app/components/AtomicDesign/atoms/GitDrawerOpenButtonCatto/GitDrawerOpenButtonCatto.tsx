'use client';
import React, { useState } from "react";
import ImageCatto from "../../../ImageCatto/ImageCatto";


const clickSideNavHandler = () => {

  // const [isGitDrawerOpen, setGitDrawerOpen] = useState(true);

  // const handleClick = () => {
  //   setGitDrawerOpen(!isGitDrawerOpen);
  // };

  // console.log('00 22 00 isGitDrawerOpen === ', isGitDrawerOpen);

  // return (event: React.MouseEvent) => {
  //   // console.log('1 isGitDrawerOpen === ', isGitDrawerOpen);
  //   // console.log('inside PREVIOUS CLICK');
  //   setGitDrawerOpen(!isGitDrawerOpen);
  //   console.log('setGitDrawerOpen === ', isGitDrawerOpen);
  //   // if (currentImg === 0 ) {
  //   //     console.log('inside AT beginning');
  //   //     setCurrentImg(totalSlides - 1);
  //   // } else {
  //   //     console.log('not at end yet');
  //   //     setCurrentImg(currentImg - 1);
  //   // }
  //   event.preventDefault();
  // }
}

const GitDrawerOpenButtonCatto = () => {

  const [isGitDrawerOpen, setGitDrawerOpen] = useState(true);
  const clickSideNavHandler = () => {
    console.log('isGitDrawerOpen === ', isGitDrawerOpen);
    setGitDrawerOpen(!isGitDrawerOpen);
    console.log('After Set | isGitDrawerOpen === ', isGitDrawerOpen);
  };

  return (
    <>
    <div className={`lg:flex-[20]`}>
      {/* <div className={`lg:flex-[20] ${isGitDrawerOpen ? "hidden" : "block"}`} > */}
        {/* <aside className={`lg:flex-[20] ${isGitDrawerOpen ? "hidden" : "block"}`} aria-label="Sidebar"> */}
        blah
        <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={clickSideNavHandler}
          >
            Catto Button 1
            <div className="h-5 w-5 overflow-hidden relative rounded-lg shadow dark:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
              <ImageCatto
                src="/images/icons/drawer-nav.svg"
                alt="cattoImage"
                priority={false}
                sizes="calc(49vw - 16px)"
              />
            </div>
          </button>

        zzzComponentExample
      </div>
    </>
  )
}
export default GitDrawerOpenButtonCatto;
