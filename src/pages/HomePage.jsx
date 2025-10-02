import Navbar from "../components/Navbar";
import moment from "moment";
import { Link } from "react-router-dom";
import { getData } from "../utils/getData";
import { useEffect, useState } from "react";
import CardArticle from "../components/CardArticle";

function HomePage() {
  const [dataArticles, setDataArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData("/public/data/articles.json").then((data) => {
      setDataArticles(data);
      setIsLoading(false);
    });
  }, []);

  const [topArticle, ...restArticles] = dataArticles;

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Image heade */}
        <div className="h-[300px] w-full overflow-hidden">
          <img className="" src="/public/img/img-home.webp" alt="Image headerj home" />
        </div>
        {/* Header */}
        <div className="flex flex-col gap-10 px-40 overflow-hidden py-10">
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
          <Link className="flex" to={`/${topArticle.creator.name}/${topArticle.slug}`}>
            <div className="flex gap-5">
              <img className="max-w-1/2" src={topArticle.image} alt="" />
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold text-4xl">{topArticle.title}</h1>
                <p className="line-clamp-3">{topArticle.content}</p>
                <div className="flex gap-2 items-center text-gray-500 text-sm">
                  <img className="rounded-full overflow-hidden h-5 w-5" src={topArticle.creator.avatar} alt={topArticle.creator.name} />
                  <div>{topArticle.creator.name}</div>•<div>{moment(topArticle.publishedAt).format("MMM DD")}</div>•<div>{topArticle.readTime} min read</div>
                </div>
              </div>
            </div>
          </Link>
          {/* List Article */}
          <div className="grid grid-cols-3 gap-5">
            {restArticles.map((article) => (
              <Link id={article.id} className="flex" to={`/${article.creator.name}/${article.slug}`}>
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
