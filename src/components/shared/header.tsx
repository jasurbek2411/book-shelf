"use client";
import { Avatar, Space } from "antd";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const monstserrat = Montserrat({ subsets: ["latin"] });

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between min-h-[72px]">
      <div className="flex items-center gap-[24px]">
        <Link href={"/"} className="flex items-center gap-[24px]">
          <Image width={36} height={36} src="/svg/cloud-logo.svg" alt="logo" />
          <h1 className="font-[700] text-[18px] leadint-[20px] text-purple">
            Books{" "}
            <span
              className={
                monstserrat.className +
                "font-[600] text-[18px] leading-[21px] text-light "
              }
            >
              List
            </span>
          </h1>
        </Link>
        <form className="flex items-center gap-[8px] max-w-[264px] min-w-[264px]">
          <button type="submit" className="hidden"></button>
          <Image
            src="/svg/search-icon.svg"
            alt="search-icon"
            width={24}
            height={24}
            className="hover:opacity-80 w-[24px] h-[24px] cursor-pointer"
          />
          <input
            type="text"
            className="text-[16px] font-[400] leading-[20px] py-[12px] pr-[24px] pl-[12px] text-start outline-none bg-light/0 text-light"
            placeholder="Search for any training you want"
          />
        </form>
      </div>
      <div className="flex  items-center gap-[24px] ">
        <button className="hover:opacity-80">
          <Image src="/svg/frame.svg" alt="frame" width={24} height={24} />
        </button>
        <Link href={"/"} className="hover:opacity-80">
          <Space size={16} wrap>
            <Avatar style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}>
              U
            </Avatar>
          </Space>
        </Link>
      </div>
    </div>
  );
};

export default Header;
