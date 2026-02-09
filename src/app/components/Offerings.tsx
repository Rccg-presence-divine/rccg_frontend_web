import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Phone, Smartphone, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const mobileMoneyNumbers = [
  {
    id: 1,
    provider: "Flooz (Moov)",
    number: "+228 96 36 02 78",
    color: "from-orange-400 to-orange-600",
  },
  {
    id: 2,
    provider: "T-Money (Togocel)",
    number: "+228 92 61 92 68",
    color: "from-green-400 to-green-600",
  },
];

// const bankInfo = {
//   bankName: "Banque Exemple",
//   accountName: "RCCG Divine Presence",
//   accountNumber: "TG00 0000 0000 0000 0000",
// };

export default function Offerings() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text.replace(/\s/g, ""));
    setCopiedId(id);
    toast.success("Numéro copié!");
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="offrandes" className="py-12 sm:py-24 bg-secondary/30 lg:px-30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-accent font-medium tracking-widest text-sm mb-3">
            OFFRANDES
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Donner avec Joie
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Scripture Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-5 sm:p-8 shadow-divine mb-8 sm:mb-12 text-center"
          >
            <Heart className="w-10 h-10 text-[#e8ba30] mx-auto mb-4" />
            <p className="font-display text-lg sm:text-xl md:text-2xl italic text-foreground/90 mb-3">
              &quot;Que chacun donne comme il l&apos;a résolu en son cœur, sans tristesse
              ni contrainte; car Dieu aime celui qui donne avec joie.&quot;
            </p>
            <p className="text-[#e8ba30] font-medium">— 2 Corinthiens 9:7</p>
          </motion.div>

          {/* Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Vos dons et offrandes contribuent à l&apos;œuvre de Dieu, au
              fonctionnement de l&apos;église, et aux actions sociales en faveur des
              plus démunis. Chaque contribution, quelle que soit sa taille, est
              précieuse et bénie.
            </p>
          </motion.div>

          {/* Mobile Money Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h3 className="font-display text-xl font-semibold text-foreground text-center mb-6 flex items-center justify-center gap-2">
              <Smartphone className="w-5 h-5 text-[#3e27a1]" />
              Mobile Money
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {mobileMoneyNumbers.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-card rounded-xl p-4 sm:p-6 shadow-divine border border-border hover:border-[#3e27a1]/30 transition-colors"
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-linear-to-br ${item.color} flex items-center justify-center mb-4`}
                  >
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {item.provider}
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-mono text-sm sm:text-lg font-semibold text-foreground break-all sm:break-normal">
                      {item.number}
                    </p>
                    <button
                      onClick={() => copyToClipboard(item.number, item.id.toString())}
                      className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                      title="Copier le numéro"
                    >
                      {copiedId === item.id.toString() ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bank Transfer
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-card rounded-xl p-6 shadow-divine"
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Virement Bancaire
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Banque</span>
                <span className="font-medium text-foreground">
                  {bankInfo.bankName}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Titulaire</span>
                <span className="font-medium text-foreground">
                  {bankInfo.accountName}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">IBAN</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm text-foreground">
                    {bankInfo.accountNumber}
                  </span>
                  <button
                    onClick={() => copyToClipboard(bankInfo.accountNumber, "bank")}
                    className="p-1.5 rounded bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    {copiedId === "bank" ? (
                      <Check className="w-3 h-3 text-green-500" />
                    ) : (
                      <Copy className="w-3 h-3 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
