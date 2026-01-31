export type Industry = {
  slug: string;
  title: string;
  pains: string[];
  outcomes: string[];
  exampleFlows: string[];
};

export const industries: Industry[] = [
  {
    slug: "banques-microfinance",
    title: "Banques & microfinances",
    pains: [
      "Forte volumétrie de demandes répétitives (soldes, frais, horaires, procédures)",
      "Temps d’attente élevé",
      "Besoin de traçabilité & conformité",
    ],
    outcomes: ["Réponses instantanées 24/7", "Réduction des appels", "Meilleure satisfaction & suivi"],
    exampleFlows: ["FAQ produits", "Réclamations", "Prise de RDV agence", "Suivi dossiers"],
  },
  {
    slug: "cliniques-pharmacies",
    title: "Cliniques & pharmacies",
    pains: ["RDV et informations pratiques répétitives", "Tri des demandes", "Manque de suivi patient"],
    outcomes: ["RDV automatisés", "Orientation vers humain si nécessaire", "Feedback & CSAT"],
    exampleFlows: ["RDV", "FAQ (services/prix)", "Suivi examens", "Réclamations"],
  },
  {
    slug: "ecoles-universites",
    title: "Écoles & universités privées",
    pains: ["Questions admissions", "Demandes sur frais / calendrier", "Support parents & étudiants"],
    outcomes: ["Réponses cohérentes", "Réduction des appels", "Meilleur parcours candidat"],
    exampleFlows: ["Admissions", "Paiements", "Calendrier", "Réclamations"],
  },
  {
    slug: "pme-commerce",
    title: "PME & commerces",
    pains: ["Support commande & livraison", "Réclamations clients", "Manque de centralisation"],
    outcomes: ["Suivi de commande", "Réponses rapides", "Moins de pertes clients"],
    exampleFlows: ["Suivi commande", "Retours", "FAQ", "Collecte d’avis"],
  },
  {
    slug: "ong-projets",
    title: "ONG & projets internationaux",
    pains: ["Demandes multi-sites", "Besoin de reporting", "SLA avec partenaires"],
    outcomes: ["Traçabilité et dashboards", "Automatisation des demandes", "Rapports mensuels"],
    exampleFlows: ["Info programme", "Dépôt demande", "Suivi dossier", "Feedback"],
  },
];
