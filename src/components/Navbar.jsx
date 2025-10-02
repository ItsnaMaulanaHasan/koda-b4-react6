import { SquarePen } from "lucide-react";

function Navbar() {
  return (
    <header>
      <nav className="bg-white z-2 fixed w-full px-10 py-5 flex justify-between items-center top-0">
        <div className="flex items-center h-10 gap-10">
          <img className="h-3/4" src="/public/icon/Medium-Wordmark-Black.svg" alt="medium wordmark black" />
          <form className="flex items-center p-[10px] bg-slate-50 gap-2 rounded-full">
            <label htmlFor="search" className="">
              <img className="h-[20px] w-[20px]" src="/public/icon/icon-search.svg" alt="icon search" />
            </label>
            <input className="focus:outline-none" type="text" />
          </form>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <SquarePen color="black" />
            <div>write</div>
          </div>
          <button className="rounded-full bg-green-700 px-4 py-2 text-white">Sign up</button>
          <button className="rounded full bg-white px-4 py-2">Sign in</button>
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
            <img src="/public/icon/empty-profile.svg" alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
