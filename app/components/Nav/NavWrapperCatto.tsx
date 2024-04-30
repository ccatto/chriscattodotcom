import NavLeftNameImageCatto from "./NavLeftNameImageCatto";
import NextAuthLoginOutCatto from "../Auth/NextAuthLoginOutCatto";
import NavLinksCatto from "./NavLinksCatto";

const NavWrapperCatto = () => {
  return (
    <nav className="flex h-20 items-center justify-center border-gray-200 bg-white dark:bg-gray-900">
      <div className="flex w-[70%]">
        <div className="basis-1/4">
          <NavLeftNameImageCatto />
        </div>
        <div className="flex basis-3/4">
          <div className="flex ml-auto">
            <NavLinksCatto />
            <NextAuthLoginOutCatto />
          </div>
        </div>
      </div>

    </nav>
  );

}

export default NavWrapperCatto;

