"use client";
import { Card, CardBody, Input, Switch, Tab, Tabs } from "@heroui/react";
import React from "react";

const page = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center gap-5">
        <p className="mt-5 text-2xl">প্রিমিয়াম এক্সাম</p>
        <p className="text-2xl mt-5">নিশ্চিত কর</p>

        <div className="flex justify-between w-full max-w-5xl items-center gap-5 mt-10">
          <div className="flex flex-col justify-center items-center">
            <p>মোট সময় (মিনিট)</p>
            <Input variant="bordered" radius="sm" />
          </div>

          <div>
            <p>প্রশ্নের ধরণ</p>
            <Tabs aria-label="Options">
              <Tab key="mcq" title="MCQ"></Tab>
              <Tab key="cq" title="CQ"></Tab>
            </Tabs>
          </div>

          <div>
            <div className="flex justify-center items-center gap-3">
              <p>নেগেটিভ মার্কিং</p>
              <Switch defaultSelected aria-label="Automatic updates" />
            </div>
            <p className="text-red-600">১টি ভূলের জন্য ০.২৫ মার্কস কাটা যাবে</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
