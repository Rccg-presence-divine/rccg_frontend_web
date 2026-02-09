import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Calendar, Heart, BookOpen, Star } from "lucide-react";

const schedules = [
  {
    day: "Dimanche",
    time: "09h00 - 11h00",
    event: "Culte d'adoration",
    icon: Heart,
  },
  {
    day: "Mardi",
    time: "18h00 - 19h30",
    event: "Étude biblique",
    icon: BookOpen,
  },
  // { day: "Vendredi", time: "18h00 - 20h00", event: "Veillée de prière", icon: Star },
  // { day: "Samedi", time: "16h00 - 18h00", event: "Réunion de jeunes", icon: Users },
];

const beliefs = [
  {
    title: "La Bible",
    description: "Toute l'Écriture, Ancien et Nouveau Testament, est inspirée par le Saint-Esprit.",
  },
  {
    title: "Dieu",
    description: "Nous croyons en un seul Dieu Créateur de toutes les créatures visibles et invisibles, qui seul existe éternellement.",
  },
  {
    title: "Jésus-Christ",
    description: "Fils de Dieu et Sauveur, Dieu manifesté dans la chair, qui a apporté la rédemption par sa mort et sa résurrection.",
  },
  {
    title: "Le Saint-Esprit",
    description: "Troisième personne de la Trinité, de puissance et de gloire égales, qui accomplit l'œuvre de régénération et de sanctification.",
  },
  {
    title: "La Trinité",
    description: "Dieu le Père, le Fils et le Saint-Esprit sont un seul Dieu en trois personnes.",
  },
  {
    title: "La Repentance",
    description: "Une tristesse selon Dieu pour les péchés commis, avec l'engagement de s'en abstenir.",
  },
  {
    title: "La Nouvelle Naissance",
    description: "La purification des péchés par la grâce de Dieu, au moyen de la foi dans le sang de Christ.",
  },
  {
    title: "La Sanctification",
    description: "Purification spirituelle progressive après la justification, par la foi en Jésus.",
  },
  {
    title: "Le Baptême d'Eau",
    description: "Baptême par immersion au nom du Père, du Fils et du Saint-Esprit, signe extérieur de repentance.",
  },
  {
    title: "Le Baptême du Saint-Esprit",
    description: "Tout croyant devrait rechercher le Saint-Esprit ; le parler en langues accompagne cette expérience.",
  },
  {
    title: "La Prière",
    description: "Pratique spirituelle essentielle, faite au nom de Jésus avec foi.",
  },
  {
    title: "La Guérison Divine",
    description: "La guérison sans médicaments est biblique, obtenue par la prière, l'imposition des mains ou l'onction.",
  },
  {
    title: "La Sainte Cène",
    description: "Pratique régulière commémorant la mort de Christ jusqu'à son retour.",
  },
  {
    title: "La Résurrection",
    description: "Les corps seront ressuscités ; seules les personnes saintes connaîtront une résurrection bienheureuse.",
  },
  {
    title: "Le Retour de Christ",
    description: "Retour physique et visible en deux étapes : l'enlèvement des saints, puis le jugement sur la terre.",
  },
  {
    title: "La Vie Éternelle",
    description: "Récompense éternelle pour les croyants ; châtiment éternel pour les méchants.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apropos" className="py-12 sm:py-24 bg-secondary/30 lg:px-30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-[#e8ba30] font-medium tracking-widest text-sm mb-3">
            À PROPOS
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Notre Église
          </h2>
          <div className="w-20 h-1 bg-[#e8ba30] mx-auto rounded-full" />
        </motion.div>

        {/* History & Vision */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-5 sm:p-8 shadow-divine"
          >
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
              <span className="w-10 h-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </span>
              Notre Histoire
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              RCCG Divine Presence est une paroisse de la Redeemed Christian
              Church of God, une église pentecôtiste fondée au Nigeria en 1952.
              Notre paroisse à Lomé, Togo, a été établie pour servir la
              communauté locale et répandre l&apos;amour du Christ.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Présence Divine est une paroisse de l&apos;église chrétienne rachetée de Dieu(ECRD)
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-2xl p-5 sm:p-8 shadow-divine"
          >
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
              <span className="w-10 h-10 shrink-0 rounded-full bg-accent/20 flex items-center justify-center">
                <Star className="w-5 h-5 text-accent" />
              </span>
              Notre Vision
            </h3>
            <ol className="list-decimal list-outside pl-5 space-y-2">
              <li className="text-muted-foreground leading-relaxed">Aller au Ciel</li>
              <li className="text-muted-foreground leading-relaxed">Amener autant de personnes avec nous</li>
              <li className="text-muted-foreground leading-relaxed">Avoir un membre de l&apos;ECRD dans chaque famille dans toutes les nations</li>
              <li className="text-muted-foreground leading-relaxed">Pour réaliser les points 2 et 3 ci-dessus, nous implanterons des églises à cinq minutes de marche dans chaque ville des pays en développement et à cinq minutes en voiture dans chaque ville des pays développés.</li>
              <li className="text-muted-foreground leading-relaxed">Nous poursuivrons ces objectifs jusqu&apos;à ce que chaque nation du monde soit amenée à la cause du Seigneur Jésus-Christ.</li>
            </ol>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 sm:mb-20"
        >
          <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-8">
            Nos Valeurs
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {beliefs.map((belief, index) => (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-card rounded-xl p-4 sm:p-6 text-center shadow-divine hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-[#3e27a1]/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-[#3e27a1]" />
                </div>
                <h4 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2">
                  {belief.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {belief.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground text-center mb-6 sm:mb-8 flex items-center justify-center gap-3">
            <Clock className="w-6 h-6 text-[#e8ba30]" />
            Horaires des Cultes
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 justify-center">
            {schedules.map((schedule, index) => (
              <motion.div
                key={schedule.day}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="bg-card rounded-xl p-4 sm:p-6 border border-border hover:border-[#3e27a1]/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#3e27a1]/20 flex items-center justify-center">
                    <schedule.icon className="w-4 h-4 text-[#3e27a1]" />
                  </span>
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                </div>
                <p className="font-semibold text-foreground">{schedule.day}</p>
                <p className="text-sm text-[#3e27a1] font-medium">
                  {schedule.time}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {schedule.event}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
