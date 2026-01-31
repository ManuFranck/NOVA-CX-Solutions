export type Solution = {
  slug: string;
  title: string;
  subtitle: string;
  bullets: string[];
  channels: string[];
};

export const solutions: Solution[] = [
  {
    slug: "chatbots",
    title: "Chatbots intelligents",
    subtitle: "FAQ, rendez-vous, réclamations, commandes, feedback — 24/7.",
    bullets: [
      "FAQ & réponses instantanées",
      "Prise de rendez-vous (cliniques, écoles, services)",
      "Réclamations & suivi",
      "Suivi de commandes / demandes",
      "Collecte d’avis (CSAT) & feedback",
      "Escalade vers agent humain",
    ],
    channels: ["WhatsApp", "Web", "Messenger", "Telegram", "SMS (simple)"],
  },
  {
    slug: "cx-operations",
    title: "Customer Experience (CX)",
    subtitle: "Parcours client, canaux, historique et qualité de service.",
    bullets: [
      "Mise en place de parcours client",
      "Structuration des canaux de communication",
      "Centralisation des messages (WhatsApp/Telegram/Web)",
      "Historique client & suivi",
      "Tableaux de bord & SLA",
      "Rapports mensuels (CSAT, qualité)",
    ],
    channels: ["WhatsApp", "Web", "Email", "Ticketing", "Téléphone (option)"],
  },
  {
    slug: "hybrid-support",
    title: "Support hybride (Bot + Humain)",
    subtitle: "Automatisez ~80% et gardez l'humain pour les cas complexes.",
    bullets: [
      "Bot pour la majorité des demandes",
      "Agents humains pour cas complexes",
      "Supervision & amélioration continue",
      "Règles d’escalade & SLA",
      "Rapports mensuels (qualité, volume, CSAT)",
    ],
    channels: ["WhatsApp", "Web", "Telegram", "Messenger"],
  },
];
