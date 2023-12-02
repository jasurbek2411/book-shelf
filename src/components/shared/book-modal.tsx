import React from "react";
import LoginForm from "./form";
import Button from "../ui/Button";

const items = [
  {
    label: "Title",
    placeholder: "Enter your title",
    name: "title",
  },
  {
    label: "Author",
    placeholder: "Enter your author",
    name: "author",
  },
  {
    label: "Cover",
    placeholder: "Enter your cover",
    name: "cover",
  },
  {
    label: "Published",
    placeholder: "Enter your published",
    name: "published",
  },
  {
    label: "Pages",
    placeholder: "Enter your pages",
    name: "pages",
  },
];

const BookModal = () => {
  return (
    <div className="px-[28px] py-[24px] rounded-[12px] bg-light w-[430px]">
      <div className="flex items-center justify-between">
        <h2 className="font-[600] text-[20px] leading-[25px] text-dark2">
          Create a book
        </h2>
        <div className="border-[2px] border-solid rounded-[50%] w-[24px] h-[24px] relative cursor-pointer">
          <span className="w-[12px] h-[2px] bg-dark absolute top-[10px] left-[5px] rotate-[45deg]"></span>
          <span className="w-[12px] h-[2px] bg-dark absolute top-[10px] left-[5px] rotate-[135deg] "></span>
        </div>
      </div>
      <div className="mt-[28px]">
        <LoginForm items={items} />
      </div>
      <div className="mt-[28px] flex items-center justify-between">
        <Button
          label="Close"
          bg="light"
          className=" text-purple border-[1px] border-purple border-solid max-w-[181px] min-w-[181px]"
        />
        <Button label="Submit" className="max-w-[181px] min-w-[181px]" />
      </div>
    </div>
  );
};

export default BookModal;
