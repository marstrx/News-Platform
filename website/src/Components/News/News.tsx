import { JSX, useEffect, useState } from "react";
import Api from "../../Services/api";

type Article = {
  _id: string;
  title: string;
  content: string;
  views: number;
  slug:string;
};

function News(): JSX.Element {
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    Api.get("/articles/read")
      .then((res) => {
        setNews(res.data.articles);
      })
      .catch(console.error)
      
  }, []);


  if (!Array.isArray(news)) return <p>Invalid data format</p>;

  return (
    <div>
      {news.map((article) => (
        <div key={article._id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}

export default News;