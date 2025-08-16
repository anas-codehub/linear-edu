"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Progress,
} from "@heroui/react";
import { Bookmark, Check, Flag, MoveRight, Star, X } from "lucide-react";
import React, { useState } from "react";
import { useDisclosure } from "@heroui/react";

const Page = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const correctAnswerIndex = 0;

  const handleOptionClick = (index: number) => {
    if (answered) return;

    setSelectedOption(index);
    setAnswered(true);

    if (index === correctAnswerIndex) {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <div className="max-w-full sm:max-w-6xl w-full container mx-auto px-4 sm:px-8 py-5">
      {/* Progress div */}
      <div className="flex justify-between items-center">
        <Button onPress={onOpen} radius="sm" color="warning" size="sm">
          X
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Modal Title
                </ModalHeader>
                <ModalBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        <Progress
          size="md"
          color="warning"
          value={50}
          className="w-full sm:w-3xl mx-4"
        />
        <div className="flex bg-warning px-2 items-center rounded-2xl min-w-[60px] justify-center">
          <Star size={18} className="text-black" />
          <p className="text-black ml-1">{score}</p>
        </div>
      </div>

      {/* Feedback */}
      {answered && (
        <div className="flex flex-col sm:flex-row items-center justify-between mt-5 gap-3 sm:gap-0">
          <div className="flex justify-center items-center gap-2">
            {selectedOption === correctAnswerIndex ? (
              <>
                <Check
                  size={18}
                  className="text-warning bg-yellow-700 rounded-full"
                />
                <p className="text-warning">দারুণ হয়েছে!</p>
              </>
            ) : (
              <>
                <X size={18} className="text-red-500 bg-red-200 rounded-full" />
                <p className="text-red-500">ভুল হয়েছে!</p>
              </>
            )}
          </div>
          <Flag className="text-warning" />
        </div>
      )}

      {/* Question */}
      <div className="mt-10 sm:mt-20">
        <p className="text-base sm:text-lg">
          প্রধান স্কেল পাঠ M, ভার্নিয়ার সমপাতন V এবং ভার্নিয়ার ধ্রুবক VC হলে
          দণ্ডের দৈর্ঘ্য L নির্ণয়ের সূত্র-
        </p>

        {/* Options */}
        <div className="flex flex-col gap-4 mt-5">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`rounded text-base sm:text-2xl py-4 sm:py-5 shadow-md cursor-pointer select-none ${
                selectedOption === index
                  ? "bg-warning"
                  : "bg-white dark:bg-dark-2"
              }`}
            >
              <p className="ml-6 sm:ml-10 italic">
                L = MV + V<sub>C</sub>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Explanation */}
      {answered && (
        <div className="bg-warning p-4 sm:p-5 mt-8 sm:mt-10 rounded shadow-md">
          <p className="text-sm sm:text-base text-white leading-relaxed">
            L = M + V × V <sub>C</sub> ​<br />
            এখানে,
            <br /> L হলো বস্তুর দৈর্ঘ্য
            <br />M হলো মূল স্কেল পাঠ
            <br />V হলো ভার্নিয়ার সমপাতন
            <br /> V <sub>C</sub> ​ হলো ভার্নিয়ার ধ্রুবক [যান্ত্রিক ত্রুটি
            (±e)]
          </p>
        </div>
      )}

      <div className="flex justify-between items-center gap-3 mt-10">
        <Button radius="sm" variant="bordered" color="warning">
          <Bookmark />
        </Button>
        <Button radius="sm" variant="solid" color="warning" className="w-full">
          <div className="flex justify-center items-center gap-2">
            <p>নতুন প্রশ্ন</p>
            <MoveRight />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Page;
