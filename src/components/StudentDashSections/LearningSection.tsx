import { BookOpen } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { FeatureCard } from "./FeatureCard";

export const LearningSection = () => (
  <SectionCard
    title="আমাদের সাথে শিখ"
    icon={<BookOpen className="text-blue-500" size={18} />}
  >
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      <FeatureCard
        title="এনরোলড কোর্স"
        description="বিনামূল্যে শিখুন বিভিন্ন বিষয়"
        color="blue"
      />
      <FeatureCard
        title="ফ্রি কোর্স"
        description="বিনামূল্যে শিখুন বিভিন্ন বিষয়"
        color="blue"
      />
      <FeatureCard
        title="প্রিমিয়াম কোর্স"
        description="এক্সপার্টদের সাথে গভীরভাবে শিখুন"
        color="purple"
      />
    </div>
  </SectionCard>
);
