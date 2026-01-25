import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar } from "./calendar";
import { Badge } from "./badge";
import { CalendarDays, MapPin, Clock, ChevronRight } from "lucide-react";
import { format, isSameDay } from "date-fns";
import { fr } from "date-fns/locale";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

interface Event {
  id: number;
  title: string;
  date: Date;
  time: string;
  location: string;
  description: string;
  type: "culte" | "conference" | "priere";
}

const events: Event[] = [
  {
    id: 1,
    title: "Convention Annuelle",
    date: new Date(2026, 1, 15),
    time: "09h00 - 18h00",
    location: "Église RCCG Divine Presence",
    description: "Grande convention annuelle avec des invités spéciaux. Venez vivre une expérience spirituelle transformatrice.",
    type: "conference",
  },
  {
    id: 2,
    title: "Nuit de Louange",
    date: new Date(2026, 1, 20),
    time: "21h00 - 05h00",
    location: "Église RCCG Divine Presence",
    description: "Une nuit entière dédiée à la louange et à l'adoration. Venez célébrer la gloire de Dieu.",
    type: "priere",
  },
  {
    id: 3,
    title: "Camp des Jeunes",
    date: new Date(2026, 1, 25),
    time: "08h00 - 18h00",
    location: "Centre de retraite",
    description: "Un week-end de retraite spirituelle pour les jeunes de l'église. Enseignements, jeux et communion fraternelle.",
    type: "conference",
  },
  {
    id: 4,
    title: "Culte Spécial de Pâques",
    date: new Date(2026, 3, 5),
    time: "09h00 - 13h00",
    location: "Église RCCG Divine Presence",
    description: "Célébration de la résurrection de notre Seigneur Jésus-Christ avec un culte spécial.",
    type: "culte",
  },
  {
    id: 5,
    title: "Séminaire pour les Couples",
    date: new Date(2026, 2, 14),
    time: "14h00 - 18h00",
    location: "Église RCCG Divine Presence",
    description: "Un séminaire enrichissant pour fortifier les mariages et les relations.",
    type: "conference",
  },
];

const announcements = [
  {
    id: 1,
    title: "Inscriptions École du Dimanche",
    description: "Les inscriptions pour la nouvelle année de l'école du dimanche des enfants sont ouvertes.",
    urgent: true,
  },
  {
    id: 2,
    title: "Chorale - Nouveaux membres",
    description: "La chorale recrute de nouvelles voix. Contactez le responsable après le culte du dimanche.",
    urgent: false,
  },
  {
    id: 3,
    title: "Action sociale",
    description: "Collecte de vêtements et denrées alimentaires pour les familles nécessiteuses. Apportez vos dons au secrétariat.",
    urgent: false,
  },
];

const typeColors = {
  culte: "bg-[#3e27a1] text-[#3e27a1]-foreground",
  conference: "bg-accent text-accent-foreground",
  jeunesse: "bg-celestial-blue text-white",
  priere: "bg-divine-gold text-foreground",
};

const typeLabels = {
  culte: "Culte",
  conference: "Conférence",
  jeunesse: "Jeunesse",
  priere: "Prière",
};

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const eventDates = events.map((e) => e.date);
  const selectedEvents = selectedDate
    ? events.filter((e) => isSameDay(e.date, selectedDate))
    : [];

  return (
    <section id="evenements" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-widest text-sm mb-3">
            CALENDRIER
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Événements & Annonces
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="shadow-divine">
              <CardHeader>
                <CardTitle className="font-display flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-[#3e27a1]" />
                  Calendrier
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  locale={fr}
                  className="rounded-md"
                  modifiers={{
                    hasEvent: eventDates,
                  }}
                  modifiersStyles={{
                    hasEvent: {
                      backgroundColor: "hsl(var(--accent))",
                      color: "hsl(var(--accent-foreground))",
                      fontWeight: "bold",
                    },
                  }}
                />
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-accent" />
                    Jours avec événements
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Announcements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6"
            >
              <Card className="shadow-divine">
                <CardHeader>
                  <CardTitle className="font-display">Annonces</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {announcements.map((announcement) => (
                    <div
                      key={announcement.id}
                      className="p-3 rounded-lg bg-secondary/50 border border-border"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-medium text-foreground text-sm">
                          {announcement.title}
                        </h4>
                        {announcement.urgent && (
                          <Badge variant="destructive" className="text-xs">
                            Urgent
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {announcement.description}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Events List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            {selectedEvents.length > 0 ? (
              <div className="mb-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Événements du{" "}
                  {selectedDate && format(selectedDate, "d MMMM yyyy", { locale: fr })}
                </h3>
                <div className="space-y-4">
                  {selectedEvents.map((event) => (
                    <Card key={event.id} className="shadow-divine">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <Badge className={typeColors[event.type]}>
                              {typeLabels[event.type]}
                            </Badge>
                            <h4 className="font-display text-xl font-semibold text-foreground mt-2">
                              {event.title}
                            </h4>
                            <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {event.time}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {event.location}
                              </span>
                            </div>
                            <p className="text-muted-foreground mt-3">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : selectedDate ? (
              <div className="mb-8 p-8 text-center bg-secondary/30 rounded-2xl">
                <CalendarDays className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Aucun événement prévu pour le{" "}
                  {format(selectedDate, "d MMMM yyyy", { locale: fr })}
                </p>
              </div>
            ) : null}

            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Prochains Événements
            </h3>
            <div className="space-y-4">
              {events
                .sort((a, b) => a.date.getTime() - b.date.getTime())
                .slice(0, 4)
                .map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <Card className="shadow-divine hover:shadow-lg transition-shadow cursor-pointer group">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-4">
                          <div className="shrink-0 w-16 h-16 rounded-xl bg-[#3e27a1]/10 flex flex-col items-center justify-center">
                            <span className="text-2xl font-bold text-[#3e27a1]">
                              {format(event.date, "d")}
                            </span>
                            <span className="text-xs text-muted-foreground uppercase">
                              {format(event.date, "MMM", { locale: fr })}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge
                                variant="secondary"
                                className={typeColors[event.type]}
                              >
                                {typeLabels[event.type]}
                              </Badge>
                            </div>
                            <h4 className="font-semibold text-foreground truncate">
                              {event.title}
                            </h4>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {event.time}
                            </p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-[#3e27a1] transition-colors" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
