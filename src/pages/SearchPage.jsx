import { useEffect, useState } from "react";
import { getData } from "../utils/getData";
import { Link, useSearchParams } from "react-router-dom";
import CardArticleSearch from "../components/CardArticleSearch";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //   const navigate = useNavigate();
  const query = searchParams.get("q");

  useEffect(() => {
    if (query) {
      getData("/public/data/articles.json")
        .then((data) => {
          const filterArticles = data.filter((article) => {
            const searchLower = query.toLowerCase();
            return (
              article.title.toLowerCase().includes(searchLower) ||
              article.subtitle?.toLowerCase().includes(searchLower) ||
              article.content.toLowerCase().includes(searchLower) ||
              article.tags.some((tag) => tag.toLowerCase().includes(searchLower))
            );
          });

          setResults(filterArticles);
          console.log("Search results:", filterArticles);
        })
        .catch((error) => {
          console.log("Gagal mendapatkan data: " + error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [query]);

  if (isLoading) {
    return <div>Loading mas...</div>;
  }

  return (
    <main>
      <div className="flex flex-col px-4 sm:px-8 md:px-20 lg:px-40 mt-20 py-6 sm:py-8 md:py-10 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <div className="font-semibold text-2xl sm:text-4xl md:text-6xl">
          <span className="text-gray-400">Results for </span>
          {query}
        </div>
        <div className="h-[1px] w-full bg-slate-300"></div>
        {results.map((article) => (
          <Link to={`/${article.creator.name}/${article.slug}`}>
            <CardArticleSearch articleData={article} />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default SearchPage;
