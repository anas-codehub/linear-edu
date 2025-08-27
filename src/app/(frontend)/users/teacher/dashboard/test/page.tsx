"use client";

import { Button } from "@heroui/react";
import { useQueryState } from "nuqs";

const page = () => {
  const [step, setStep] = useQueryState("step");

  return (
    <div>
      {step === "" && (
        <Button
          onPress={() => {
            setStep("2");
          }}
        >
          step
        </Button>
      )}

      {step === "2" && (
        <Button
          onPress={() => {
            setStep("3");
          }}
        >
          step2
        </Button>
      )}

      {step === "3" && (
        <Button
          onPress={() => {
            setStep("4");
          }}
        >
          step3
        </Button>
      )}

      {step === "4" && (
        <Button
          onPress={() => {
            setStep("5");
          }}
        >
          step4
        </Button>
      )}

      {step === "5" && <Button>step5</Button>}
    </div>
  );
};

export default page;
