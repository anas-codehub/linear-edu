import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Divider,
  Input,
} from "@heroui/react";
import React from "react";

const UserForm = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 gap-4">
        <p>ব্যক্তিগত তথ্য</p>
        <Divider className="my-2 w-full max-w-xl" />
        <Input
          placeholder="Enter your name"
          className="w-full max-w-xl"
          label="Name"
          radius="sm"
          variant="bordered"
        />
        <Input
          placeholder="School/College Name"
          className="w-full max-w-xl"
          label="School/College"
          radius="sm"
          variant="bordered"
        />
        <Autocomplete
          className="w-full max-w-xl"
          radius="sm"
          placeholder="Select your level"
          label="Level"
          variant="bordered"
        >
          <AutocompleteItem></AutocompleteItem>
        </Autocomplete>
        <Autocomplete
          className="w-full max-w-xl"
          radius="sm"
          placeholder="Select your batch"
          label="Batch"
          variant="bordered"
        >
          <AutocompleteItem></AutocompleteItem>
        </Autocomplete>
        <Button className="w-full max-w-xl" radius="sm" color="warning">
          Submit
        </Button>
      </div>
    </>
  );
};

export default UserForm;
