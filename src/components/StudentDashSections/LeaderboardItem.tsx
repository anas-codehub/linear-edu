interface LeaderboardItemProps {
  person: {
    rank: number;
    name: string;
    role: string;
    xp: number;
  };
}

export const LeaderboardItem = ({ person }: LeaderboardItemProps) => (
  <div
    className={`flex items-center p-2 md:p-3 rounded-lg ${
      person.rank <= 3
        ? "bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800"
        : "bg-gray-50 dark:bg-gray-800"
    }`}
  >
    <div
      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
        person.rank <= 3
          ? "bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300"
          : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
      }`}
    >
      {person.rank}
    </div>
    <div className="ml-3 flex-1 min-w-0">
      <p className="text-sm font-medium truncate">{person.name}</p>
      <p className="text-xs text-gray-500 truncate">{person.role}</p>
    </div>
    <div className="text-sm font-semibold text-amber-600 dark:text-amber-400">
      {person.xp}xp
    </div>
  </div>
);
