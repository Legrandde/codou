import { useTheme } from "../contexts/ThemeContext";

export default function ConvictionSection() {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <section
      id="conviction"
      className={`w-full py-16 md:py-20 px-6 md:px-12 ${
        isDark ? "bg-gray-950" : "bg-[#f7f5f0]"
      }`}
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-16 items-center">

          {/* ─────────────────────────────
              TEXTE
          ───────────────────────────── */}
          <div className="max-w-2xl">

            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-amber-500" />

              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-amber-500">
                Sa conviction
              </span>
            </div>

            {/* Titre */}
            <h2
              className={`font-serif italic semibold text-5xl md:text-6xl lg:text-7xl leading-[0.92] tracking-tight ${
                isDark ? "text-white" : "text-gray-950"
              }`}
            >
              L'humain
              <br />

              <span className="italic font-normal">
                au centre.
              </span>
            </h2>

            {/* Séparateur */}
            <div
              className={`w-16 h-px my-7 ${
                isDark ? "bg-white/20" : "bg-black/15"
              }`}
            />

            {/* Description */}
            <p
              className={`text-base md:text-lg leading-relaxed max-w-xl ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Faire de l'éducation, du numérique et de
              l'engagement citoyen des leviers de
              transformation sociale.
            </p>

            {/* Valeurs */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-7">
              {[
                "Former.",
                "Transmettre.",
                "Défendre.",
                "Inclure.",
              ].map((value) => (
                <span
                  key={value}
                  className={`text-xs md:text-sm uppercase tracking-[0.15em] font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {value}
                </span>
              ))}
            </div>

            {/* Signature */}
            <div className="mt-8">
              <p
                className={`font-serif italic text-lg ${
                  isDark ? "text-gray-300" : "text-gray-800"
                }`}
              >
                Codou Aïcha Faye
              </p>
            </div>
          </div>

         
          <div className="relative">

            {/* Petit élément décoratif */}
            <div
              className="absolute -top-4 -right-4 w-20 h-20 border-t border-r border-amber-500/40"
            />

            <div className="relative overflow-hidden aspect-[4/5] max-h-[440px]">
              <img
                src="codou/about7.jpeg"
                alt="Codou Aïcha Faye"
                className="w-full h-full rounded-xl object-cover object-center"
              />
            </div>            
          </div>

        </div>
      </div>
    </section>
  );
}