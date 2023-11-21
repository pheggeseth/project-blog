import React from "react";

import styles from "./homepage.module.css";
import BlogSummaryList from "@/components/BlogSummaryList";

export const metadata = {
  title: "Bits & Bytes",
  description: "A wonderful blog about JavaScript",
};

function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      <BlogSummaryList />
    </div>
  );
}

export default Home;
