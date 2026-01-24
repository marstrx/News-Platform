import { JSX, useEffect, useState } from "react";
import Api from "../../Services/api";
import image from "../../assets/tech.webp";
import { Link } from "react-router-dom";

type Article = {
  _id: string;
  title: string;
  content: string;
  views: number;
  slug: string;
};

function Articles(): JSX.Element {
  const [news, setNews] = useState<Article[]>([]);
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
        setNews(res.data.articles);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded"></div>
          <p className="text-amber-800 font-mono">Loading articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-3 sm:mb-4">
            Latest Articles
          </h1>
          <div className="w-20 sm:w-24 h-1  from-amber-600 to-orange-500 rounded-full"></div>
        </div>

        {news.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-amber-700">No articles found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {news.map((article) => (
              <Link
                key={article._id}
                to={article.slug}
                className="group rounded shadow overflow-hidden"
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
                    {shortText(article.content, 20)}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-amber-100">
                    <div className="flex items-center gap-2 text-amber-700">
                      <div className="w-4 h-4 sm:w-5 sm:h-5" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#000000"
                      >
                        <g
                          fill="none"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          color="currentColor"
                        >
                          <path d="M21.544 11.045c.304.426.456.64.456.955c0 .316-.152.529-.456.955C20.178 14.871 16.689 19 12 19c-4.69 0-8.178-4.13-9.544-6.045C2.152 12.529 2 12.315 2 12c0-.316.152-.529.456-.955C3.822 9.129 7.311 5 12 5c4.69 0 8.178 4.13 9.544 6.045" />
                          <path d="M15 12a3 3 0 1 0-6 0a3 3 0 0 0 6 0" />
                        </g>
                      </svg>
                      <span className="text-sm sm:text-base font-mono">
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
        )}
      </div>
    </div>
  );
}

export default Articles;
