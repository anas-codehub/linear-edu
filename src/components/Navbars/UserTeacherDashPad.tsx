"use client";
import { Navbar, NavbarContent, NavbarItem } from "@heroui/react";
import { Book, FileText, FileCheck, Home, BookA, User } from "lucide-react";
import React, { useState } from "react";

const navItems = [
  { id: "home", label: "Home", icon: <Home size={20} /> },
  { id: "courses", label: "Courses", icon: <BookA size={20} /> },
  { id: "notes", label: "Notes", icon: <FileCheck size={20} /> },
  { id: "exams", label: "Exams", icon: <FileText size={20} /> },
  { id: "profile", label: "Profile", icon: <User size={20} /> },
];

const UserTeacherDashPad = () => {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-amber-100 dark:bg-dark-2 border-t border-gray-200 dark:border-gray-700 safe-area-b md:hidden">
      <Navbar
        isBordered={false}
        className="w-full !max-w-none !mx-0 h-full px-2"
      >
        <NavbarContent justify="center" className="w-full h-full">
          <div className="flex justify-between w-full max-w-md mx-auto h-full">
            {navItems.map((item) => (
              <NavbarItem
                key={item.id}
                className={`flex flex-col items-center justify-center text-center flex-1 min-w-0 px-1 py-1 cursor-pointer transition-colors h-full ${
                  activeItem === item.id
                    ? "text-amber-600 dark:text-amber-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-300"
                }`}
                onClick={() => setActiveItem(item.id)}
              >
                <div className="mb-0.5 flex justify-center">{item.icon}</div>
                <div className="text-xs font-medium truncate w-full">
                  {item.label}
                </div>
              </NavbarItem>
            ))}
          </div>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default UserTeacherDashPad;
