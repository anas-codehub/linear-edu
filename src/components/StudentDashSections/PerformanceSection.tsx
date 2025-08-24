import { TrendingUp } from "lucide-react";
import { SectionCard } from "./SectionCard";

import { LinearBar } from "../LinearBar";

export const PerformanceSection = () => (
  <SectionCard
    title="পারফরম্যান্স বিশ্লেষণ"
    icon={<TrendingUp className="text-emerald-500" size={18} />}
  >
    <div className="bg-white dark:bg-dark-2 rounded-xl p-3">
      <LinearBar />
    </div>
  </SectionCard>
);
