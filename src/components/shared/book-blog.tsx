import { Montserrat } from "next/font/google";
import React from "react";

const monstserrat = Montserrat({ subsets: ["latin"] });

const BookBlog = () => {
  return (
    <div className="p-[32px] bg-light rounded-[12px] flex gap-[16px] flex-col min-w-[397px] max-w-[397px]">
      <h3
        className={
          monstserrat.className + " text-[16px] font-[600] leading-[20px]"
        }
      >
        Raspberry Pi User Guide
      </h3>
      <p className="text-[14px] text-gray">
        Lorem ipsum dolor sit amet consectetur. Nulla adipiscing neque varius
        vestibulum magna in. Tortor quisque nisl congue ut tellus sem id.
      </p>
      <div className="flex justify-between">
        <p className="text-[14px] text-gray">
          Eben Upton: <span>2023</span>-year
        </p>
        <span className="py-[2px] px-[12px] font-[400] text-[12px] text-purple bg-purple/10 rounded-[16px]">211 pages</span>
      </div>
    </div>
  );
};

export default BookBlog;
