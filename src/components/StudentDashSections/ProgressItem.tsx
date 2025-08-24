import { Progress } from "@heroui/react";

interface ProgressItemProps {
  subject: string;
}

export const ProgressItem = ({ subject }: ProgressItemProps) => (
  <div>
    <div className="flex justify-between items-center mb-1">
      <p className="text-sm">{subject}</p>
      <span className="text-xs text-gray-500">70%</span>
    </div>
    <Progress value={70} color="success" size="sm" radius="sm" />
  </div>
);
