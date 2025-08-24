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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { Bell, Search, User } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle";
import Link from "next/link";

export default function UserStudentDashNav() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isDoneOpen,
    onOpen: onDoneOpen,
    onOpenChange: onDoneOpenChange,
  } = useDisclosure();

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
            <Link href={"/users/student/dashboard/notification"}>
              <Bell />
            </Link>
          </NavbarItem>
          <NavbarItem>
            <div>
              <Dropdown placement="bottom-start">
                <DropdownTrigger>
                  <Button variant="light" radius="full">
                    <User />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-bold">Signed in as</p>
                    <p className="font-bold">@talatmahmudanas</p>
                  </DropdownItem>
                  <DropdownItem key="toggle">
                    <ThemeToggle />
                  </DropdownItem>
                  <DropdownItem key="settings">ব্যক্তিগত তথ্য</DropdownItem>
                  <DropdownItem key="team_settings">আপডেট</DropdownItem>
                  <DropdownItem key="analytics">
                    <Link href={"/users/student/dashboard/subscription"}>
                      সাবস্ক্রিপশন
                    </Link>
                  </DropdownItem>
                  <DropdownItem key="system">গিফট</DropdownItem>
                  <DropdownItem key="configurations" onPress={onDoneOpen}>
                    অ্যাকাউন্ট ডিলিট
                  </DropdownItem>

                  <DropdownItem key="logout" color="danger">
                    <Link href={"/"}>লগ আউট</Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Search Modal */}
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
          {() => (
            <ModalBody>
              <Input
                placeholder="Type and hit enter"
                className="w-full px-3 py-2"
                radius="none"
                startContent={<Search className="text-theme" />}
              />
            </ModalBody>
          )}
        </ModalContent>
      </Modal>

      {/* Delete Account Modal */}
      <Modal isOpen={isDoneOpen} onOpenChange={onDoneOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Delete Account
              </ModalHeader>
              <ModalBody>
                <p>Are you sure you want to delete your account?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
