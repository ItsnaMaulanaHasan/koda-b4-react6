import Navbar from "../components/Navbar";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { getData } from "../utils/getData";
import { useEffect, useState } from "react";
import CardArticle from "../components/CardArticle";

function HomePage() {
  const [dataArticles, setDataArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getData("/public/data/articles.json").then((data) => {
      setDataArticles(data);
      setIsLoading(false);
    });
  }, []);

  const handleClick = (creator, slug) => {
    navigate(`/${creator}/${slug}`);
  };

  const [topArticle, ...restArticles] = dataArticles;

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Image header */}
        <div className="h-[200px] sm:h-[250px] md:h-[300px] w-full overflow-hidden">
          <img className="w-full h-full object-cover" src="/public/img/img-home.webp" alt="Image headerj home" />
        </div>
        {/* Header */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 px-4 sm:px-8 md:px-20 lg:px-40 py-6 sm:py-8 md:py-10">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex gap-3 sm:gap-5 max-w-full md:max-w-[70%]">
              <img className="h-16 w-16 sm:h-20 sm:w-20 md:h-25 md:w-25 border border-slate-300 object-cover" src="/public/img/logo-fazztrack.jpeg" alt="Fazztrack logo" />
              <div>
                <h1 className="font-medium text-xl sm:text-2xl md:text-3xl">fazztrack</h1>
                <p className="text-sm sm:text-base text-gray-700">Belajar menjadi software engineer secara online/remote selama 3-6 bulan sampai diterima kerja, tanpa bayar di depan (ISA).</p>
              </div>
            </div>
            <div>
              <button className="bg-black text-white rounded-full px-4 py-2 cursor-pointer">Follow</button>
            </div>
          </div>
          {/* Navbar Internal */}
          <nav className="w-screen -mx-4 sm:-mx-8 md:-mx-20 lg:-mx-40 border-b border-slate-300 px-4 sm:px-8 md:px-20 lg:px-40 py-3 text-gray-500">
            <ul className="flex gap-3 sm:gap-5 text-sm sm:text-base">
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
          <div onClick={() => handleClick(topArticle.creator.name, topArticle.slug)} className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
            <img className="w-full md:max-w-1/2" src={topArticle.image} alt={topArticle.title} />
            <div className="flex flex-col gap-2 sm:gap-3 w-full md:w-1/2">
              <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl line-clamp-2">{topArticle.title}</h1>
              <p className="line-clamp-3 sm:line-clamp-4 text-sm sm:text-base text-gray-700">{topArticle.content}</p>
              <div className="flex gap-2 items-center text-gray-500 text-xs sm:text-sm">
                <img className="rounded-full h-5 w-5 sm:h-6 sm:w-6 object-cover" src={topArticle.creator.avatar} alt={topArticle.creator.name} />
                <span className="truncate max-w-[120px] sm:max-w-none">{topArticle.creator.name}</span>
                <span>•</span>
                <span>{moment(topArticle.publishedAt).format("MMM DD")}</span>
                <span>•</span>
                <span>{topArticle.readTime} min read</span>
              </div>
            </div>
          </div>
          {/* List Article */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {restArticles.map((article) => (
              <Link key={article.id} className="" to={`/${article.creator.name}/${article.slug}`}>
                <CardArticle articleData={article} />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
