"use client";
import { usePageDrawerDataCattoContext } from '@/app/components/Utils/PageDrawerDataProviderCatto/PageDrawerCattoDataProvider';
import ImageCatto from "../../ImageCatto/ImageCatto";

const ButtonPageCloseCatto = () => {
  let { isPageDrawerOpen } = usePageDrawerDataCattoContext();
  const clickSideNavHandler = () => {
    console.log('ATOM Page isGitDrawerOpen === ', isPageDrawerOpen);
    isPageDrawerOpen = !isPageDrawerOpen;
    // setIsNavOpen(!isNavOpen);
    console.log('ATOM Page After Set | isGitDrawerOpen === ', isPageDrawerOpen);
  };

  return (
    <>
      {/* <div className={`w-full md:block md:w-auto ${isNavOpen ? "hidden" : "block"}`}></div> */}
      {/*  className= {` top-0 left-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800  ${isNavOpen ? "hidden" : "block"}`}       */}
      {/* <div className={`hidden`} > */}

      <div className={` ${isPageDrawerOpen ? "hidden" : "block"}`} >
        This spot
        <button
          // className={` ${isPageDrawerOpen ? "hidden" : "block"}`}
          className={` top-0 left-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800  ${isPageDrawerOpen ? "hidden" : "block"}`} 

          // className=" top-0 left-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={clickSideNavHandler}
        >
          <div 
          // className={` ${isPageDrawerOpen ? "hidden" : "block"}`}
          className="h-5 w-5 overflow-hidden relative rounded-lg shadow dark:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <ImageCatto
              src="/images/icons/drawer-nav.svg"
              alt="cattoImage"
              priority={false}
              sizes="calc(49vw - 16px)"
            />
          </div>
        </button>
      </div>
    </>
  )
}

export default ButtonPageCloseCatto;
