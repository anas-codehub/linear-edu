"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalBody,
  Input,
} from "@heroui/react";
import { Bell, Search, User } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle";
import Link from "next/link";

export default function UserStudentDashNav() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
          <Button
            onPress={onOpen}
            variant="bordered"
            radius="full"
            className="text-theme border-none"
          >
            <Search />
          </Button>
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
    </div>
  );
}
