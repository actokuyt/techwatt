"use client"

import React from "react";
import axios from "axios";

interface ArticleCardsProp {
  _id: string;
  imgsrc: string;
  title: string;
  description: string;
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
  articles: ArticleCardsProp[];
  setBlogArticles: (articles: ArticleCardsProp[]) => void;
}

const BlogArticlesFetchContext = React.createContext<BlogArticlesContextType>({
  articles: [],
  setBlogArticles: () => {},
});

export const useBlogArticlesFetchContext = () =>
  React.useContext(BlogArticlesFetchContext);

export const BlogArticlesFetchProvider = ({ children }: ProviderTypes) => {
  const [articles, setBlogArticles] = React.useState<ArticleCardsProp[]>(
    []
  );


  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/articles`);
        setBlogArticles(response.data.data);
      } catch (error) {
        console.error("Error fetching blog articles:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <BlogArticlesFetchContext.Provider value={{articles, setBlogArticles}}>
      {children}
    </BlogArticlesFetchContext.Provider>
  );
};
