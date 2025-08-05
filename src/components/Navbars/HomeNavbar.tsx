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
import { Link } from "@heroui/react";
import { ChevronDown, Chrome, Search } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle";

const menuItems = [
  "ফ্রি কোর্স",
  "একাডেমিক",
  "এডমিশন",
  "প্রশ্ন ব্যাঙ্ক",
  "কুইজ",
  "স্পেশাল ব্যাচ",
];

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

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <Image alt="logo" src={"/logo/logo.png"} height={100} width={200} />
          </NavbarBrand>
          <NavbarItem>
            <Link color="foreground" href="#">
              ফ্রি কোর্স
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-md"
                  radius="sm"
                  variant="light"
                  endContent={icons.chevron}
                >
                  একাডেমিক
                </Button>
              </DropdownTrigger>

              <DropdownMenu
                aria-label="ACME features"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem
                  key="autoscaling"
                  description="ACME scales apps based on demand and load"
                >
                  Autoscaling
                </DropdownItem>
                <DropdownItem
                  key="usage_metrics"
                  description="Real-time metrics to debug issues"
                >
                  Usage Metrics
                </DropdownItem>
                <DropdownItem
                  key="production_ready"
                  description="ACME runs on ACME, join us at web scale"
                >
                  Production Ready
                </DropdownItem>
                <DropdownItem
                  key="99_uptime"
                  description="High availability and uptime guarantees"
                >
                  +99% Uptime
                </DropdownItem>
                <DropdownItem
                  key="supreme_support"
                  description="Support team ready to respond"
                >
                  +Supreme Support
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              এডমিশন
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              প্রশ্ন ব্যাঙ্ক
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              কুইজ
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-md"
                  radius="sm"
                  variant="light"
                  endContent={icons.chevron}
                >
                  স্পেশাল ব্যাচ
                </Button>
              </DropdownTrigger>

              <DropdownMenu
                aria-label="ACME features"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem
                  key="autoscaling"
                  description="ACME scales apps based on demand and load"
                >
                  Autoscaling
                </DropdownItem>
                <DropdownItem
                  key="usage_metrics"
                  description="Real-time metrics to debug issues"
                >
                  Usage Metrics
                </DropdownItem>
                <DropdownItem
                  key="production_ready"
                  description="ACME runs on ACME, join us at web scale"
                >
                  Production Ready
                </DropdownItem>
                <DropdownItem
                  key="99_uptime"
                  description="High availability and uptime guarantees"
                >
                  +99% Uptime
                </DropdownItem>
                <DropdownItem
                  key="supreme_support"
                  description="Support team ready to respond"
                >
                  +Supreme Support
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
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
                size="lg"
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
