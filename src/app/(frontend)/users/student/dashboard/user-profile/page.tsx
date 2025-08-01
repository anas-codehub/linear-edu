import ThemeToggle from "@/components/ThemeToggle";
import React from "react";

const page = () => {
  return (
    <>
      <div className="container mx-auto w-full max-w-6xl p-4">
        <p className="text-xl">সেটিংস</p>
        <div className="flex flex-col justify-center items-center w-full max-w-xs bg-white dark:bg-dark-2 p-6 rounded-lg shadow-md mt-10">
          <p>Pic</p>
          <p>Talat Mahmud Anas</p>
          <p>talatmahmud002021@gmail.com</p>
          <p className="bg-red-700 rounded-3xl w-[150px] text-center">
            BATCH: HSC_26
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
