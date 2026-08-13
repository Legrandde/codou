import {
  MdDeveloperBoard,
  MdSchool,
  MdPeople,
  MdComputer,
  MdVolunteerActivism,
} from "react-icons/md";
import { useTheme } from "../contexts/ThemeContext";

interface CarteProps {
  title: string;
  description: string;
}

// Mapping des icônes selon le titre (adapté aux engagements)
const icons: Record<string, React.ReactNode> = {
  Éducation: <MdSchool size={32} />,
  Inclusion: <MdPeople size={32} />,
  EdTech: <MdComputer size={32} />,
  "Engagement citoyen": <MdVolunteerActivism size={32} />,
  // fallback si titre inattendu
  default: <MdDeveloperBoard size={32} />,
};

export default function Carte({ title, description }: CarteProps) {
  const { theme } = useTheme();

  const icon = icons[title] || icons.default;

  return (
    <div
      className={`group flex flex-col p-6 rounded-2xl transition-all duration-300 
        hover:-translate-y-2 hover:shadow-xl 
        ${
          theme === "dark"
            ? "bg-gray-700/50 border border-gray-600/50 hover:border-amber-400/80 hover:shadow-amber-500/10"
            : "bg-white border border-gray-200 hover:border-amber-400 hover:shadow-amber-200/50"
        }`}
    >
      {/* Cercle icône avec dégradé et animation */}
      <div
        className={`inline-flex p-3 rounded-full w-fit mb-4 transition-all duration-300 
          ${
            theme === "dark"
              ? "bg-gradient-to-br from-amber-500/20 to-amber-600/10 group-hover:from-amber-400/30"
              : "bg-gradient-to-br from-amber-100 to-orange-50 group-hover:from-amber-200"
          }`}
      >
        <div className="text-amber-500 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>

      <h3
        className={`text-xl font-bold mb-2 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h3>

      <p
        className={`text-sm leading-relaxed ${
          theme === "dark" ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}