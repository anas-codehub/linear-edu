import { Award } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { FeatureCard } from "./FeatureCard";

export const TestingSection = () => (
  <SectionCard
    title="নিজেকে যাচাই কর"
    icon={<Award className="text-amber-500" size={18} />}
  >
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      <FeatureCard
        title="ফ্রি এক্সাম"
        description="বিনামূল্যে পরীক্ষা দিন"
        color="green"
      />
      <FeatureCard
        title="প্রিমিয়াম এক্সাম"
        description="বিস্তারিত ফলাফল সহ পরীক্ষা"
        color="red"
      />
    </div>
  </SectionCard>
);
