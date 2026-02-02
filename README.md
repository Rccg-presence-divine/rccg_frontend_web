# RCCG Présence Divine - Site Web

Site web officiel de l'église RCCG (Redeemed Christian Church of God) Présence Divine, située à Lomé, Togo.

## Aperçu

Ce projet est une application web moderne construite avec Next.js 15 et React 19, offrant une expérience utilisateur fluide et responsive pour présenter l'église, ses activités et faciliter l'engagement communautaire.

## Technologies

- **Framework**: Next.js 15.4
- **UI**: React 19
- **Langage**: TypeScript 5
- **Styles**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icônes**: Lucide React
- **Composants UI**: Radix UI
- **Notifications**: Sonner

## Fonctionnalités

- **Navigation responsive** avec menu mobile animé
- **Section Hero** avec animations et citation biblique
- **À propos** - Histoire, vision et horaires des cultes
- **Événements** - Calendrier interactif et liste des événements à venir
- **Témoignages** - Témoignages des membres de l'église
- **Offrandes** - Informations de paiement mobile (Flooz, T-Money)
- **Contact** - Formulaire de contact avec carte Google Maps intégrée
- **Galerie** - Galerie photos avec visionneuse lightbox
- **Animations** - Effets visuels au scroll (colombe, rayons lumineux)

## Structure du projet

```
src/
├── app/
│   ├── components/          # Composants de la page
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── About.tsx
│   │   ├── Events.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Offerings.tsx
│   │   ├── Contact.tsx
│   │   ├── Gallery.tsx
│   │   ├── DoveAnimation.tsx
│   │   └── Footer.tsx
│   ├── page.tsx             # Page principale
│   ├── layout.tsx           # Layout racine
│   └── globals.css          # Styles globaux
├── components/ui/           # Composants UI réutilisables
└── lib/
    └── utils.ts             # Fonctions utilitaires
```

## Installation

### Prérequis

- Node.js 18.x ou supérieur
- npm, yarn ou pnpm

### Étapes

1. Cloner le dépôt
```bash
git clone <url-du-repo>
cd rccg_frontend_web
```

2. Installer les dépendances
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Lancer le serveur de développement
```bash
npm run dev
```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Compile l'application pour la production |
| `npm run start` | Lance le serveur de production |
| `npm run lint` | Vérifie le code avec ESLint |

## Informations de l'église

- **Adresse**: Agbalépédo en face du supermarché Champion, Lomé, Togo
- **Téléphone**: +228 90 23 25 31
- **Email**: contact@rccgdivinepresence.tg
- **Culte dominical**: Dimanche 09h00 - 11h00
- **Étude biblique**: Mardi 18h00 - 19h30

## Contribution

1. Forker le projet
2. Créer une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commiter les modifications (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Pousser la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## Licence

Ce projet est privé et appartient à RCCG Présence Divine.

---

Développé par [Wpvillage](https://wpvillage.com)