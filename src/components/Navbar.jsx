import { SquarePen, Menu } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header>
      <nav className="bg-white z-2 fixed w-full px-4 sm:px-6 lg:px-10 py-5 top-0 md:h-auto h-25 content-end md:content-auto">
        <div className="flex justify-between items-center w-full">
          {/* Left Nav */}
          <div className="flex items-center h-10 gap-2 sm:gap-4 lg:gap-10 flex-1 min-w-0">
            <img className="h-[20px] sm:h-[24px] lg:h-3/4 flex-shrink-0" src="/public/icon/Medium-Wordmark-Black.svg" alt="medium wordmark black" />
            <form className="flex items-center px-3 h-[40px] w-full max-w-[200px] sm:max-w-xs lg:max-w-md bg-slate-50 gap-2 rounded-full">
              <label htmlFor="search" className="h-full flex-shrink-0">
                <img className="h-full w-[20px]" src="/public/icon/icon-search.svg" alt="icon search" />
              </label>
              <input id="search" className="focus:outline-none bg-transparent w-full min-w-0" type="text" placeholder="Search" />
            </form>
          </div>

          {/* Right Nav */}
          <div className="hidden md:flex items-center gap-5 flex-shrink-0">
            <div className="flex items-center gap-2 cursor-pointer">
              <SquarePen color="black" size={20} />
              <div>write</div>
            </div>
            <button className="rounded-full bg-green-700 px-4 py-2 text-white hover:bg-green-800 transition">Sign up</button>
            <button className="rounded-full bg-white px-4 py-2 hover:bg-gray-100 transition">Sign in</button>
            <div className="w-[30px] h-[30px] rounded-full overflow-hidden flex-shrink-0">
              <img src="/public/icon/empty-profile.svg" alt="" />
            </div>
          </div>

          {/* Hamburger Menu */}
          <button onClick={() => setOpenMenu(!openMenu)} className="lg:hidden flex-shrink-0">
            <Menu className="cursor-pointer" />
          </button>
        </div>
        {/* Nav Mobile */}
        {openMenu && (
          <div className="md:hidden flex flex-col gap-4 pt-4 pb-2 border-t border-gray-200 mt-4">
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-lg transition text-left" onClick={() => setOpenMenu(false)}>
              <SquarePen size={20} />
              <span>Write</span>
            </button>

            <button className="w-full rounded-full bg-green-700 px-4 py-2 text-white hover:bg-green-800 transition" onClick={() => setOpenMenu(false)}>
              Sign up
            </button>

            <button className="w-full rounded-full bg-white px-4 py-2 hover:bg-gray-100 transition border border-gray-300" onClick={() => setOpenMenu(false)}>
              Sign in
            </button>

            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-lg transition text-left" onClick={() => setOpenMenu(false)}>
              <div className="w-[24px] h-[24px] rounded-full overflow-hidden">
                <img src="/public/icon/empty-profile.svg" alt="profile" />
              </div>
              <span>Profile</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
