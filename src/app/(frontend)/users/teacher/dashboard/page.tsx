"use client";
import { Button, Card, CardBody } from "@heroui/react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="p-20 container mx-auto">
        <div className="flex flex-col justify-center items-center">
          <Link href="/users/teacher/dashboard/make-question">
            <Card className="w-[200px] h-[100px] ">
              <CardBody className="flex justify-center items-center">
                Make question
              </CardBody>
            </Card>
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
