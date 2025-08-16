"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import React from "react";

import { ChevronDown, Chrome, Search } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle";
import Link from "next/link";

const menuItems = ["শিক্ষক/শিক্ষিকা", "শিক্ষার্থী"];

export default function HomeNavbar() {
  // ✅ useState inside the component function
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const icons = { chevron: <ChevronDown /> };

  return (
    <div className="sticky top-0 z-50">
      <Navbar
        isBlurred
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-amber-50 dark:bg-gray-800 "
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <Image alt="logo" src={"/logo/logo.png"} height={100} width={200} />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex  gap-4" justify="center">
          <NavbarBrand>
            <Image alt="logo" src={"/logo/logo.png"} height={100} width={200} />
          </NavbarBrand>
          <NavbarItem>
            <Link color="foreground" href="#">
              শিক্ষক/শিক্ষিকা
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link color="foreground" href="#">
              শিক্ষার্থী
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Search />
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="warning"
              href="/users/student/dashboard"
              variant="solid"
              radius="sm"
            >
              লগইন
            </Button>
          </NavbarItem>
          <NavbarItem>
            <ThemeToggle />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
