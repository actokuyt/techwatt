"use client"

import React from "react";
// import { connect, blogSchema } from "@/configs/dbconfig";
import axios from "axios";

interface ArticleCardsProp {
  _id: string;
  imgsrc: string;
  title: string;
  desc: string;
  height: number;
  author: string;
  avatar: string;
  date: string;
  category: string;
  detail: string
}

type ProviderTypes = {
  children: React.ReactNode;
};

interface BlogArticlesContextType {
  blogArticles: ArticleCardsProp[];
  // setBlogArticles: (articles: ArticleCardsProp[]) => void;
}

const BlogArticlesFetchContext = React.createContext<BlogArticlesContextType>({
  blogArticles: [],
  // setBlogArticles: () => {},
});

export const useBlogArticlesFetchContext = () =>
  React.useContext(BlogArticlesFetchContext);

export const BlogArticlesFetchProvider = async({ children }: ProviderTypes) => {
  // connect()
  // const blogArticles = await blogSchema.find()





  // const [blogArticles, setBlogArticles] = React.useState<ArticleCardsProp[]>(
  //   []
  // );

  // let endPoint = process.env.SERVER_ENDPOINT

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${endPoint}/blog`);
  //       setBlogArticles(response.data);
  //     } catch (error) {
  //       console.error("Error fetching blog articles:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <BlogArticlesFetchContext.Provider value={{blogArticles}}>
      {children}
    </BlogArticlesFetchContext.Provider>
  );
};
