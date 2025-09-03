"use client";
import HomeFooter from "@/components/Footers/HomeFooter";
import { Input } from "@heroui/react";
import React from "react";

const page = () => {
  return (
    <>
      <div className="container mx-auto mt-10 flex flex-col justify-center items-center gap-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center">প্রোফাইল</h2>
        <div className="w-full max-w-xl flex flex-col gap-5">
          <Input placeholder="পুরো নাম" variant="bordered" radius="sm" />
          <Input placeholder="ই-মেইল" variant="bordered" radius="sm" />
          <Input placeholder="জেলা" variant="bordered" radius="sm" />
          <Input placeholder="মোবাইল" variant="bordered" radius="sm" />
          <Input
            placeholder="পাসওয়ার্ড পরিবর্তন"
            variant="bordered"
            radius="sm"
          />
        </div>
      </div>
      <HomeFooter />
    </>
  );
};

export default page;
