import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Target,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

// --- Types exportés pour être réutilisés ---
export interface ImpactStat {
  value: string;
  label: string;
}

export interface ImpactItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  mainImage: string;
  images: string[];
  stats?: ImpactStat[];
  objective?: string;
  role?: string;
  actions?: string[];
  beneficiaries?: string;
  partners?: string[];
  tags: string[];
  externalUrl?: string;
  externalLabel?: string;
}

interface ImpactModalProps {
  impact: ImpactItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImpactModal({
  impact,
  isOpen,
  onClose,
}: ImpactModalProps) {
  const { theme } = useTheme();

  if (!impact) return null;

  const isDark = theme === "dark";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="impact-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          style={{
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(8px)",
          }}
        >
          <motion.div
            key="impact-modal"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-6xl max-h-[92vh] rounded-2xl overflow-hidden shadow-2xl ${
              isDark ? "bg-gray-950 text-white" : "bg-white text-gray-900"
            }`}
          >
            {/* Bouton fermer */}
            <button
              onClick={onClose}
              aria-label="Fermer"
              className={`absolute top-5 right-5 z-20 p-2 rounded-full transition-colors ${
                isDark
                  ? "bg-black/30 text-gray-300 hover:bg-white/10 hover:text-white"
                  : "bg-white/80 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <X size={20} />
            </button>

            <div className="overflow-y-auto max-h-[92vh]">
              {/* Hero image */}
              <div className="relative h-[280px] md:h-[420px]">
                <img
                  src={impact.mainImage}
                  alt={impact.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.05))",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                  <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-amber-400 font-semibold mb-3">
                    {impact.subtitle}
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
                    {impact.title}
                  </h2>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6 md:p-10">
                {/* Intro + stats */}
                <div className="grid md:grid-cols-[1.5fr_1fr] gap-10">
                  <div>
                    <p
                      className={`text-lg leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {impact.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {impact.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                            isDark
                              ? "bg-white/5 text-gray-300 border border-white/10"
                              : "bg-gray-100 text-gray-600 border border-gray-200"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {impact.stats && impact.stats.length > 0 && (
                    <div
                      className={`grid grid-cols-2 gap-6 p-6 rounded-2xl ${
                        isDark
                          ? "bg-white/[0.03] border border-white/10"
                          : "bg-gray-50 border border-gray-100"
                      }`}
                    >
                      {impact.stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="text-3xl md:text-4xl font-bold">
                            {stat.value}
                          </p>
                          <p
                            className={`text-sm mt-1 ${
                              isDark ? "text-gray-500" : "text-gray-500"
                            }`}
                          >
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Objectif / Rôle */}
                <div className="grid md:grid-cols-2 gap-10 mt-14">
                  {impact.objective && (
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                          <Target size={18} />
                        </div>
                        <h3 className="font-semibold text-lg">L'objectif</h3>
                      </div>
                      <p
                        className={`leading-relaxed ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {impact.objective}
                      </p>
                    </div>
                  )}
                  {impact.role && (
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                          <Users size={18} />
                        </div>
                        <h3 className="font-semibold text-lg">Son rôle</h3>
                      </div>
                      <p
                        className={`leading-relaxed ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {impact.role}
                      </p>
                    </div>
                  )}
                </div>

                {/* Actions */}
                {impact.actions && impact.actions.length > 0 && (
                  <div className="mt-14">
                    <h3 className="text-xl font-semibold mb-6">
                      Actions et réalisations
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {impact.actions.map((action, index) => (
                        <div
                          key={index}
                          className={`flex gap-4 p-4 rounded-xl ${
                            isDark ? "bg-white/[0.03]" : "bg-gray-50"
                          }`}
                        >
                          <span className="text-amber-500 font-semibold">
                            0{index + 1}
                          </span>
                          <p
                            className={`text-sm leading-relaxed ${
                              isDark ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {action}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bénéficiaires / Partenaires */}
                <div className="grid md:grid-cols-2 gap-10 mt-14">
                  {impact.beneficiaries && (
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-amber-500 font-semibold mb-3">
                        Public concerné
                      </p>
                      <p
                        className={`leading-relaxed ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {impact.beneficiaries}
                      </p>
                    </div>
                  )}
                  {impact.partners && impact.partners.length > 0 && (
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-amber-500 font-semibold mb-3">
                        Partenaires
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {impact.partners.map((partner) => (
                          <span
                            key={partner}
                            className={`px-3 py-1.5 rounded-full text-sm ${
                              isDark
                                ? "bg-white/5 text-gray-300"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {partner}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Galerie */}
                {impact.images.length > 0 && (
                  <div className="mt-14">
                    <h3 className="text-xl font-semibold mb-6">En images</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {impact.images.map((image, index) => (
                        <div
                          key={index}
                          className="aspect-[4/3] rounded-xl overflow-hidden"
                        >
                          <img
                            src={image}
                            alt={`${impact.title} — image ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Lien externe */}
                {impact.externalUrl && (
                  <div
                    className={`mt-14 pt-6 border-t ${
                      isDark ? "border-white/10" : "border-gray-200"
                    }`}
                  >
                    <a
                      href={impact.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-semibold transition-colors"
                    >
                      {impact.externalLabel || "En savoir plus"}
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}