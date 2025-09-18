"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  useDisclosure,
} from "@heroui/react";

export default function HomeNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const menuItems = [
    "হোম",
    "কোর্স",
    "বুকস",
    "এক্সামস",
    "মডেল টেস্ট",
    "শপ",
    "আমাদের সম্পর্কে",
    <Button
      key="login"
      as={Link}
      color="primary"
      href="/users/student/dashboard"
      variant="solid"
      radius="sm"
      className="bg-brand-1 lg:hidden sm:flex"
    >
      লগইন
    </Button>,
  ];

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="w-full !max-w-none !mx-0 justify-between"
        classNames={{
          wrapper: "w-full !max-w-none !mx-0",
        }}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand className="flex-1">
            <Image src="/logo/logo.png" alt="Logo" width={200} height={40} />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4 " justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              হোম
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link aria-current="page" href="#">
              কোর্স
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link aria-current="page" href="#">
              বুকস
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link aria-current="page" href="#">
              এক্সামস
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link aria-current="page" href="#">
              মডেল টেস্ট
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link aria-current="page" href="#">
              শপ
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link aria-current="page" href="#">
              আমাদের সম্পর্কে
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className=" lg:flex">
            <Button
              onPress={onOpen}
              variant="bordered"
              radius="full"
              className=" text-[#EF4444] border-none"
            >
              <Search className="text-green-600" />
            </Button>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Button
              as={Link}
              color="primary"
              href="/users/student/dashboard"
              variant="solid"
              radius="sm"
              className="bg-green-600 "
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
              <Link className="w-full" href="#">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      <Modal
        radius="sm"
        size="2xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
        backdrop="blur"
        classNames={{
          closeButton: "text-theme",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <Input
                  placeholder="Type and hit enter"
                  className="w-full px-3 py-2"
                  radius="none"
                  startContent={<Search className="text-theme" />}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
