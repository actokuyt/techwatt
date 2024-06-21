"use client"

import { useBlogArticlesFetchContext } from "@/contexts/fetch-contexts/blog-articles-fetch-context";
import MuiAutoComplete from "../mui-autocomplete";

export default function Search () {
    const {articles} = useBlogArticlesFetchContext()
    let titles = articles.map((article) => article.title);
    return(
        <MuiAutoComplete options={titles} label="Search Articles" />
    )
}