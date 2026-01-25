import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marie Akouavi",
    role: "Membre depuis 2018",
    content:
      "Cette église a transformé ma vie. J'ai trouvé une véritable famille spirituelle et une communauté qui m'a soutenue dans les moments difficiles. La présence de Dieu est palpable à chaque culte.",
    image: null,
  },
  {
    id: 2,
    name: "Kofi Mensah",
    role: "Membre depuis 2020",
    content:
      "Après des années d'errance spirituelle, j'ai enfin trouvé ma maison à RCCG Divine Presence. Les enseignements sont profonds et l'amour des frères et sœurs est sincère.",
    image: null,
  },
  {
    id: 3,
    name: "Abla Sossou",
    role: "Membre depuis 2019",
    content:
      "Dieu a fait des merveilles dans ma vie à travers cette église. J'ai été guérie d'une maladie que les médecins déclaraient incurable. Gloire à Dieu pour sa puissance!",
    image: null,
  },
  {
    id: 4,
    name: "Emmanuel Kodjo",
    role: "Membre depuis 2017",
    content:
      "L'encadrement pastoral est exceptionnel. On ne se sent jamais seul dans les épreuves. Cette église vit véritablement les enseignements de Christ.",
    image: null,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="temoignages" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-widest text-sm mb-3">
            TÉMOIGNAGES
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Vies Transformées
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez les témoignages de nos frères et sœurs qui ont expérimenté
            la puissance de Dieu dans leur vie.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-divine relative overflow-hidden group hover:shadow-lg transition-shadow"
            >
              {/* Quote icon background */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-20 h-20 text-[#3e27a1]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 leading-relaxed mb-6 relative z-10">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#3e27a1]/10 flex items-center justify-center">
                  <span className="text-lg font-display font-bold text-[#3e27a1]">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Vous avez un témoignage à partager?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3e27a1] text-[#3e27a1]-foreground rounded-full font-medium hover:bg-[#3e27a1]/90 transition-colors"
          >
            Partagez votre témoignage
          </a>
        </motion.div>
      </div>
    </section>
  );
}
