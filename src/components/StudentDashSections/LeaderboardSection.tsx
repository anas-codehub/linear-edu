import { Users, ArrowRight } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { LeaderboardItem } from "./LeaderboardItem";
import { Button } from "@heroui/react";

const leaderboard = [
  { rank: 1, name: "Jane Doe", role: "Product Designer", xp: 45 },
  { rank: 2, name: "John Smith", role: "Science Student", xp: 42 },
  { rank: 3, name: "Alice Johnson", role: "Math Enthusiast", xp: 38 },
  { rank: 4, name: "Robert Brown", role: "Biology Learner", xp: 35 },
  { rank: 5, name: "Emma Wilson", role: "Chemistry Student", xp: 32 },
];

export const LeaderboardSection = () => (
  <SectionCard
    title="মাসিক লিডারবোর্ড"
    icon={<Users className="text-amber-500" size={18} />}
  >
    <div className="space-y-2">
      {leaderboard.map((person) => (
        <LeaderboardItem key={person.rank} person={person} />
      ))}
    </div>
    <Button
      className="w-full mt-3 bg-brand-2 text-white"
      variant="flat"
      size="sm"
    >
      সম্পূর্ণ লিডারবোর্ড দেখুন <ArrowRight size={14} className="ml-1" />
    </Button>
  </SectionCard>
);
