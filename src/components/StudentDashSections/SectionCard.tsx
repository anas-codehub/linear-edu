import { Card, CardBody } from "@heroui/react";
import { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  compact?: boolean;
}

export const SectionCard = ({
  title,
  icon,
  children,
  compact = false,
}: SectionCardProps) => (
  <Card className="w-full mb-5" radius="lg">
    <CardBody
      className={`p-4 md:p-5 bg-white dark:bg-dark-2 ${
        compact ? "" : "space-y-4"
      }`}
    >
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {children}
    </CardBody>
  </Card>
);
