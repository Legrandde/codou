import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "codouaicha.faye@ecolesausenegal.org",
    href: "mailto:codouaicha.faye@ecolesausenegal.org",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+221 77 629 11 86",
    href: "tel:+221776291186",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Dakar, Sénégal",
    href: undefined,
  },
];

const socials = [
  { icon: FaLinkedin, label: "LinkedIn", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: Globe, label: "Écoles au Sénégal", href: "#" },
];

export default function Contact() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-24 px-4 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
      id="contact"
    >
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-sm font-semibold text-amber-500 uppercase tracking-wide">
          Contact
        </span>
        <h2
          className={`font-serif italic text-4xl md:text-5xl mt-2 mb-5 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Restons en lien
        </h2>
        <p
          className={`text-lg max-w-xl mx-auto mb-14 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Une question, une collaboration, une invitation à échanger — le
          plus simple est encore d'écrire ou d'appeler directement.
        </p>

        {/* Moyens de contact directs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            const content = (
              <div
                className={`h-full p-6 rounded-lg border transition-colors ${
                  theme === "dark"
                    ? "bg-gray-800/50 border-gray-700 hover:border-amber-500/50"
                    : "bg-gray-50 border-gray-200 hover:border-amber-300"
                }`}
              >
                <Icon className="text-amber-500 mx-auto mb-3" size={22} strokeWidth={1.5} />
                <span
                  className={`block text-xs uppercase tracking-wide mb-1 ${
                    theme === "dark" ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  {method.label}
                </span>
                <span
                  className={`block text-sm font-medium break-words ${
                    theme === "dark" ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {method.value}
                </span>
              </div>
            );

            return method.href ? (
              <a key={method.label} href={method.href}>
                {content}
              </a>
            ) : (
              <div key={method.label}>{content}</div>
            );
          })}
        </div>

        {/* CTA principal */}
        <a
          href="mailto:codouaicha.faye@ecolesausenegal.org"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-medium transition-colors"
        >
          <Mail size={18} />
          Prendre contact
        </a>

        {/* Réseaux */}
        <div className="flex items-center justify-center gap-6 mt-12">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={`transition-colors ${
                  theme === "dark"
                    ? "text-gray-500 hover:text-amber-500"
                    : "text-gray-400 hover:text-amber-500"
                }`}
              >
                <Icon size={20} strokeWidth={1.5} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}