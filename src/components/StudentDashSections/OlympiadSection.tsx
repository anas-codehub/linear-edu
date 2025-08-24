import { Award } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { ComingSoonCard } from "./ComingSoonCard";

export const OlympiadSection = () => (
  <SectionCard
    title="অলিম্পিয়াড"
    icon={<Award className="text-amber-500" size={18} />}
    compact
  >
    <div className="space-y-3">
      <ComingSoonCard />
      <ComingSoonCard />
    </div>
  </SectionCard>
);
