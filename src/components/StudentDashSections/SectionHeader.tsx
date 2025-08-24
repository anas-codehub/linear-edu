interface SectionHeaderProps {
  title: string;
  description?: string;
}

export const SectionHeader = ({ title, description }: SectionHeaderProps) => (
  <header className="text-center mb-6">
    <h1 className="text-2xl md:text-3xl font-bold text-theme mb-2">{title}</h1>
    {description && (
      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
        {description}
      </p>
    )}
  </header>
);
