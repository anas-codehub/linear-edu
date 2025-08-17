"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import { Button } from "@heroui/react";

export default function HomeNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 w-full">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/logo/logo.png"
                alt="logo"
                width={160}
                height={64}
                className="w-[300px] object-contain"
              />
            </Link>
          </div>

          {/* Center: Links */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-8">
            <Link
              href="#"
              className="text-gray-800 dark:text-white font-medium hover:text-theme transition-colors text-lg"
            >
              শিক্ষার্থী
            </Link>
            <Link
              href="#"
              className="text-gray-800 dark:text-white font-medium hover:text-theme transition-colors text-lg"
            >
              শিক্ষক/শিক্ষিকা
            </Link>
          </div>

          {/* Right: Search, Login, ThemeToggle */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              radius="full"
              className="text-gray-800 dark:text-white p-2"
            >
              <Search />
            </Button>
            <Button
              as={Link}
              href="/users/student/dashboard"
              variant="solid"
              radius="full"
              className="bg-theme text-white hover:bg-theme-dark transition-colors"
            >
              লগইন
            </Button>
            <ThemeToggle />

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 dark:text-white p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
              >
                {isOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-full bg-white dark:bg-gray-800 px-4 pt-2 pb-4 space-y-2">
          <Link
            href="#"
            className="block text-gray-800 dark:text-white font-medium hover:text-theme"
          >
            শিক্ষার্থী
          </Link>
          <Link
            href="#"
            className="block text-gray-800 dark:text-white font-medium hover:text-theme"
          >
            শিক্ষক/শিক্ষিকা
          </Link>
        </div>
      )}
    </header>
  );
}
