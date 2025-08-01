"use client";

import ThemeToggle from "@/components/ThemeToggle";
import UploadPhoto from "@/components/UploadPhoto";
import Link from "next/link";
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

const accountsItems = [
  {
    id: 1,
    label: "ব্যক্তিগত তথ্য",
    icon: <SquareUser size={18} className="text-red-500" />,
    href: "/profile",
  },
  {
    id: 2,
    label: "আপগ্রেড",
    icon: <Crown size={18} className="text-blue-500" />,
    href: "/upgrade",
  },
  {
    id: 3,
    label: "সাবস্ক্রিপশন",
    icon: <CreditCard size={18} className="text-green-500" />,
    href: "/subscription",
  },
  {
    id: 4,
    label: "পাসওয়ার্ড পরিবর্তন",
    icon: <KeyRound size={18} className="text-yellow-500" />,
    href: "/change-password",
  },
];

const contentItems = [
  {
    id: 1,
    label: "রিপোর্টেড প্রশ্ন",
    icon: <Flag size={18} className="text-red-500" />,
    href: "/reported",
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
    href: "/notifications",
  },
  {
    id: 4,
    label: "লিনিয়ার ব্লগ",
    icon: <BookOpenText size={18} className="text-yellow-500" />,
    href: "/blog",
  },
];

const infoItems = [
  {
    id: 1,
    label: "আমাদের সম্পর্কে",
    icon: <MessageCircle size={18} className="text-red-500" />,
    href: "/about",
  },
  {
    id: 2,
    label: "নীতিমালা",
    icon: <AlertTriangle size={18} className="text-blue-500" />,
    href: "/rules",
  },
  {
    id: 3,
    label: "গোপনীয়তা নীতি",
    icon: <Shield size={18} className="text-green-500" />,
    href: "/privacy",
  },
];

const actionItems = [
  {
    id: 1,
    label: "ডিলিট একাউন্ট",
    icon: <Trash size={18} className="text-red-500" />,
    href: "/delete-account",
  },
  {
    id: 2,
    label: "লগ আউট",
    icon: <LogOutIcon size={18} className="text-blue-500" />,
    href: "/logout",
  },
];

const Section = ({
  title,
  items,
}: {
  title: string;
  items: { id: number; label: string; icon: React.ReactNode; href: string }[];
}) => (
  <section className="max-w-xl mx-auto mt-5 p-6 space-y-3">
    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
      {title}
    </h3>
    <div className="space-y-2">
      {items.map(({ id, label, icon, href }) => (
        <Link
          key={id}
          href={href}
          className="w-full flex items-center gap-4 p-3 rounded-lg transition bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <div className="p-2 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-700">
            {icon}
          </div>
          <span className="font-semibold text-base text-gray-800 dark:text-gray-100">
            {label}
          </span>
        </Link>
      ))}
    </div>
  </section>
);

const Page = () => {
  return (
    <div className="container mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-bold mb-8 text-center dark:text-gray-100">
        সেটিংস
      </h1>

      {/* Profile Card */}
      <section className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
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
      <Section title="ACCOUNT" items={accountsItems} />
      <Section title="CONTENT" items={contentItems} />
      <Section title="INFORMATION" items={infoItems} />
      <Section title="ACTIONS" items={actionItems} />
    </div>
  );
};

export default Page;
