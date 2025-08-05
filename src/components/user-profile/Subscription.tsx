import { Button } from "@heroui/react";
import React from "react";

const Subscription = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="text-xl">Plan</p>
        <div>
          <p>Current Plan</p>
          <p>Basic</p>
          <Button radius="sm" color="warning">
            Upgrade to premium
          </Button>
        </div>
        <div>
          <p className="text-lg">Billing History</p>
          <p>You haven't bought any packages yet.</p>
        </div>
      </div>
    </>
  );
};

export default Subscription;
