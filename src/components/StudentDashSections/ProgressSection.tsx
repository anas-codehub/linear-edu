import { ChartArea, ArrowRight } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { ProgressItem } from "./ProgressItem";
import { Button } from "@heroui/react";

const subjects = [
  "পরিসংখ্যান",
  "উচ্চতর গণিত",
  "জীববিজ্ঞান",
  "রসায়ন",
  "পদার্থবিজ্ঞান",
  "তথ্য ও যোগাযোগ প্রযুক্তি",
  "ইংরেজি",
  "বাংলা",
];

export const ProgressSection = () => (
  <SectionCard
    title="তোমার প্রগ্রেস রিপোর্ট"
    icon={<ChartArea className="text-orange-500" size={18} />}
  >
    <div className="space-y-3">
      {subjects.map((subject) => (
        <ProgressItem key={subject} subject={subject} />
      ))}
    </div>
    <Button className="w-full mt-4" color="primary" variant="flat" size="sm">
      বিস্তারিত দেখুন <ArrowRight size={14} className="ml-1" />
    </Button>
  </SectionCard>
);
