"use client";
import {
  Button,
  Checkbox,
  cn,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { Coins, LockIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const features = [
  {
    title: "মক পরীক্ষা",
    description: "নিজের ইচ্ছেমত বিষয় ও অধ্যায়ভিত্তিক পরীক্ষা",
  },
  {
    title: "পূর্ণ টেস্ট পেপার",
    description: "বিগত ২০ বছরের সকল অ্যাডমিশন টেস্ট এর প্রশ্ন ও সমাধান",
  },
  {
    title: "মডেল টেস্ট",
    description:
      "ভর্তি পরীক্ষার অনুরূপ পেপার/সাবজেক্ট ফাইনাল এবং ফাইনাল মডেল টেস্ট",
  },
  {
    title: "সাপ্তাহিক প্ল্যান",
    description: "সিলেবাস ভাগ করে ২৪ সপ্তাহে MCQ/লিখিত পরীক্ষা",
  },
];

const plans = [
  { price: "৫০০ টাকা", duration: "১ মাস" },
  { price: "১,২০০ টাকা", duration: "৩ মাস" },
  { price: "২,৪০০ টাকা", duration: "৬ মাস" },
  { price: "৪,৮০০ টাকা", duration: "১ বছর" },
];

const Page = () => {
  const [selectedPlan, setSelectedPlan] = React.useState<number | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-xl shadow-sm hover:shadow-md transition duration-200"
          >
            <div className="p-2 rounded-lg">
              <Coins size={28} className="text-yellow-500" />
            </div>
            <div>
              <p className="text-base sm:text-lg font-semibold">{item.title}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Centered Checkbox Plans */}
      <div className="flex flex-col items-center gap-6">
        {plans.map((plan, index) => (
          <Checkbox
            key={index}
            color="warning"
            isSelected={selectedPlan === index}
            onValueChange={() => setSelectedPlan(index)}
            classNames={{
              base: cn(
                "inline-flex w-full max-w-md bg-white dark:bg-gray-800",
                "hover:bg-content2 items-center justify-start",
                "cursor-pointer rounded-lg gap-2 p-5 border-2 border-transparent",
                "data-[selected=true]:border-primary w-full max-w-6xl"
              ),
              label: "w-full",
            }}
          >
            <div className="ml-2 flex flex-col gap-1">
              <span>{plan.price}</span>
              <span>{plan.duration}</span>
            </div>
          </Checkbox>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center gap-2 mt-10">
        <Button radius="sm" className="w-full max-w-6xl" color="warning">
          কিনুন
        </Button>
        <Button
          onPress={onOpen}
          radius="sm"
          variant="bordered"
          className="w-full max-w-6xl"
          color="warning"
        >
          কুপন আছে?
        </Button>
        <Modal
          radius="sm"
          isOpen={isOpen}
          placement="top-center"
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  <h2 className="text-lg font-semibold">
                    আপনার কুপন কোড প্রবেশ করান
                  </h2>
                </ModalHeader>
                <ModalBody>
                  <Input
                    placeholder="তোমার কুপন লিখো"
                    radius="sm"
                    variant="bordered"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button radius="sm" color="warning" className="w-full">
                    Apply
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default Page;
