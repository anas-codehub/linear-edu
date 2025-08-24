// types/dashboard.ts
export interface Subject {
  name: string;
  progress: number;
}

export interface HistoryItem {
  title: string;
  time: string;
  icon: React.ReactNode;
}

export interface LeaderboardPerson {
  rank: number;
  name: string;
  role: string;
  xp: number;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  color?: "blue" | "purple" | "green" | "red";
}       