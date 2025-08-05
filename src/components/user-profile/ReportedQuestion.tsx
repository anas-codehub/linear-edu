import { Button } from "@heroui/react";
import React, { useState } from "react";

const ReportedQuestion = () => {
  const [status, setStatus] = useState<"resolved" | "pending" | null>(null);

  return (
    <div className="w-full max-w-2xl p-4">
      <div className="flex items-center justify-between mb-4">
        <p>রিপোর্ট</p>
        <div className="flex gap-2">
          <Button
            color={status === "resolved" ? "warning" : "default"}
            radius="full"
            onClick={() => setStatus("resolved")}
          >
            Resolved
          </Button>
          <Button
            color={status === "pending" ? "warning" : "default"}
            radius="full"
            onClick={() => setStatus("pending")}
          >
            Pending
          </Button>
        </div>
      </div>
      <div className="bg-white dark:bg-dark-2 p-4 rounded-md shadow-md">
        আমাদের প্রশ্ন রিভিউ করতে ৩-৭ কার্যদিবস লাগতে পারে
      </div>
    </div>
  );
};

export default ReportedQuestion;
