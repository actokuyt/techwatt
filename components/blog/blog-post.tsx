"use client"

import { useBlogArticlesFetchContext } from "@/contexts/fetch-contexts/blog-articles-fetch-context";
import { Avatar } from "@mui/material";

type IdType = {
    id: string
}


export default function BlogPost ({id}:IdType) {
    const { articles } = useBlogArticlesFetchContext();
  
    const blogPost = articles.find((article) => article._id == id);
  
    if (!blogPost) {
      return <div  className="pt-40">No blog post found for the provided ID.</div>;
    }
  
    function formatDateTime(milliseconds: number) {
      var date = new Date(milliseconds);
      var year = date.getFullYear();
      var month = (date.getMonth() + 1).toString().padStart(2, "0");
      var day = date.getDate().toString().padStart(2, "0");
  
      return `${year}-${month}-${day}`;
    }
    return(
        <div className="w-screen p-2 mt-[5em]">
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
               <p className="text-sm leading-[1em]">{formatDateTime(parseInt(blogPost.date))}</p>
             </div>
           </div>
   
           <h5 className="text-sm">{blogPost.category}</h5>
         </div>
   
         <h1 className="text-2xl font-semibold text-center mb-4">
           {blogPost.title}
         </h1>
   
         <p className="text-justify  mb-8">{blogPost.detail} </p>
   
         <button className="text-blue-500 ">Share</button>
        </div>
       </div>
    )
}