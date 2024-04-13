'use client';

import JumbotronCattoFlexible from "@/app/components/JumbotronCattoFlexible/JumbotronCattoFlexible";
import ButtonPageCloseCatto from "../../atoms/ButtonPageCloseCatto/ButtonPageCloseCatto";
// import { usePageDrawerDataCattoContext } from '@/app/components/Utils/PageDrawerDataProviderCatto/PageDrawerCattoDataProvider';
// import ImageCatto from "../../ImageCatto/ImageCatto";
import GitSimpleTestNavCatto from "../GitSimpleTestNavCatto/GitSimpleTestNavCatto";
// GitSimpleTestNavCatto


const GitOverview = () => {

  // let { isPageDrawerOpen } = usePageDrawerDataCattoContext();
  // console.log("Git Overview ||||||  === isPageDrawerOpen ===", isPageDrawerOpen);
  // const clickSideNavHandler = () => {
  //   console.log('Page isGitDrawerOpen === ', isPageDrawerOpen);
  //   isPageDrawerOpen = !isPageDrawerOpen;
  //   console.log('Page After Set | isGitDrawerOpen === ', isPageDrawerOpen);
  // };

  return (
    <>
      <div className="flex flex-col flex-nowrap h-full w-full ">
        <h1>yo here git overview</h1>
 <GitSimpleTestNavCatto/>
        <div className='h-56 flex-1'>
         
          <div className="relative">
            {/* <div className="block lg:hidden align-top "> */}
            <div className="absolute">
          <ButtonPageCloseCatto />
              {/* <button
                className=" top-0 left-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={clickSideNavHandler}
              >
                <div className="h-5 w-5 overflow-hidden relative rounded-lg shadow dark:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
                  <ImageCatto
                    src="/images/icons/drawer-nav.svg"
                    alt="cattoImage"
                    priority={false}
                    sizes="calc(49vw - 16px)"
                  />
                </div>
              </button> */}
            </div>

            <JumbotronCattoFlexible
              title="Git Overview"
              description="Git if free & open source version control system that is an industry standard. We are able to clone a repo; branch & merge.  "
            />
          </div>

        </div>
        <hr className="p-1" />
        <div className='flex-1 p-5 m-5 border-2 border-white rounded-2xl bg-[#f0efe7] text-[#4e443c] '>
          <h1>
            A simple common sample of steps we take in git.
          </h1>
          <br />
          <ul>
            <li>
              Install Git - need to have git installed to utilize it;
            </li>
            <li>
              Clone a repo - we clone the repo which is basically copying the repo to our local computer;
            </li>
            <li>
              Branch - We create a local branch to work on;
            </li>
            <li>
              Commit - we make an alter on one or a group of files then add & commit the files locally;
            </li>
            <li>
              Push - we push our changes to the origin which will move the files from our local computer to the repo so everyone else can view them;
            </li>
            <li>
              Pull Request - we will create a PR in the repo hosting manager tool such as Github || GitLab || BitBucket which are a few popular ones;
            </li>
            <li>
              Merge - We will merge our feature branch into the working/develop branch so others can view it.
            </li>
            <li>
              Fetch & Pull - fetching & pulling is another key concept & action that we take often to ensure our local branch is up to date with our teams alter;
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default GitOverview;
