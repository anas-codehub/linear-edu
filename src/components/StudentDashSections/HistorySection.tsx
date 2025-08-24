import { Clock } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { HistoryItem } from "./HistoryItem";
import { BookOpen, Award, FileText } from "lucide-react";

const historyData = [
  {
    title: "প্রিমিয়াম কোর্স",
    time: "2 mins ago",
    icon: <BookOpen size={16} />,
  },
  { title: "ফ্রি কোর্স", time: "15 mins ago", icon: <BookOpen size={16} /> },
  { title: "প্রিমিয়াম এক্সাম", time: "30 mins ago", icon: <Award size={16} /> },
  { title: "ফ্রি এক্সাম", time: "1 hour ago", icon: <Award size={16} /> },
  {
    title: "নতুন নোট আপলোড",
    time: "2 hours ago",
    icon: <FileText size={16} />,
  },
];

export const HistorySection = () => (
  <SectionCard
    title="সাম্প্রতিক কার্যক্রম"
    icon={<Clock className="text-purple-500" size={18} />}
  >
    <div className="space-y-3">
      {historyData.map((item, index) => (
        <HistoryItem key={index} item={item} />
      ))}
    </div>
  </SectionCard>
);
