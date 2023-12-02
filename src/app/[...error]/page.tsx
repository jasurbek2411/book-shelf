import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="container mx-auto min-h-screen flex flex-col items-center justify-center">
      <img
        src="/images/404-img.png"
        alt="error-page"
        width={720}
        height={476}
      />
      <div className="mt-[72px] flex items-center gap-[12px]">
        <Link href={"/"}>
          <Button
            label="Go Home Page"
            width={240}
            className="px-[64px] py-[10px] hover:opacity-90 "
          />
        </Link>
        <Link href={"/"}>
          <Button
            label="Reload Page"
            width={240}
            bg="light"
            textColor="purple"
            className="px-[64px] py-[10px] border-purple border-[1px] border-solid hover:opacity-90 "
          />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
