"use client";
import { Card, CardBody } from "@heroui/react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="p-20 container mx-auto">
        <div className="flex  justify-center items-center gap-10">
          <Link href="/users/teacher/dashboard/make-question">
            <Card className="w-[200px] h-[100px] ">
              <CardBody className="flex justify-center items-center">
                SSC
              </CardBody>
            </Card>
          </Link>
          <Link href="/users/teacher/dashboard/make-question/hsc">
            <Card className="w-[200px] h-[100px] ">
              <CardBody className="flex justify-center items-center">
                HSC
              </CardBody>
            </Card>
          </Link>
          <Link href="/users/teacher/dashboard/make-question">
            <Card className="w-[200px] h-[100px] ">
              <CardBody className="flex justify-center items-center">
                ADMISSION
              </CardBody>
            </Card>
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
