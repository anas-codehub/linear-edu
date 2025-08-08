"use client";

import { useState } from "react";
import UploadPhoto from "@/components/UploadPhoto";
import {
  AlertTriangle,
  Bell,
  BookOpenText,
  CreditCard,
  Crown,
  Flag,
  History,
  KeyRound,
  LogOutIcon,
  MessageCircle,
  Shield,
  SquareUser,
  Trash,
} from "lucide-react";
import React from "react";
import UserForm from "@/components/user-profile/UserForm";
import Subscription from "@/components/user-profile/Subscription";
import PasswordChange from "@/components/user-profile/PasswordChange";
import ReportedQuestion from "@/components/user-profile/ReportedQuestion";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import Link from "next/link";

const accountsItems = [
  {
    id: 1,
    label: "ব্যক্তিগত তথ্য",
    icon: <SquareUser size={18} className="text-red-500" />,
    action: "user-form",
  },
  {
    id: 2,
    label: "আপগ্রেড",
    icon: <Crown size={18} className="text-blue-500" />,
    href: "/users/student/dashboard/subscription",
  },
  {
    id: 3,
    label: "সাবস্ক্রিপশন",
    icon: <CreditCard size={18} className="text-green-500" />,
    action: "subscription",
  },
  {
    id: 4,
    label: "পাসওয়ার্ড পরিবর্তন",
    icon: <KeyRound size={18} className="text-yellow-500" />,
    action: "password",
  },
];

const contentItems = [
  {
    id: 1,
    label: "রিপোর্টেড প্রশ্ন",
    icon: <Flag size={18} className="text-red-500" />,
    action: "reported",
  },
  {
    id: 2,
    label: "হিস্ট্রি",
    icon: <History size={18} className="text-blue-500" />,
    href: "/history",
  },
  {
    id: 3,
    label: "নোটিফিকেশন",
    icon: <Bell size={18} className="text-green-500" />,
    href: "/users/student/dashboard/notification",
  },
];

const infoItems = [
  {
    id: 1,
    label: "আমাদের সম্পর্কে",
    icon: <MessageCircle size={18} className="text-red-500" />,
    href: "/users/student/dashboard/about-us",
  },
  {
    id: 2,
    label: "নীতিমালা",
    icon: <AlertTriangle size={18} className="text-blue-500" />,
    href: "/users/student/dashboard/terms-and-conditions",
  },
  {
    id: 3,
    label: "গোপনীয়তা নীতি",
    icon: <Shield size={18} className="text-green-500" />,
    href: "/users/student/dashboard/privacy-policy",
  },
];

const actionItems = [
  {
    id: 1,
    label: "ডিলিট একাউন্ট",
    icon: <Trash size={18} className="text-red-500" />,
    href: "/delete-account",
    action: "delete-account",
  },
  {
    id: 2,
    label: "লগ আউট",
    icon: <LogOutIcon size={18} className="text-blue-500" />,
    href: "/",
  },
];

const Section = ({
  title,
  items,
  onActionClick,
}: {
  title: string;
  items: {
    id: number;
    label: string;
    icon: React.ReactNode;
    href?: string;
    action?: string;
  }[];
  onActionClick?: (action?: string) => void;
}) => (
  <section className="space-y-3">
    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
      {title}
    </h3>
    <div className="space-y-2">
      {items.map(({ id, label, icon, href, action }) =>
        action ? (
          <button
            key={id}
            onClick={() => onActionClick?.(action)}
            className="w-full flex items-center gap-4 p-3 rounded-lg transition bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 text-left"
          >
            <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
              {icon}
            </div>
            <span className="font-semibold text-base text-gray-800 dark:text-gray-100">
              {label}
            </span>
          </button>
        ) : (
          <Link
            key={id}
            href={href}
            className=" w-full flex items-center gap-4 p-3 rounded-lg transition bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 text-left"
          >
            <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
              {icon}
            </div>
            <span className="font-semibold text-base text-gray-800 dark:text-gray-100">
              {label}
            </span>
          </Link>
        )
      )}
    </div>
  </section>
);

const Page = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const showAnyComponent =
    activeComponent === "user-form" ||
    activeComponent === "subscription" ||
    activeComponent === "password" ||
    activeComponent === "reported";

  const handleActionClick = (action?: string) => {
    if (action === "delete-account") {
      onOpen();
    } else {
      setActiveComponent(action ?? null);
    }
  };

  return (
    <div className="container mx-auto max-w-6xl px-6 py-8 transition-all duration-500">
      <h1 className="text-3xl font-bold mb-8 text-center dark:text-gray-100">
        সেটিংস
      </h1>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                একাউন্ট ডিলিট করুন
              </ModalHeader>
              <ModalBody>
                <p className="text-gray-700 dark:text-gray-300">
                  আপনি কি নিশ্চিত যে আপনি আপনার একাউন্ট ডিলিট করতে চান? এই কাজটি
                  বিপরীতযোগ্য নয় এবং আপনার সমস্ত ডেটা স্থায়ীভাবে মুছে ফেলা
                  হবে।
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  যদি আপনি আপনার একাউন্ট ডিলিট করেন, তাহলে:
                </p>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>আপনার সমস্ত ব্যক্তিগত তথ্য মুছে যাবে</li>
                  <li>আপনার সাবস্ক্রিপশন বাতিল হয়ে যাবে</li>
                  <li>আপনার তৈরি করা সমস্ত কন্টেন্ট মুছে যাবে</li>
                </ul>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="default"
                  radius="sm"
                  variant="light"
                  onPress={onClose}
                >
                  বাতিল করুন
                </Button>
                <Button
                  radius="sm"
                  color="danger"
                  onPress={() => {
                    console.log("Account deletion initiated");
                    onClose();
                  }}
                >
                  ডিলিট একাউন্ট
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div
        className={`transition-all duration-500 ${
          showAnyComponent ? "lg:flex lg:items-start lg:gap-8" : ""
        }`}
      >
        {/* Left Panel */}
        <div
          className={`transition-all duration-500 ${
            showAnyComponent ? "lg:w-1/2" : "max-w-xl mx-auto"
          }`}
        >
          {/* Upload + Profile */}
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center mb-8">
            <UploadPhoto />
            <h2 className="mt-5 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Talat Mahmud Anas
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              talatmahmud002021@gmail.com
            </p>
            <p className="inline-block bg-red-700 text-white rounded-full px-5 py-1 mt-4 text-sm font-medium tracking-wide">
              BATCH: HSC_26
            </p>
          </section>

          {/* Sections */}
          <div className="space-y-5">
            <Section
              title="ACCOUNT"
              items={accountsItems}
              onActionClick={handleActionClick}
            />
            <Section
              title="CONTENT"
              items={contentItems}
              onActionClick={handleActionClick}
            />
            <Section title="INFORMATION" items={infoItems} />
            <Section
              title="ACTIONS"
              items={actionItems}
              onActionClick={handleActionClick}
            />
          </div>
        </div>

        {/* Right Panel */}
        {showAnyComponent && (
          <div className="mt-10 lg:mt-0 w-full lg:w-1/2">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              {activeComponent === "user-form" && <UserForm />}
              {activeComponent === "subscription" && <Subscription />}
              {activeComponent === "password" && <PasswordChange />}
              {activeComponent === "reported" && <ReportedQuestion />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
