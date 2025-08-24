import { FileText } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { ComingSoonCard } from "./ComingSoonCard";

export const NotesSection = () => (
  <SectionCard
    title="নোট্‌স"
    icon={<FileText className="text-teal-500" size={18} />}
  >
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      <ComingSoonCard />
      <ComingSoonCard />
    </div>
  </SectionCard>
);
