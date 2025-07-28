"use client";
import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Clock, NotebookPen } from "lucide-react";

interface QuestionCardProps {
  title: string;
  duration: string;
  questions: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  title,
  duration,
  questions,
}) => {
  return (
    <Card className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl w-full max-w-md">
      <CardBody>
        <p className="text-lg font-semibold mb-3">{title}</p>
        <div className="flex gap-4 text-sm text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-1">
            <Clock size={16} className="text-red-600" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <NotebookPen size={16} className="text-green-600" />
            <span>{questions}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default QuestionCard;
