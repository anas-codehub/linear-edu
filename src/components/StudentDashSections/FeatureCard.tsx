import { Card, CardBody, Button } from "@heroui/react";
import Link from "next/link";

interface FeatureCardProps {
  title: string;
  description: string;
  color?: "blue" | "purple" | "green" | "red";
  link?: string;
  onClick?: () => void;
}

export const FeatureCard = ({
  title,
  description,
  color = "blue",
  link,
  onClick,
}: FeatureCardProps) => {
  const colorClasses = {
    blue: "text-white  border-none bg-brand-1 dark:bg-bdark-1",
    purple: "text-white  border-none bg-brand-1 dark:bg-bdark-1",
    green: "text-white  border-none bg-brand-1 dark:bg-bdark-1",
    red: "text-white  border-none bg-brand-1 dark:bg-bdark-1",
  };

  const renderButton = () => (
    <Button
      size="sm"
      color="primary"
      variant="flat"
      className="text-xs bg-brand-2 text-white"
      as={link ? Link : undefined}
      href={link}
      onClick={onClick}
    >
      এক্সপ্লোর করুন
    </Button>
  );

  return (
    <Card
      className={`border-2 ${colorClasses[color]} transition-all hover:scale-105`}
      radius="lg"
    >
      <CardBody className="p-3 md:p-4">
        <h4 className="font-semibold mb-1 text-base">{title}</h4>
        <p className="text-sm opacity-80 mb-2">{description}</p>
        {renderButton()}
      </CardBody>
    </Card>
  );
};
