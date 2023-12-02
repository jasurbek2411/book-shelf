"use client";
import { Form, Input } from "antd";
import React from "react";
import Button from "../ui/Button";

interface Props {
  items: {
    label: string;
    name: string;
    placeholder: string;
  }[];
}

const LoginForm = ({ items }: Props) => {
  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      autoComplete="off"
      className="w-full mt-[36px] flex flex-col justify-center items-center"
    >
      {items.map((item) => (
        <Form.Item
          className="flex flex-col w-full"
          name={item.name}
          rules={[{ required: true }]}
        >
          <span className="text-[14px] font-[500] leading-[16px]">
            {item.label}
          </span>
          <Input
            placeholder={item.placeholder}
            className="w-full py-[14px] px-[16px] mt-[4px] text-[16px] font-[400] leading-[20px]"
          />
        </Form.Item>
      ))}

      
    </Form>
  );
};

export default LoginForm;
