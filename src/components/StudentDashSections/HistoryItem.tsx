import { ReactNode } from "react";

interface HistoryItemProps {
  item: {
    title: string;
    time: string;
    icon: ReactNode;
  };
}

export const HistoryItem = ({ item }: HistoryItemProps) => (
  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
    <div className="flex items-center gap-2">
      <div className="p-1.5 text-brand-1 dark:text-bdark-1 rounded-full">
        {item.icon}
      </div>
      <span className="text-sm">{item.title}</span>
    </div>
    <span className="text-xs text-gray-500">{item.time}</span>
  </div>
);
