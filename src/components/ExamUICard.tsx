"use client";

import { Button, Card, CardBody, Image } from "@heroui/react";
import { Clock, File, FileText } from "lucide-react";

import NextImage from "next/image";

type Props = {
  data: any;
};
const ExamUICard = ({ data }: Props) => {
  return (
    <>
      <Card>
        <CardBody>
          <Image
            removeWrapper
            as={NextImage}
            src={data?.image || ""}
            alt={data?.title}
            height={200}
            width={200}
            className="!w-full !aspect-video"
          />

          <h2 className="text-xl font-bold mt-2">{data.title}</h2>
          <p className="text-sm text-gray-600 my-2 line-clamp-3 h-[60px]">
            {data.shortDescription}
          </p>

          <div className="flex justify-between text-sm  my-2">
            <span className="font-medium flex items-center gap-1 text-theme">
              <FileText size={20} /> {data.totalQuestions}
            </span>
            <span className="font-medium flex items-center gap-1 text-theme">
              <Clock size={20} /> {data.duration} mins
            </span>
          </div>

          <div className="flex flex-col gap-2 justify-between text-sm text-gray-600">
            <span className="font-medium line-clamp-2 h-[40px]">
              Topic: {data.topic}
            </span>
            <span className="font-medium line-clamp-2 h-[40px]">
              Chapter: {data.chapter}
            </span>
          </div>

          <Button className="my-2">Start Exam</Button>
        </CardBody>
      </Card>
    </>
  );
};

export default ExamUICard;
