import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { FaFacebook, FaLocationDot } from 'react-icons/fa6';
import { PhoneCall } from 'lucide-react';

const NAV_LINKS = [
  { href: '#apropos', label: 'À propos' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#engagements', label: 'Engagements' },
  { href: '#impact', label: 'Impact' },
  { href: '#publications', label: 'Publications' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const { theme } = useTheme();

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`w-full border-t ${
      theme === 'dark' 
        ? 'bg-gray-900 text-gray-300 border-gray-800' 
        : 'bg-white text-gray-800 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="text-amber-500">Codou</span> Aïcha Faye
            </h3>
            <p className={`mb-4 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Une trajectoire au service de l'humain,
            de l'éducation et de l'inclusion.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/codoub/about?locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  theme === 'dark'
                    ? 'bg-gray-800 hover:bg-gray-700 text-white'
                    : 'bg-white hover:bg-gray-200 text-gray-800'
                }`}
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/codou-aïcha-faye-369460186"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  theme === 'dark'
                    ? 'bg-gray-800 hover:bg-gray-700 text-white'
                    : 'bg-white hover:bg-gray-200 text-gray-800'
                }`}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-xl font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Liens rapides
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`hover:text-amber-500 transition-colors ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-xl font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <PhoneCall className="text-amber-500" />
                <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  +221 77 639 11 86
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-amber-500" />
                <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  codouaicha.faye@ecolesausenegal.org
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaLocationDot className="text-amber-500" />
                <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  Dakar
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t pt-8 ${
          theme === 'dark' ? 'border-gray-800' : 'border-gray-300'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>
              © {currentYear} Codou Aïcha Faye. Tous droits réservés.
            </p>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>
              Développé avec passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}