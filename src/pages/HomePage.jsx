import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Image heade */}
        <div className="h-[300px] w-full overflow-hidden">
          <img className="" src="/public/img/img-home.webp" alt="Image headerj home" />
        </div>
        {/* Header */}
        <div iv className="flex flex-col gap-10 px-40 py-10">
          <div className="flex justify-between">
            <div className="flex gap-5 max-w-[70%]">
              <img className="h-25 w-25 border border-slate-300" src="/public/img/logo-fazztrack.jpeg" alt="" />
              <div>
                <h1 className="font-medium text-3xl">fazztrack</h1>
                <p>Belajar menjadi software engineer secara online/remote selama 3-6 bulan sampai diterima kerja, tanpa bayar di depan (ISA).</p>
              </div>
            </div>
            <div>
              <button className="bg-black text-white rounded-full px-4 py-2 cursor-pointer">Follow</button>
            </div>
          </div>
          {/* Navbar Internal */}
          <nav className="w-screen -ml-40 border-b border-slate-300 px-40 py-3 text-gray-500">
            <ul className="flex gap-5">
              <Link to={"/"}>
                <li className="hover:text-black">Tutorial</li>
              </Link>
              <p>|</p>
              <Link to={"/"}>
                <li className="hover:text-black">Daftar Sekarang</li>
              </Link>
            </ul>
          </nav>
          {/* Top Article */}
          <div className="flex items-center">
            <img src="" alt="" />
            <div>
              <h1>Bootstrapping Project CodeIgniter4 menggunakan Docker</h1>
              <p></p>
            </div>
          </div>
          {/* List Article */}
        </div>
      </main>
    </>
  );
}

export default HomePage;
