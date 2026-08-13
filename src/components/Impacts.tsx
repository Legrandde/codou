import { useTheme } from "../contexts/ThemeContext";
import ImpactCard from "./ImpactCard";
import { type ImpactItem } from "./ImpactModal"; // import du type partagé

interface ImpactSectionProps {
  impacts: ImpactItem[];
  onImpactClick: (impact: ImpactItem) => void;
}

export default function ImpactSection({
  impacts,
  onImpactClick,
}: ImpactSectionProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="impact"
      className={`w-full px-6 py-24 ${
        isDark ? "bg-gray-900" : "bg-transparent"
      }`}
    >
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
          Impact
        </span>
        <h2
          className={`text-4xl md:text-6xl font-bold mt-3 mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Transformer les parcours,
          <br />
          créer des opportunités.
        </h2>
        <p
          className={`text-lg leading-relaxed max-w-2xl ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          À travers l’éducation, l’inclusion et l’innovation numérique,
          plusieurs initiatives portent une même ambition : créer un impact
          concret dans la société.
        </p>
      </div>

      {/* Liste des impacts */}
      <div className="flex flex-col gap-10">
        {impacts.map((impact) => (
          <div key={impact.id} className="w-full">
            <ImpactCard
              impact={impact}
              onClick={() => onImpactClick(impact)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}