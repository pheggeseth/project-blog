import React from "react";

import BlogHero from "@/components/BlogHero";

import styles from "./postSlug.module.css";
import { loadBlogPost } from "@/helpers/file-helpers";
import { MDXRemote } from "next-mdx-remote/rsc";
import { cache } from "react";
import CodeSnippet from "@/components/CodeSnippet";
import dynamic from "next/dynamic";
import Spinner from "@/components/Spinner";

const DivisionGroupsDemo = dynamic(
  () => import("@/components/DivisionGroupsDemo"),
  { loading: Spinner }
);
const CircularColorsDemo = dynamic(() =>
  import("@/components/CircularColorsDemo")
);

const loadPost = cache(loadBlogPost);

export async function generateMetadata({ params }) {
  const { frontmatter } = await loadPost(params.postSlug);
  return {
    title: frontmatter.title,
    description: frontmatter.abstract,
  };
}

async function BlogPost({ params }) {
  const { frontmatter, content } = await loadPost(params.postSlug);
  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote
          source={content}
          frontmatter={frontmatter}
          components={{
            pre: CodeSnippet,
            DivisionGroupsDemo,
            CircularColorsDemo,
          }}
        />
      </div>
    </article>
  );
}

export default BlogPost;
