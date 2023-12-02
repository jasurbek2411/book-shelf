import React from "react";
import BookBlog from "./book-blog";

const Books = () => {
  return (
    <div className="mt-[36px] flex items-center flex-wrap justify-center gap-[24px]">
      <BookBlog />
      <BookBlog />
      <BookBlog />
      <BookBlog />
    </div>
  );
};

export default Books;
