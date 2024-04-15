"use client";

import { useState } from "react";
import ImageCatto from "../../ImageCatto/ImageCatto";
import JSSideNavLinkList from "../JSSideNavLinkList/JSSideNavLinkList";

const JSNavDrawerCatto = () => {

  const [isJSDrawerOpen, setIsJSDrawerOpen] = useState(false);

  console.log('isJSDrawerOpen === ', isJSDrawerOpen);
  const clickCloseJSDrawer = () => {
    console.log("+++ isJSDrawerOpen === ", isJSDrawerOpen);
    setIsJSDrawerOpen(!isJSDrawerOpen);
    console.log(" 222 isJSDrawerOpen === ", isJSDrawerOpen);
  }
  const clickOpenJSDrawer = () => {
    console.log("---- in CLOSE isJSDrawerOpen === ", isJSDrawerOpen);
    setIsJSDrawerOpen(!isJSDrawerOpen);
    console.log("in CLosed 222 isJSDrawerOpen === ", isJSDrawerOpen);
  }

  return (
    <>
      <div className="h-full">
        {/* <div className="bg-yellow-300"> */}
        {/* <div className={`${isJSDrawerOpen ? "hidden" : "block"} bg-yellow-300 w-full md:block md:w-auto`}> */}

        {/* Closed */}
        <div className={`${!isJSDrawerOpen ? "hidden" : "block"} bg-yellow-300 h-full w-5`}>
          {/* <div className="w"> */}

          {/* </div> */}
          {/* <div className="relative w-full">
           
            <div className="absolute w-full"> */}
          {/* button */}
          <div className="flex justify-end">
            <button
              className="focus:ring-1 rounded-lg px-1 py-1 me-1 mb-1 m-auto"
              onClick={clickOpenJSDrawer}
            >
              <div className="h-5 w-5 overflow-hidden relative rounded-lg shadow dark:bg-gray-300 dark:border-gray-700 dark:hover:bg-gray-700">
                <ImageCatto
                  src="/images/icons/drawer.svg"
                  alt="cattoImage"
                  priority={false}
                  sizes="calc(49vw - 16px)"
                />
              </div>
            </button>
          </div>
          {/* </div>
          </div> */}
        </div>
        {/* <div className="block lg:hidden align-top "> */}

        {/* Open */}
        <div className={`${isJSDrawerOpen ? "hidden" : "block"} h-full w-full`}>
          <div className="relative w-full">
            <div className="absolute w-full">
              <div className="flex justify-end">
                <button
                  className="focus:ring-1 rounded-lg px-1 py-1 me-1 mb-1 m-auto"
                  onClick={clickCloseJSDrawer}
                >
                  <div className="h-5 w-5 overflow-hidden relative rounded-lg shadow dark:bg-gray-300 dark:border-gray-700 dark:hover:bg-gray-700">
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
  )
}
export default JSNavDrawerCatto;
