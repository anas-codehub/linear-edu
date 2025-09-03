import { Button, Image, Input, Tab, Tabs } from "@heroui/react";
import React from "react";
import NextImage from "next/image";
import { Trash } from "lucide-react";
import HomeFooter from "./Footers/HomeFooter";

const QuestionShow = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col justify-center items-center px-4">
        <div className="max-w-6xl w-full flex justify-center items-center py-4">
          <h2 className="text-red-500 text-center font-medium">
            আপনার ৬ মাস পূর্বের ড্রাফট প্রশ্ন স্বয়ংক্রিয়ভাবে মুছে যাবে
          </h2>
        </div>

        <div className="max-w-6xl w-full">
          <Tabs aria-label="Options">
            {["Completed", "Draft"].map((tabTitle) => (
              <Tab key={tabTitle.toLowerCase()} title={tabTitle}>
                <div className="flex flex-col justify-center items-center gap-8">
                  <Input className="w-full max-w-3xl" placeholder="Search" />

                  <div className="flex flex-wrap gap-6 justify-center w-full">
                    {[1, 2].map((item) => (
                      <div
                        key={item}
                        className="border w-full sm:w-[48%] md:w-[45%] lg:w-[40%] p-4"
                      >
                        <div className="flex flex-col sm:flex-row justify-between gap-4">
                          <Image
                            removeWrapper
                            alt="HeroUI hero Image"
                            as={NextImage}
                            height={200}
                            src="/homepage/anas.jpg"
                            width={300}
                            className="object-contain w-full sm:w-[150px] h-[150px] sm:h-[200px]"
                          />
                          <div className="flex flex-col justify-between items-center gap-4 w-full sm:w-auto">
                            <div className="flex justify-between gap-2 items-center w-full">
                              <p>text.pdf</p>
                              <Trash size={18} />
                            </div>
                            <Button
                              className="bg-theme w-full sm:w-auto"
                              radius="none"
                            >
                              Create New
                            </Button>
                            <Button
                              className="bg-theme w-full sm:w-auto"
                              radius="none"
                            >
                              Edit
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
      <HomeFooter />
    </>
  );
};

export default QuestionShow;
