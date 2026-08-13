import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { useTheme } from "../contexts/ThemeContext";
import type { Variants } from "framer-motion";

export default function Banner() {
  const { theme } = useTheme();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="accueil"
      className="relative w-full min-h-[90vh] overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Photo plein cadre en arrière-plan */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage: "url('codou/codouBanner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Voile dégradé pour la lisibilité du texte, plus dense à gauche */}
      <div
        className="absolute inset-0"
        style={{
          background:
            theme === "dark"
              ? "linear-gradient(90deg, rgba(17,24,39,0.88) 0%, rgba(17,24,39,0.55) 42%, rgba(17,24,39,0.15) 65%, rgba(17,24,39,0) 85%)"
              : "linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.32) 42%, rgba(0,0,0,0.08) 65%, rgba(0,0,0,0) 85%)",
        }}
      />

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col justify-center min-h-[90vh] px-6 md:px-12 max-w-2xl">
        <motion.h1
          variants={itemVariants}
          className="font-serif italic text-4xl md:text-6xl leading-[1.1] text-white"
        >
          Mettre le numérique
          <br />
          au service du savoir
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-md text-white/85 text-base md:text-lg leading-relaxed"
        >
          Éducation, inclusion, droits des femmes. je porte porte
          une vision : rapprocher le savoir de chaque élève, chaque
          enseignant, chaque famille, partout au Sénégal.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-medium transition-colors"
          >
            Prendre contact
          </a>
          <a
            href="#parcours"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/60 text-white hover:bg-white/10 font-medium transition-colors"
          >
            <HiOutlineAcademicCap />
            Découvrir mon parcours
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}