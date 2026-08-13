import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";

import Header from "../components/ui/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Parcours from "../components/Parcours";
import Engagements from "../components/Engagement";
import ImpactSection from "../components/Impacts";
import type { ImpactItem } from "../components/ImpactModal";
import ImpactModal from "../components/ImpactModal";
import { BsWhatsapp } from "react-icons/bs";
import ConvictionSection from "../components/Convictions";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Publications from "../components/Publications";



// Données (exemple, avec des URL d’images fictives)
const impacts: ImpactItem[] = [
  {
    id: "ecoles-au-senegal",
    title: "Écoles au Sénégal",
    subtitle: "Éducation numérique",
    description:
      "Une plateforme éducative numérique qui rapproche les ressources pédagogiques des élèves, des enseignants et des familles à travers le Sénégal.",
    mainImage: "ecole-au-sn/ecole-au-sn1.jpeg",
    images: ["ecole-au-sn/EcoleAuSn2.jpeg", "ecole-au-sn/EcoleAuSn3.jpeg", "ecole-au-sn/ecoleAuSn4.jpeg", "ecole-au-sn/ecoleAuSn5.jpeg"],
    stats: [
      { value: "1,6 M", label: "abonnés" },
      { value: "8 000+", label: "ressources pédagogiques" },
    ],
    tags: ["Éducation", "EdTech", "STEM"],
    objective: "Offrir un accès équitable à l’éducation numérique.",
    role: "Conception et déploiement de la plateforme.",
    actions: [
      "Création d’une bibliothèque de ressources interactives.",
      "Formation des enseignants à l’utilisation des outils numériques.",
    ],
    beneficiaries: "Élèves du primaire et du secondaire, enseignants.",
    partners: ["Ministère de l'Éducation", "UNICEF"],
    
  },
  {
    id: "taggat-ma",
    title: "Tàggat Ma",
    subtitle: "Inclusion par les compétences",
    description:
      "Un programme qui accompagne les jeunes talibés vers la formation et l'insertion professionnelle à travers l'acquisition de compétences concrètes.",
    mainImage: "taggat/taggat1.jpeg",
    images: ["taggat/taggat2.jpeg", "taggat/taggat3.jpeg"],
    tags: ["Inclusion", "Formation", "Jeunesse", "Insertion"],
    objective: "Favoriser l’insertion socio-professionnelle des jeunes.",
    role: "Coordinateur du programme.",
    actions: [
      "Ateliers de formation aux métiers du numérique.",
      "Mise en relation avec des entreprises partenaires.",
    ],
    beneficiaries: "Jeunes de 16 à 25 ans en situation de précarité.",
    partners: ["ONU Femmes", "Orange Sénégal"],
  },
  {
    id: "eas-edtech",
    title: "EAS EdTech",
    subtitle: "Innovation éducative",
    description:
      "Une initiative qui explore le potentiel des technologies éducatives pour contribuer à transformer durablement l'accès et les méthodes d'apprentissage.",
    mainImage: "edtech/edtech.jpeg",
    images: [],
    tags: ["EdTech", "Innovation", "Éducation"],
    objective: "Expérimenter de nouvelles approches pédagogiques.",
    role: "Lead technique.",
    actions: ["Développement d’outils collaboratifs.", "Tests en classe pilotes."],
    beneficiaries: "Établissements scolaires, formateurs.",
    partners: ["Institut de Recherche en Éducation"],
  },
];

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeUpTransition: Transition = {
  duration: 0.55,
  ease: [0.16, 1, 0.3, 1],
};

export default function Portfolio() {
  const [selectedImpact, setSelectedImpact] = useState<ImpactItem | null>(null);

  const handleImpactClick = (impact: ImpactItem) => {
    setSelectedImpact(impact);
  };

  const handleCloseModal = () => {
    setSelectedImpact(null);
  };

  return (
    <div className="flex flex-col">
        <button onClick={() => window.open("https://wa.me/221776391186", "_blank")} className="bg-green-400 fixed bottom-4 right-4 p-2 rounded-2xl cursor-pointer shadow-3xl shadow-green-100 z-10"><BsWhatsapp color="white" size={30} /></button>
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Header />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <Banner />
      </motion.div>

      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={fadeUpTransition}
      >
        <About />
      </motion.div>

      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={fadeUpTransition}
      >
        <Parcours />
      </motion.div>

      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={fadeUpTransition}
      >
        <Engagements />
      </motion.div>

      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={fadeUpTransition}
      >
        <ImpactSection
          impacts={impacts}
          onImpactClick={handleImpactClick}
        />
      </motion.div>


      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={fadeUpTransition}
      >
        <ConvictionSection />
      </motion.div>
      <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={fadeUpTransition}>
        <Publications />
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
        <Contact />
      </motion.div>

       <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <Footer />
      </motion.div>

      {/* Modal */}
      <ImpactModal
        impact={selectedImpact}
        isOpen={selectedImpact !== null}
        onClose={handleCloseModal}
      />

    </div>
  );
}