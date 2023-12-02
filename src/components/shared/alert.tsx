import Image from "next/image";
import React from "react";

interface Props {
  type: "success" | "error";
  className?: string;
}

const Alert = ({ type, className }: Props) => {
  return type === "success" ? (
    <div
      className={
        `absolute bottom-[32px] right-[32px] bg-green text-light max-w-[320px] min-w-[320px] px-[14px] py-[10px] rounded-[6px] flex gap-[12px] translate-x-[150%]` +
        className
      }
    >
      <div className="w-[20px] h-[20px]">
        <Image
          src={"/svg/alert-success-icon.svg"}
          className="w-[20px] h-[20px]"
          alt="aler-icon"
          width={20}
          height={20}
        />
      </div>
      <div>
        <h4 className="font-[500] text-[16px] leading-[20px] ">
          Lorem ipsum dolor
        </h4>
        <p className="font-[400] text-[12px] leading-[18px]">
          Lorem ipsum dolor sit amet consectetur. Pulvinar facilisis cras ac a
          amet augue vel egestas urna. Neque habitant consectetur amet.
        </p>
      </div>
    </div>
  ) : (
    <div className="absolute bottom-[32px] right-[32px] bg-red text-light max-w-[320px] min-w-[320px] px-[14px] py-[10px] rounded-[6px] flex gap-[12px] translate-x-[150%]">
      <div className="w-[20px] h-[20px] relative cursor-pointer top-[10px] hover:opacity-80">
        <span className="w-[12px] h-[2px] bg-light absolute rotate-[45deg]"></span>
        <span className="w-[12px] h-[2px] bg-light absolute rotate-[135deg]"></span>
      </div>
      <div>
        <h4 className="font-[500] text-[16px] leading-[20px] ">
          Lorem ipsum dolor
        </h4>
        <p className="font-[400] text-[12px] leading-[18px]">
          Lorem ipsum dolor sit amet consectetur. Pulvinar facilisis cras ac a
          amet augue vel egestas urna. Neque habitant consectetur amet.
        </p>
      </div>
    </div>
  );
};

export default Alert;
