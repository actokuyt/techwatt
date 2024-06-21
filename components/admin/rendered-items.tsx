"use client";

import React from "react";
import { useBlogArticlesFetchContext } from "@/contexts/fetch-contexts/blog-articles-fetch-context";
import { useMuiAutoCompleteContext } from "@/contexts/mui-autocomplete-context";
import Link from "next/link";
import { Delete } from "@mui/icons-material";
import { Modal } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

export default function RenderedItems() {
  const { articles, setBlogArticles } = useBlogArticlesFetchContext();
  const { searchInputValue } = useMuiAutoCompleteContext();
  const [open, setOpen] = React.useState(false);
  const [articleId, setArticleId] = React.useState("");

  const handleOpen = (articleId: string) => {
    setArticleId(articleId);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  function formatDateTime(milliseconds: number) {
    var date = new Date(milliseconds);
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, "0");
    var day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  function filter(id: string) {
    let filteredBlogArticles = articles.filter((article) => article._id !== id);
    return filteredBlogArticles;
  }

  async function deletePost(id: string) {
    try {
      let response = await axios.delete(`/api/articles/${id}`);
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

  const searchedArticle = articles.map((article) => {
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

  const allArticles = articles.map((article) => {
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

  return (
    <div className="w-full mb-4 md:w-[80%] lg:w-[60%]">
      <div>{renderedArticles}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="bg-white p-4 w-[90%] md:w-[70%] lg:w-[40%] rounded-lg absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] dropshadow-lg">
          <p className="text-lg ">Is it really time to loose this piece?</p>
          <div className="mt-8 w-full flex justify-end">
            <div className="">
              <button
                onClick={handleClose}
                className="bg-blue-200 p-2 rounded-lg mr-4"
              >
                Not Yet
              </button>
              <button
                onClick={() => deletePost(articleId)}
                className="bg-red-500 p-2 rounded-lg mr-4"
              >
                Yea, For Real.
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
