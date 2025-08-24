import { BookOpen } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { ComingSoonCard } from "./ComingSoonCard";

export const BooksSection = () => (
  <SectionCard
    title="বই পত্র"
    icon={<BookOpen className="text-blue-500" size={18} />}
    compact
  >
    <div className="space-y-3">
      <ComingSoonCard />
      <ComingSoonCard />
      <ComingSoonCard />
    </div>
  </SectionCard>
);
