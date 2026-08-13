import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { useTheme } from "../../contexts/ThemeContext";
import { MapPin, Moon, Phone, Sun } from "lucide-react";

const NAV_LINKS = [
  { href: "#apropos", label: "À propos" },
  { href: "#parcours", label: "Parcours" },
  { href: "#engagements", label: "Engagements" },
  { href: "#impact", label: "Impact" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuDisplay, setMenuDisplay] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="font-serif italic flex p-4 w-full items-center justify-around max-w-7xl mx-auto">
        <h1
          className={`text-xl ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          <span className="font-bold text-amber-500">Codou</span> Aïcha Faye
        </h1>

        <div className="flex items-center justify-center gap-2 md:gap-12">
          <div
            className={`md:flex hidden items-center justify-center gap-1 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <MapPin className="text-amber-500" size={18} />
            Dakar
          </div>
          <div
            className={`md:flex hidden items-center justify-center gap-1 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <Phone className="text-amber-500" size={18} />
            +221 77 629 11 86
          </div>

          <a
            href="#contact"
            className={`p-2 px-4 hover:cursor-pointer hover:bg-amber-500 hover:text-white border border-amber-500 rounded transition-colors ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-900"
            }`}
          >
            Contact
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600 text-yellow-400"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
            aria-label="Changer de thème"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            aria-label={menuDisplay ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuDisplay(!menuDisplay)}
            className="md:hidden"
          >
            {menuDisplay ? (
              <BiX
                size={30}
                className={theme === "dark" ? "text-white" : "text-gray-900"}
              />
            ) : (
              <BiMenu
                size={30}
                className={theme === "dark" ? "text-white" : "text-gray-900"}
              />
            )}
          </button>
        </div>
      </div>

      <nav
        className={`${
          menuDisplay ? "flex flex-col" : "hidden"
        } md:flex md:flex-row md:flex-wrap p-4 items-center justify-center gap-x-8 gap-y-2 md:w-[90%] lg:w-[75%] m-auto`}
      >
        <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4 md:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuDisplay(false)}
              className={`whitespace-nowrap hover:text-amber-500 transition-colors ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}