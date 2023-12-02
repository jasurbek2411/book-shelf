import React from "react";
import LoginLayout from "../layout";
import LoginForm from "@/components/shared/form";
import Link from "next/link";
import Button from "@/components/ui/Button";

const inputs = [
  {
    label: "Your name",
    name: "name",
    placeholder: "Enter your username",
  },
  {
    label: "Your email",
    name: "email",
    placeholder: "Enter your email",
  },
  {
    label: "Your password",
    name: "password",
    placeholder: "Enter your password",
  },
];

const SiginPage = () => {
  return (
    <LoginLayout>
      <div className="container mx-auto flex items-center justify-center h-screen w-full">
        <div className="bg-light min-h-[695px] w-[430px] rounded-[12px] px-[28px] py-[35px]">
          <h2 className="font-[700] text-[36px] leading-[45px] text-center ">
            Sign in
          </h2>
          <div className="mt-[36px] w-full flex flex-col gap-[16px] justify-center items-center">
            <button className="flex py-[10px] px-[24px] justify-center gap-[16px] border-dark border-[1px] rounded-[4px] w-full hover:bg-dark/5">
              <img
                src="/svg/gmail.svg"
                width={24}
                height={24}
                alt="gmail-icon"
              />
              <span className="font-[500] text-[16px] leading-[20px]">
                Continue with Google
              </span>
            </button>
            <button className="flex py-[10px] px-[24px] justify-center gap-[16px] border-dark border-[1px] rounded-[4px] w-full hover:bg-dark/5">
              <img
                src="/svg/facebook.svg"
                width={24}
                height={24}
                alt="gmail-icon"
              />
              <span className="font-[500] text-[16px] leading-[20px]">
                Continue with Facebook
              </span>
            </button>
          </div>
          <div className="flex items-center justify-center mt-[28px] ">
            <div className="h-px bg-dark w-1/2" />
            <p className="mx-[16px]">OR</p>
            <div className="h-px bg-dark w-1/2" />
          </div>
          <LoginForm items={inputs} />
          <Button label="Singin" className="w-full rounded-[4px]" />
          <div className="font-[300]  text-[14px]  text-center leading-[16px] mt-[12px]">
            Already signed up?{" "}
            <span className="text-purple cursor-pointer">
              <Link href={"/"}>Go to sign up.</Link>
            </span>
          </div>
        </div>
      </div>
    </LoginLayout>
  );
};

export default SiginPage;
