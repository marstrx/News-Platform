import { JSX, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../Services/api";
import image from "../../assets/tech.webp";

type Article = {
  _id: string;
  title: string;
  content: string;
  views: number;
  slug: string;
};

function Home(): JSX.Element {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const shortText = (text: string, limit: number): string => {
    const words = text.split(" ");
    return words.length > limit
      ? words.slice(0, limit).join(" ") + "..."
      : text;
  };

  useEffect(() => {
    Api.get("/articles/read")
      .then((res) => {
        setArticles(res.data.articles.slice(0, 3));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-linear-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Hero Section */}
      <section className="h-screen bg-[#132440] text-white flex items-center justify-center" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-mono mb-4 sm:mb-6 lg:mb-8">
              Welcome to <span className="text-[#FDB5CE]">Nex News</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
              Stay ahead with the latest technology insights, innovations, and breaking news from around the world
            </p>
            <Link
              to="/news"
              className="inline-block bg-[#FDB5CE] text-[#132440] px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-lg font-bold text-lg sm:text-xl hover:bg-opacity-90"
            >
              Explore All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-3 sm:mb-4 font-mono">
            Featured Articles
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-linear-to-r from-amber-600 to-orange-500 rounded-full"></div>
        </div>

        {loading ? (
          <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded"></div>
              <p className="text-amber-800 font-mono">Loading articles...</p>
            </div>
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-amber-700">No articles available</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 sm:mb-12">
              {articles.map((article) => (
                <Link
                  key={article._id}
                  to={`/${article.slug}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image}
                      alt={article.title}
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-amber-900 mb-3 line-clamp-2 group-hover:text-amber-700">
                      {article.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {shortText(article.content, 10)}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-amber-100">
                      <div className="flex items-center gap-2 text-amber-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        <span className="text-sm sm:text-base font-medium">
                          {article.views.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-amber-600 font-semibold text-sm sm:text-base">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* See All Articles */}
            <div className="text-center">
              <Link
                to="/news"
                className="inline-block bg-[#132440] text-[#FDB5CE] px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-opacity-90 font-mono"
              >
                See All Articles
              </Link>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default Home;