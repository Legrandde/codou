import { useTheme } from "../contexts/ThemeContext";
import { type ImpactItem } from "./ImpactModal"; // import du type partagé

interface ImpactCardProps {
  impact: ImpactItem;
  onClick: () => void;
}

export default function ImpactCard({ impact, onClick }: ImpactCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <article
      onClick={onClick}
      className="group grid md:grid-cols-2 gap-8 cursor-pointer"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-xl aspect-[16/10]">
        <img
          src={impact.mainImage}
          alt={impact.title}
          className="w-full font-serif italic h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Contenu */}
      <div className="flex flex-col justify-center">
        <span className="text-sm uppercase tracking-[0.2em] text-amber-500 mb-3">
          {impact.subtitle}
        </span>

        <h3
          className={`text-3xl font-serif italic md:text-4xl semibold mb-5 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {impact.title}
        </h3>

        <p
          className={`leading-relaxed mb-8 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {impact.description}
        </p>

        {/* Stats */}
        {impact.stats && (
          <div className="flex flex-wrap gap-8 mb-6">
            {impact.stats.map((stat) => (
              <div key={stat.label}>
                <div
                  className={`text-3xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {stat.value}
                </div>
                <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {impact.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full border text-sm ${
                isDark
                  ? "border-gray-700 text-gray-300"
                  : "border-gray-200 text-gray-600"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className={`mt-8 font-medium group-hover:translate-x-2 transition-transform ${
            isDark ? "text-amber-400" : "text-amber-500"
          }`}
        >
          Découvrir l'initiative →
        </div>
      </div>
    </article>
  );
}