import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Divider,
  Input,
} from "@heroui/react";
import React from "react";

const PasswordChange = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 gap-4">
        <p>পাসওয়ার্ড পরিবর্তন</p>
        <Divider className="my-2 w-full max-w-xl" />
        <Input
          placeholder="Enter new password"
          className="w-full max-w-xl"
          label="New Password"
          radius="sm"
          variant="bordered"
        />
        <Input
          placeholder="Confirm new password"
          className="w-full max-w-xl"
          label="Confirm Password"
          radius="sm"
          variant="bordered"
        />

        <Button className="w-full max-w-xl" radius="sm" color="warning">
          Change Password
        </Button>
      </div>
    </>
  );
};

export default PasswordChange;
