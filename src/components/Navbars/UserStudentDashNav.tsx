"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import { Bell, Search, User } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle";
import Link from "next/link";

export default function UserStudentDashNav() {
  return (
    <div className="sticky top-0 z-50">
      <Navbar
        isBordered
        className="w-full !max-w-none !mx-0 justify-between"
        classNames={{
          wrapper: "w-full !max-w-none !mx-0",
        }}
      >
        <NavbarContent justify="start">
          <Search />
        </NavbarContent>
        <NavbarContent justify="center">
          <Link href="/users/student/dashboard">
            <Image src={"/logo/logo.png"} alt="logo" height={100} width={200} />
          </Link>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Bell />
          </NavbarItem>
          <NavbarItem>
            <div>
              <User />
              User
            </div>
          </NavbarItem>
          <NavbarItem>
            <ThemeToggle />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
