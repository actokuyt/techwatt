import * as React from "react";
// import Modal from "@mui/material/Modal";
import Link from "next/link";
// import MuiAutoComplete from "@/components/mui-autocomplete";
import RenderedArticles from "@/components/admin/blog/rendered-articles";


export default function ManageBlog() {
    

  return (
    <div className="pt-20 flex flex-col items-center ">
      <Link href={"/admin"} className="mb-4">
        Back to Dashboard
      </Link>

      <div className="mb-4 z-0">
        {/* <MuiAutoComplete options={titles} label="Search Articles" /> */}
      </div>

      <Link
        href={"/admin/manage-blog/new-article"}
        className="bg-blue-300 p-2 mb-4"
      >
        Add New Post
      </Link>

      <div className="w-full mb-4 md:w-[80%] lg:w-[60%]">
        <RenderedArticles/>
      </div>

      {/* <Modal
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
      </Modal> */}
    </div>
  );
}
