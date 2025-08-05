import React from "react";
import Head from "next/head";
import { Button } from "@heroui/react";
import { div } from "framer-motion/client";
import AboutLinear from "@/components/user-profile/AboutLinear";

const page = () => {
  return (
    <div>
      <AboutLinear />
    </div>
  );
};

export default page;
