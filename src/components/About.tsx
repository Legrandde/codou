import { FaPhone } from "react-icons/fa6";
import { useTheme } from "../contexts/ThemeContext";

export default function About() {
  const { theme } = useTheme();

  return (
    <section
      id="apropos"
      className={`py-20 px-4 m-auto max-w-6xl ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-shrink-0">
          <img
            src="codou/About6.jpeg"
            alt="Codou Aïcha Faye"
            className="w-80 hidden md:block h-80 rounded object-cover"
          />
        </div>

        <div className="flex flex-col gap-6 flex-1">
          <div>
            <span className="text-sm font-semibold text-amber-500 uppercase tracking-wide">
              À propos
            </span>
            <h2
              className={`font-serif italic text-3xl md:text-5xl font-medium mt-2 mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Une femme de convictions et d'engagement
            </h2>
          </div>

          <p
            className={`text-lg leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            je me  définis avant tout par les causes je
            choisis de défendre : la cause des femmes, l'éducation, la
            santé, la protection de l'enfance et la défense des personnes
            les plus vulnérables.
          </p>
          <p
            className={`text-lg leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Mon engagement ne s'arrête pas aux fonctions que  j'exerce. Il
            se prolonge dans ses prises de parole, ses écrits et les
            combats que je choisis de porter lorsqu'une injustice ou une
            situation de vulnérabilité ne peut être passée sous silence.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 w-fit rounded bg-amber-500 hover:bg-amber-600 text-white font-medium transition-colors"
          >
            <FaPhone /> Prendre contact
          </a>
        </div>
      </div>
    </section>
  );
}