"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import { User } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle";
import Link from "next/link";

export default function UserStudentDashNav() {
  return (
    <div className="sticky top-0 z-50">
      <Navbar isBordered>
        <NavbarBrand>
          <Link href="/users/student/dashboard">
            <Image src={"/logo/logo.png"} alt="logo" height={100} width={200} />
          </Link>
        </NavbarBrand>

        <NavbarContent justify="end">
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
