import { ArticleCards } from "../../components/mui-card";
import { blogArticles } from "@/utils/data";

export default async function Blog() {
  const articles = await blogArticles();
  if (!articles) {
    return <></>;
  }

  let random = Math.floor(Math.random() * blogArticles.length);

  function formatDateTime(milliseconds: number) {
    var date = new Date(milliseconds);
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, "0");
    var day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:w-[90%] lg:mx-auto lg:grid-cols-3">
      {articles.map((article, index) => {
        return (
          <ArticleCards
            id={article._id}
            key={index}
            img={article.imgsrc}
            title={article.title}
            description={article.desc}
            avatar={article.avatar}
            author={article.author}
            date={formatDateTime(parseInt(article.date))}
            category={article.category}
          />
        );
      })}
    </div>
  );
}