import React from "react";
import { getBlogPostList } from "@/helpers/file-helpers";
import BlogSummaryCard from "../BlogSummaryCard";

async function BlogSummaryList() {
  const posts = await getBlogPostList();

  return (
    <>
      {posts.map((post, index) => (
        <BlogSummaryCard key={index} {...post} />
      ))}
    </>
  );
}

export default BlogSummaryList;
