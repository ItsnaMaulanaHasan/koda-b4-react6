import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../utils/getData";
import moment from "moment";
import Markdown from "react-markdown";

function Article() {
  const [dataArticles, setDataArticles] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { creator, slug } = useParams();
  console.log(slug);
  const navigate = useNavigate();

  useEffect(() => {
    getData("/public/data/articles.json").then((data) => {
      const dataArticle = data.find((data) => data.creator.name === creator && data.slug === slug);
      setDataArticles(dataArticle);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <>
      <main>
        <nav className="px-4 md:px-10 lg:px-40 bg-white py-5 w-full border-b border-slate-300 mt-25 md:mt-20">
          <button onClick={() => navigate("/")} className="font-semibold text-lg md:text-xl cursor-pointer">
            fazztrack
          </button>
        </nav>
        <div className="mt-6 md:mt-10 px-4 md:px-10 lg:px-40">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr_1fr] gap-6 lg:gap-10">
            {/* Aside */}
            <aside className="hidden lg:flex flex-col gap-2">
              <img className="h-10 w-10 border border-slate-300" src="/public/img/logo-fazztrack.jpeg" alt="Fazztrack logo" />
              <p className="text-sm text-[#6B6B6B] leading-relaxed">Belajar menjadi software engineer secara online/remote selama 3–6 bulan sampai diterima kerja, tanpa bayar di depan (ISA)</p>
              <a href="#" className="text-sm underline hover:text-gray-700 transition-colors">
                Follow Publication
              </a>
            </aside>
            {/* Content Article */}
            <article>
              <header>
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-10 leading-tight">{dataArticles.title}</h1>
                <div className="flex flex-wrap gap-3 md:gap-4 items-center mb-4">
                  <div className="rounded-full overflow-hidden w-10 h-10">
                    <img className="w-full h-full object-cover" src={dataArticles.creator.avatar} alt={dataArticles.creator.name} />
                  </div>
                  <div className="font-medium">{dataArticles.creator.name}</div>
                  <button className="px-3 py-1 rounded-full border border-gray-300 hover:border-gray-900 transition-colors text-sm">Follow</button>
                  <div className="text-[#6B6B6B]">{dataArticles.readTime} min read</div>
                  <div className="text-[#6B6B6B]">{moment(dataArticles.publishedAt).format("MMM DD, YYYY")}</div>
                </div>
              </header>
              <div className="mt-20">
                <img src={dataArticles.image} alt="" />
                <div className="prose prose-lg max-w-none">
                  <Markdown
                    components={{
                      h1: ({ ...props }) => <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />,
                      h2: ({ ...props }) => <h2 className="text-3xl font-bold mt-6 mb-3" {...props} />,
                      h3: ({ ...props }) => <h3 className="text-2xl font-bold mt-4 mb-2" {...props} />,
                      p: ({ ...props }) => <p className="mb-4 text-gray-800 leading-relaxed text-lg" {...props} />,
                      a: ({ ...props }) => <a className="text-blue-600 hover:underline" {...props} />,
                      ul: ({ ...props }) => <ul className="list-disc ml-6 mb-4" {...props} />,
                      ol: ({ ...props }) => <ol className="list-decimal ml-6 mb-4" {...props} />,
                      li: ({ ...props }) => <li className="mb-2" {...props} />,
                      blockquote: ({ ...props }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />,
                      code: ({ inline, ...props }) => (inline ? <code className="bg-gray-100 px-2 py-1 rounded text-sm" {...props} /> : <code className="block bg-gray-100 p-4 rounded my-4 overflow-x-auto" {...props} />),
                    }}
                  >
                    {dataArticles.content}
                  </Markdown>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}

export default Article;
