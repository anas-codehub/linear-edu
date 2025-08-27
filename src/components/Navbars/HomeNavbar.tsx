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
    "শিক্ষার্থী",
    "শিক্ষক/শিক্ষিকা",
    <Button
      key="login"
      as={Link}
      color="primary"
      href="/users/student/dashboard"
      variant="solid"
      radius="sm"
      className="bg-[#EF4444] lg:flex"
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
              শিক্ষার্থী
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link aria-current="page" href="#">
              শিক্ষক/শিক্ষিকা
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
              <Search />
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="/users/student/dashboard"
              variant="solid"
              radius="sm"
              className="bg-[#EF4444] hidden lg:flex"
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
