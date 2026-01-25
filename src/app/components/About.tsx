import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Calendar, Heart, Users, BookOpen, Star } from "lucide-react";

const schedules = [
  { day: "Dimanche", time: "09h00 - 11h00", event: "Culte d'adoration", icon: Heart },
  { day: "Mardi", time: "18h00 - 19h30", event: "Étude biblique", icon: BookOpen },
  // { day: "Vendredi", time: "18h00 - 20h00", event: "Veillée de prière", icon: Star },
  // { day: "Samedi", time: "16h00 - 18h00", event: "Réunion de jeunes", icon: Users },
];

const values = [
  { title: "Foi", description: "Croire en la puissance de Dieu pour transformer les vies" },
  { title: "Amour", description: "Aimer Dieu et aimer son prochain comme soi-même" },
  { title: "Service", description: "Servir la communauté avec humilité et dévouement" },
  { title: "Unité", description: "Vivre en harmonie comme une seule famille en Christ" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apropos" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-widest text-sm mb-3">À PROPOS</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Notre Église
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        {/* History & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 shadow-divine"
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </span>
              Notre Histoire
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              RCCG Divine Presence est une paroisse de la Redeemed Christian Church of God, 
              une église pentecôtiste fondée au Nigeria en 1952. Notre paroisse à Lomé, Togo, 
              a été établie pour servir la communauté locale et répandre l&apos;amour du Christ.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Depuis notre fondation, nous avons accueilli des centaines de fidèles venus 
              chercher la présence divine et la transformation spirituelle. Notre communauté 
              grandit chaque jour dans la foi et l&apos;amour fraternel.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-2xl p-8 shadow-divine"
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <Star className="w-5 h-5 text-accent" />
              </span>
              Notre Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Notre vision est de planter des églises à portée de tous, de gagner des âmes 
              pour Christ, et de faire de chaque membre un chrétien mature et accompli.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nous croyons en la puissance de la prière, l&apos;étude de la Parole de Dieu, 
              et le service désintéressé. Notre mission est de créer un environnement 
              où chacun peut expérimenter la présence divine et grandir spirituellement.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-8">
            Nos Valeurs
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-card rounded-xl p-6 text-center shadow-divine hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
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
          <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-8 flex items-center justify-center gap-3">
            <Clock className="w-6 h-6 text-accent" />
            Horaires des Cultes
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {schedules.map((schedule, index) => (
              <motion.div
                key={schedule.day}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <schedule.icon className="w-4 h-4 text-blue-500" />
                  </span>
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                </div>
                <p className="font-semibold text-foreground">{schedule.day}</p>
                <p className="text-sm text-primary font-medium">{schedule.time}</p>
                <p className="text-sm text-muted-foreground mt-1">{schedule.event}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
