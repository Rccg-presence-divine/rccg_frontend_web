import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Placeholder images - in a real app these would be actual church photos
const galleryItems = [
  {
    id: 1,
    type: "image" as const,
    title: "Culte du dimanche",
    description: "Moments de louange et d'adoration",
    placeholder: "Culte",
    image: "/rccg-logo.png"
  },
  {
    id: 2,
    type: "image" as const,
    title: "Baptêmes",
    description: "Célébration des nouveaux convertis",
    placeholder: "Baptême",
    image: "/rccg-logo.png"
  },
  {
    id: 3,
    type: "image" as const,
    title: "Chorale",
    description: "Notre chorale en action",
    placeholder: "Chorale",
    image: "/rccg-logo.png"
  },
  {
    id: 4,
    type: "image" as const,
    title: "École du dimanche",
    description: "Enseignement des enfants",
    placeholder: "Enfants",
    image: "/rccg-logo.png"
  },
  {
    id: 5,
    type: "image" as const,
    title: "Convention 2024",
    description: "Grande convention annuelle",
    placeholder: "Convention",
    image: "/rccg-logo.png"
  },
  {
    id: 6,
    type: "image" as const,
    title: "Action sociale",
    description: "Aide aux familles nécessiteuses",
    placeholder: "Social",
    image: "/rccg-logo.png"
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? galleryItems.length - 1 : selectedIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === galleryItems.length - 1 ? 0 : selectedIndex + 1
      );
    }
  };

  return (
    <section id="galerie" className="py-12 sm:py-24 bg-background lg:px-30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-accent font-medium tracking-widest text-sm mb-3">
            GALERIE
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Moments Précieux
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Revivez les moments forts de notre communauté à travers ces images
            qui témoignent de la joie et de l&apos;amour partagés.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              onClick={() => openLightbox(index)}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
            >
              {/* Placeholder background */}
              <div className="absolute inset-0 bg-linear-to-br from-celestial-blue/20 to-[#3e27a1]/30 flex items-center justify-center">
                <div className="text-center">
                  <Image className="w-10 h-10 text-[#3e27a1]/40 mx-auto mb-2" src={item.image} alt={item.description} width={300} height={300}/>
                  <span className="text-sm text-[#3e27a1]/60 font-medium">
                    {item.placeholder}
                  </span>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                <div className="p-4 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-sm">
                    {item.title}
                  </p>
                  <p className="text-white/80 text-xs">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-2 sm:left-4 p-2 text-white/80 hover:text-white transition-colors z-10"
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 sm:right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          {/* Image */}
          <div
            className="max-w-4xl w-full mx-8 sm:mx-16 aspect-video bg-card rounded-xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center p-4">
              <Image className="w-16 h-16 sm:w-20 sm:h-20 text-muted-foreground mx-auto mb-4" src={galleryItems[selectedIndex].image}
              alt={galleryItems[selectedIndex].description}
               width={300} height={300}/>
              <p className="text-foreground font-display text-xl sm:text-2xl">
                {galleryItems[selectedIndex].title}
              </p>
              <p className="text-muted-foreground text-sm sm:text-base">
                {galleryItems[selectedIndex].description}
              </p>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {selectedIndex + 1} / {galleryItems.length}
          </div>
        </motion.div>
      )}
    </section>
  );
}
