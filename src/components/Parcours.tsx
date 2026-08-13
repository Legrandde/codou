import { motion, type Variants } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

interface Experience {
  id: string;
  eyebrow: string;
  period: string;
  title: string;
  company: string;
  description: string;
  image: string;
}

const experiences: Experience[] = [
  {
    id: '1',
    eyebrow: 'Les fondations',
    period: 'ESP',
    title: 'Formation scientifique',
    company: 'École Supérieure Polytechnique de Dakar',
    description:
      "Une formation scientifique qui pose les fondations d'un parcours professionnel pluriel.",
    image: 'codou/about1.jpeg',
  },
  {
    id: '2',
    eyebrow: 'Premiers pas dans l\u2019éducation',
    period: 'CACSUP',
    title: 'Chef de projet',
    company: 'Centre Africain de Complémentarité Scolaire, Universitaire et de Promotion',
    description:
      "Un jalon qui la ramènera, des années plus tard, vers l'éducation numérique.",
    image: 'codou/About2.jpeg',
  },
  {
    id: '3',
    eyebrow: 'Plus de dix années',
    period: 'Orange Sénégal',
    title: 'Collaboratrice',
    company: 'Orange Sénégal',
    description:
      "Une longue expérience au sein d'un grand groupe qui lui permet de consolider ses compétences professionnelles, son sens de l'organisation, du management et de la conduite de projets.",
    image: 'codou/About3.jpeg',
  },
  {
    id: '4',
    eyebrow: "De l'entreprise à l'action publique",
    period: 'Ministère',
    title: 'Cheffe de protocole',
    company: "Ministère du Commerce, de l'Industrie et des PME",
    description:
      "Son parcours la conduit vers l'administration publique, à la croisée du protocole et de la représentation institutionnelle.",
    image: 'codou/About4.jpeg',
  },
  {
    id: '5',
    eyebrow: 'Enseignement supérieur',
    period: 'CROUS',
    title: 'Directrice, antenne régionale de Dakar',
    company: 'Université du Sine Saloum',
    description:
      "Une responsabilité qui l'inscrit davantage encore dans les problématiques liées à la jeunesse, à l'éducation et à l'accompagnement des étudiants.",
    image: 'codou/About5.jpeg',
  },
  {
    id: '6',
    eyebrow: "Aujourd'hui",
    period: 'Écoles au Sénégal',
    title: 'Directrice',
    company: 'Écoles au Sénégal (EAS)',
    description:
      "À la tête d'une plateforme éducative numérique devenue un acteur majeur de l'accès aux ressources pédagogiques au Sénégal, avec 1,6 million d'abonnés et plus de 8 000 ressources.",
    image: 'codou/About6.jpeg',
  },
];

export default function Parcours() {
  const { theme } = useTheme();

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      className={`py-20 px-4 md:px-8 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}
      id="parcours"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-sm font-semibold text-amber-500 uppercase tracking-wide">
            Parcours
          </span>
          <h2
            className={`font-serif italic text-4xl md:text-6xl leading-tight mt-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Son parcours,
            <br />
            étape par étape
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale centrale */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
            }`}
          />

          <div className="space-y-20 md:space-y-28">
            {experiences.map((exp, index) => {
              const photoLeft = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-14 ${
                    photoLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Vignette */}
                  <div className="w-40 md:w-56 flex-shrink-0">
                    <div
                      className={`aspect-[4/5] rounded-lg overflow-hidden border ${
                        theme === 'dark'
                          ? 'bg-gray-800 border-gray-700'
                          : 'bg-white border-gray-200'
                      }`}
                    >
                      <img
                        src={exp.image}
                        alt={`${exp.title} — ${exp.company}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Texte */}
                  <div className="flex-1 text-center md:text-left">
                    <span
                      className={`block text-xs font-semibold uppercase tracking-widest mb-2 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      {exp.eyebrow}
                    </span>
                    <h3
                      className={`font-serif italic text-3xl md:text-4xl mb-3 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {exp.period}
                    </h3>
                    <p className="text-amber-500 font-semibold mb-2">
                      {exp.title} — {exp.company}
                    </p>
                    <p
                      className={
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }
                    >
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}