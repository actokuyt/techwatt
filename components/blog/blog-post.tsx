"use client";

import React from "react";
import { useBlogArticlesFetchContext } from "@/contexts/fetch-contexts/blog-articles-fetch-context";
import { Avatar, Modal } from "@mui/material";
import { ContentCopyOutlined } from "@mui/icons-material";
import Swal from "sweetalert2";

type IdType = {
  id: string;
};

export default function BlogPost({ id }: IdType) {
  const { articles } = useBlogArticlesFetchContext();
  const [open, setOpen] = React.useState(false);
  const [url, setUrl] = React.useState('');

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      handleClose()
      Swal.fire({
        toast: true,
        position: "bottom",
        icon: "success",
        title: "copied to clipboard",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const blogPost = articles.find((article) => article._id == id);

  if (!blogPost) {
    return <div className="pt-40">No blog post found for the provided ID.</div>;
  }

  function formatDateTime(milliseconds: number) {
    var date = new Date(milliseconds);
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, "0");
    var day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }
  return (
    <div className="mt-[5em]">
      <div className="w-full mx-auto md:w-[70%] lg:w-[50%]">
        <div>
          <img
            src={blogPost.imgsrc}
            alt={blogPost.title}
            className="w-screen h-auto mb-4"
          />
        </div>

        <div className=" mb-4 ml-2">
          <div className="flex items-center">
            <Avatar alt={blogPost.author} src={blogPost.avatar} />

            <div>
              <p className="font-semibold leading-[1em]">{blogPost.author}</p>
              <p className="text-sm leading-[1em]">
                {formatDateTime(parseInt(blogPost.date))}
              </p>
            </div>
          </div>

          <h5 className="text-sm">{blogPost.category}</h5>
        </div>

        <h1 className="text-2xl font-semibold text-center mb-4">
          {blogPost.title}
        </h1>

        <p className="text-justify  mb-8">{blogPost.detail} </p>

        <button onClick={handleOpen} className="text-blue-500 ">
          Share
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="bg-white flex items-center p-4 w-[90%] min-h-[20%] md:w-[70%] lg:w-[40%] rounded-lg absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] dropshadow-lg">
          <div className="border w-full border-gray-300 rounded-lg flex items-center justify-between p-2">
            <input type="text" readOnly value={url} className="w-full pr-2"/>
            <button onClick={handleCopy} className="">
            <ContentCopyOutlined/>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
