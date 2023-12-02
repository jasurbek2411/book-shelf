"use client";

import { Poppins } from "next/font/google";
import Button from "../ui/Button";
import BookModal from "./book-modal";
import { useState } from "react";

const poppins = Poppins({ subsets: ["latin"], style: "normal", weight: "400" });

const AddBook = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="flex justify-between mt-[36px]">
      {modal ? (
        <div className="fixed top-0 left-0 h-screen w-screen bg-gray/40 flex items-center justify-center">
          <BookModal />
        </div>
      ) : (
        <></>
      )}
      <div className="">
        <h2 className="font-[700] text-[36px] leading-[45px] text-light">
          You’ve got{" "}
          <span
            className={
              poppins.className + "font-[700] leading-[54px] text-purple"
            }
          >
            7 book
          </span>
        </h2>
        <p className="font-[400] text-light text-[20px] leading-[20px] mt-[12px]">
          Your task today
        </p>
      </div>
      <form className="flex items-center gap-[24px]">
        <input
          className="px-[16px] py-[14px] min-w-[320px] max-w-[320px] rounded-[6px] outline-none text-[16px] text-dark font-[400] leading-3-[20px]"
          type="text"
          placeholder="Enter your name"
        />
        <Button
          label="Create a book"
          icon={"/svg/plus.svg"}
          width={200}
          className="flex items-center gap-[16px] py-[14px]  hover:opacity-90 text-[16px] font-[500] leading-[20px]"
        />
      </form>
    </div>
  );
};

export default AddBook;
