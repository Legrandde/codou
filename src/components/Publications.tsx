import { ArrowUpRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { FaFacebook } from "react-icons/fa6";

interface Publication {
  id: string;
  title: string;
  network: "facebook";
  url: string;
}

const publications: Publication[] = [
  {
    id: "1",
    title: "Journée internationale des droits des femmes",
    network: "facebook",
    url: "https://www.facebook.com/share/19Xuhfjgj4/",
  },
  {
    id: "2",
    title: "Tàggat Ma  retour sur les daaras partenaires",
    network: "facebook",
    url: "https://www.facebook.com/share/1EmWCVKdsc/",
  },
  {
    id: "3",
    title: "Écoles au Sénégal, 8 000 ressources pédagogiques",
    network: "facebook",
    url: "https://www.facebook.com/share/1GGwfNRwDT/",
  },
  {
    id: "4",
    title: "Cohorte 3  Mastercard Foundation EdTech Fellowship",
    network: "facebook",
    url: "https://www.facebook.com/share/1GCvd7uJsd/",
  },
];

const networkIcon = {
  facebook: FaFacebook,
};

export default function Publications() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-24 px-4 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
      id="publications"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-amber-500 uppercase tracking-wide">
            Publications
          </span>
          <h2
            className={`font-serif text-4xl md:text-5xl mt-2 mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Mes prises de parole
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Une sélection de publications partagées sur les réseaux  pour
            informer, alerter et interpeller.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {publications.map((pub) => {
            const NetworkIcon = networkIcon[pub.network];
            return (
              <a
                key={pub.id}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-lg overflow-hidden border transition-colors ${
                  theme === "dark"
                    ? "bg-gray-800/40 border-gray-700 hover:border-amber-500/50"
                    : "bg-gray-50 border-gray-200 hover:border-amber-300"
                }`}
              >
                {/* Bannière en dégradé */}
                <div
                  className={`relative aspect-video overflow-hidden flex items-center justify-center ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-amber-500/25 via-gray-800 to-gray-900"
                      : "bg-gradient-to-br from-amber-100 via-amber-50 to-white"
                  }`}
                >
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        theme === "dark"
                          ? "radial-gradient(circle at 25% 25%, rgba(245,158,11,0.25), transparent 55%)"
                          : "radial-gradient(circle at 25% 25%, rgba(245,158,11,0.35), transparent 55%)",
                    }}
                  />
                  <NetworkIcon
                    className={`relative transition-transform duration-300 group-hover:scale-110 ${
                      theme === "dark" ? "text-amber-500/70" : "text-amber-500/60"
                    }`}
                    size={44}
                  />
                </div>

                {/* Titre + lien */}
                <div className="p-5 flex items-center justify-between gap-3">
                  <h3
                    className={`text-sm font-medium leading-snug ${
                      theme === "dark" ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    {pub.title}
                  </h3>
                  <ArrowUpRight
                    className="text-amber-500 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    size={18}
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}