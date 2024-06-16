"use client";

import { useBlogArticlesFetchContext } from "@/contexts/fetch-contexts/blog-articles-fetch-context";
import { ArticleCards } from "../mui-card";
import { Avatar } from "@mui/material";
import Link from "next/link";

export default function BlogHero() {
  const { articles } = useBlogArticlesFetchContext();

  if (!articles || articles.length === 0) {
    return <div>Loading...</div>;
  }

  let random = Math.floor(Math.random() * articles.length);
  let article = articles[random];
  let id = articles[random]._id;

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
      <div className="w-full absolute -bottom-[7em] md:hidden">
        <h1 className="text-center text-2xl font-semibold mb-2">
          Featured Article
        </h1>
        <div className="w-[90%] mx-auto md:w-[50%] lg:w-[40%]">
          <ArticleCards
            id={id}
            img={article.imgsrc}
            avatar={article.avatar}
            title={article.title}
            description={article.description}
            author={article.author}
            date={formatDateTime(parseInt(article.date))}
            category={article.category}
          />
        </div>
      </div>
      <div className="hidden md:block w-full absolute bottom-[8em] lg:bottom-[2em]">
        <h1 className="text-center text-2xl font-semibold mb-2">
          Featured Article
        </h1>
        <div className="flex w-[90%] mx-auto ">
          <div className="basis-3/5 mr-8">
            <img
              src={article.imgsrc}
              alt={article.title}
              className="w-[400px] lg:w-[650px] h-[250px] lg:h-[350px] rounded-2xl border-4 border-gray-300"
            />
          </div>
          <div className="basis-2/5 flex items-center">
            <div className="w-full">
              <h1 className="text-xl text-center font-semibold">{article.title}</h1>
              <p className="text-center">{article.description}</p>
              <div className="flex items-center mt-8">
                <Avatar alt="" src={article.avatar} />
                <div className="ml-2">
                  <p className="font-semibold leading-[1em]">
                    {" "}
                    {article.author}
                  </p>

                  <p className="text-sm leading-[1em]">
                    {formatDateTime(parseInt(article.date))}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <p className="p-2 font-semibold leading-[1em]">
                  {article.category}
                </p>
              </div>
              <Link href={`/blog/${id}`} className="underline">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
