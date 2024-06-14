import { ArticleCards } from "../mui-card";

interface ArticleCardsProp {
  imgsrc: string;
  avatar: string;
  title: string;
  desc: string;
  author: string;
  date: string;
  category: string;
}

interface Props {
  article: ArticleCardsProp;
  id: string;
}

export default function BlogHero({ article, id }: Props) {
  function formatDateTime(milliseconds: number) {
    var date = new Date(milliseconds);
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, "0");
    var day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  return (
    <div className="relative h-[30em]">
      <div className="bg-[#ddeef5] pt-4 grid grid-cols-1 justify-items-center overflow-hidden h-[20em]">
        <div>
          <p className="p-2 text-center">
            Latest Industry News, Interviews, Technologies and Resources all in
            One Place.{" "}
          </p>
        </div>
        <span className="relative bg-white block rounded-full w-[120%] h-[15em] translate-y-[40%] -rotate-[5deg] lg:w-[120%] lg:h-[30em] lg:translate-y-[30%] lg:-rotate-[5deg]"></span>
      </div>
      <div className="w-full absolute -bottom-[5em] md:-bottom-[2em]">
        <h1 className="text-center text-2xl font-semibold mb-2">
          Featured Article
        </h1>
        <div className="w-[90%] mx-auto md:w-[50%] lg:w-[40%]">
          <ArticleCards
            id={id}
            img={article.imgsrc}
            avatar={article.avatar}
            title={article.title}
            description={article.desc}
            author={article.author}
            date={formatDateTime(parseInt(article.date))}
            category={article.category}
          />
        </div>
      </div>
    </div>
  );
}
