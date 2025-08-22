"use client";
import { Navbar, NavbarContent, NavbarItem } from "@heroui/react";
import { Book, FileText, FileCheck, Home, BookA, User } from "lucide-react";
import React from "react";

const navItems = [
  { label: "Home", icon: <Home size={20} /> },
  { label: "Courses", icon: <BookA size={20} /> },
  { label: "Notes", icon: <FileCheck size={20} /> },
  { label: "Exams", icon: <FileText size={20} /> },
  { label: "Profile", icon: <User size={20} /> },
];

const UserStudentDashPad = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-amber-100 dark:bg-dark-2 border-t border-gray-200 dark:border-gray-700">
      <Navbar isBordered={false} className="w-full !max-w-none !mx-0 h-full">
        <NavbarContent
          justify="center"
          className="w-full h-full overflow-x-auto scrollbar-hide"
        >
          <div className="flex justify-center gap-6 w-full min-w-max px-2 py-2 h-full">
            {navItems.map((item, index) => (
              <NavbarItem
                key={index}
                className="flex flex-col items-center justify-center text-center whitespace-nowrap px-2 py-1 hover:text-theme cursor-pointer transition-colors h-full"
              >
                <div className="mb-1">{item.icon}</div>
                <div className="text-sm">{item.label}</div>
              </NavbarItem>
            ))}
          </div>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default UserStudentDashPad;
