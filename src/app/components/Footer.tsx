import { motion } from "framer-motion";
import { Facebook } from "lucide-react";
import Image from "next/image";
// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const quickLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#evenements", label: "Événements" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#galerie", label: "Galerie" },
  { href: "#offrandes", label: "Offrandes" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/rccgpd", label: "Facebook" },
  { icon: TikTokIcon, href: "https://tiktok.com/@rccg.presencedivine.togo", label: "TikTok" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#1f1351] text-white py-10 sm:py-16 lg:px-30">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Church Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#3e27a1] flex items-center justify-center">
                <Image
                  src="/rccg-logo.png"
                  alt="Logo de l'église chrétienne rachetée de Dieu"
                  width={100}
                  height={40}
                />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-background">
                  ECRD Présence Divine
                </h3>
                <p className="text-sm text-background/60">Lomé, Togo</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Eglise Chrétienne Rachetée de Dieu - Une église où la présence
              divine transforme les vies et où chacun est le bienvenu.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-[#3e27a1] hover:text-[#3e27a1]-foreground transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-background mb-4">
              Liens Rapides
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="font-display text-lg font-semibold text-background mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-background/70">
              <p>Agbalépédo en face du supermarché champion, Lomé, Togo</p>
              <p>+228 90 23 25 31</p>
              <p>contact@rccgdivinepresence.tg</p>
            </div>
            <div className="mt-4 p-4 bg-background/5 rounded-xl">
              <p className="text-sm font-medium text-background mb-1">
                Culte du Dimanche
              </p>
              <p className="text-accent text-sm">09h00 - 11h00</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-background/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>
            © {new Date().getFullYear()} RCCG Divine Presence. Tous droits
            réservés.
          </p>
          <motion.p
            className="flex items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            By{" "}
            <a
              href="https://www.wpvillage.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-[#e8ba30] transition-colors"
            >
              Wpvillage
            </a>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
