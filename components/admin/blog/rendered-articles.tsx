"use client";

import React from "react";
import Link from "next/link";
import { useBlogArticlesFetchContext } from "../../../contexts/fetch-contexts/blog-articles-fetch-context";
import { Delete } from "@mui/icons-material";
import { useMuiAutoCompleteContext } from "@/contexts/mui-autocomplete-context";
import Swal from "sweetalert2";
import axios from "axios";

export default function RenderedArticles() {
  const { blogArticles, setBlogArticles } = useBlogArticlesFetchContext();
  const { searchInputValue } = useMuiAutoCompleteContext();
  const [open, setOpen] = React.useState(false);
  const [articleId, setArticleId] = React.useState("");

  const handleOpen = (articleId: string) => {
    setArticleId(articleId);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const endPoint = "";

  function filter(id: string) {
    let filteredBlogArticles = blogArticles.filter(
      (article) => article._id !== id
    );
    return filteredBlogArticles;
  }

  function formatDateTime(milliseconds: number) {
    var date = new Date(milliseconds);
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, "0");
    var day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  async function deletePost(id: string) {
    try {
      let response = await axios.delete(`${endPoint}/blog/${id}`);
      if (response.status === 200) {
        setBlogArticles(filter(id));
        Swal.fire({
          toast: true,
          position: "bottom",
          icon: "success",
          title: "Successfully Deleted Post",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        handleClose();
      }
    } catch (error: any) {
      console.error(error.message);
      Swal.fire({
        toast: true,
        position: "bottom",
        icon: "error",
        title: "Error Deleting Post ",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
      });
    }
  }

  let titles = blogArticles.map((article) => article.title);

  const searchedArticle = blogArticles.map((article) => {
    if (article.title === searchInputValue) {
      return (
        <div
          key={article._id}
          className="flex items-center border-b-2 border-gray-500 mx-4 p-2 min-h-[4em]"
        >
          <Link
            href={`/admin/manage-blog/${article._id}`}
            className="basis-4/5"
          >
            <p>{article.title}</p>
            <span className="text-sm">
              {formatDateTime(parseInt(article.date))}
            </span>
          </Link>

          <span className="text-xl basis-1/5 text-end">
            <button onClick={() => handleOpen(article._id)}>
              <Delete />
            </button>
          </span>
        </div>
      );
    }
  });

  const allArticles = blogArticles.map((article) => {
    return (
      <div
        key={article._id}
        className="flex items-center border-b-2 border-gray-500 mx-4 p-2 min-h-[4em]"
      >
        <Link href={`/admin/manage-blog/${article._id}`} className="basis-4/5">
          <p>{article.title}</p>
          <span className="text-sm">
            {formatDateTime(parseInt(article.date))}
          </span>
        </Link>

        <div className="text-xl basis-1/5 text-end">
          <button onClick={() => handleOpen(article._id)}>
            <Delete />
          </button>
        </div>
      </div>
    );
  });

  const renderedArticles = searchInputValue ? searchedArticle : allArticles;

  return renderedArticles
}
