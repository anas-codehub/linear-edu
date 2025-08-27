import { Card, CardBody, Button } from "@heroui/react";

interface FeatureCardProps {
  title: string;
  description: string;
  color?: "blue" | "purple" | "green" | "red";
}

export const FeatureCard = ({
  title,
  description,
  color = "blue",
}: FeatureCardProps) => {
  const colorClasses = {
    blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    purple:
      "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
    green:
      "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800",
    red: "bg-orange-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800",
  };

  return (
    <Card
      className={`border-2 ${colorClasses[color]} transition-all hover:scale-105`}
      radius="lg"
    >
      <CardBody className="p-3 md:p-4">
        <h4 className="font-semibold mb-1 text-base">{title}</h4>
        <p className="text-sm opacity-80 mb-2">{description}</p>
        <Button size="sm" color="primary" variant="flat" className="text-xs">
          এক্সপ্লোর করুন
        </Button>
      </CardBody>
    </Card>
  );
};
