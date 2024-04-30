import NavLeftNameImageCatto from "./NavLeftNameImageCatto";
import NextAuthLoginOutCatto from "../Auth/NextAuthLoginOutCatto";
import NavLinksCatto from "./NavLinksCatto";

const NavWrapperCatto = () => {
  return (
    <>
      <div className="hidden lg:block w-full">
        <nav className="flex h-20 items-center justify-center border-gray-200 bg-white dark:bg-gray-900">
          {/* Desktop */}
          {/* <div className="hidden lg:block w-full"> */}
          <div className="flex w-[70%] ml-auto mr-auto">
            <div className="basis-1/4">
              <NavLeftNameImageCatto />
            </div>
            <div className="flex basis-3/4">
              <div className="flex ml-auto mr-3">
                <NavLinksCatto />
                <div className="hidden">
                  <NextAuthLoginOutCatto />
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </nav>
      </div>
      {/* Mobile: */}
      <div className="block lg:hidden">
        <nav className="flex h-20 border-gray-200 bg-white dark:bg-gray-900">
          <div className="flex w-full items-center">
            <div className="basis-1/2">
              <NavLeftNameImageCatto />
            </div>
            <div className="basis-1/2">
              <NavLinksCatto />
            </div>
          </div>
        </nav>
      </div>

    </>
  );

}

export default NavWrapperCatto;

