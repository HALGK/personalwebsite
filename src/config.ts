// ============================================================
// DEINE ZENTRALE KONFIGURATIONSDATEI
// Hier kannst du ALLES ändern – kein HTML-Wissen nötig!
// ============================================================

export const siteConfig = {
  // Persönliche Daten
  name: "Hermann Lücken genannt Klaßen",
  nameShort: "H. Lücken gen. Klaßen",
  title: "Research Associate & Doctoral Researcher",
  institution: "Georg-August-Universität Göttingen",
  department: "Institut für Politikwissenschaft",
  office: "Platz der Göttinger Sieben 3, Room Oec 0.133, 37073 Göttingen",
  email: "HALGK@posteo.de",
  phone: "+49 162 619 3379",

  // Bio (Startseite)
  bio: `I am a Research Associate and Doctoral Researcher at the Institute of Political Science at the University of Göttingen. My research focuses on the political economy of energy policy, regulatory governance, and European integration. My dissertation examines regulatory divergence in European energy markets, exploring how institutional power, path dependence, and state intervention shape market integration.`,

  bioShort: `Research Associate at the University of Göttingen working on energy policy, regulatory governance, and European integration.`,

  // Forschungsschwerpunkte
  researchInterests: [
    "Political Economy of Energy Policy & Market Integration",
    "Regulatory Governance",
    "European Integration & Europeanization",
    "Implementation of EU Energy Directives",
    "Capacity Remuneration Mechanisms",
  ],

  // Social Media & Profile Links
  social: {
    orcid: "https://orcid.org",             // Deine ORCID-URL einfügen
    googleScholar: "https://scholar.google.com", // Deine Google Scholar URL
    researchGate: "https://www.researchgate.net", // Deine ResearchGate URL
    github: "https://github.com/HALGK",
    substack: "",   // Deine Substack-URL einfügen, z.B. "https://yourname.substack.com"
    youtube: "",    // Deine YouTube-Kanal-URL einfügen
    twitter: "",    // Optional
  },

  // Navigation
  nav: [
    { label: "Home", href: "/" },
    { label: "Research", href: "/research" },
    { label: "Teaching", href: "/teaching" },
    { label: "CV", href: "/cv" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};

// ============================================================
// PUBLIKATIONEN
// Einfach neue Einträge hinzufügen oder bestehende ändern
// ============================================================

export const publications = {
  peerReviewed: [
    {
      id: 1,
      authors: "Lücken gen. Klaßen, H.",
      year: 2026,
      title: "Emergency measures before the crisis? The puzzling pattern of price controls in the EU electricity market",
      journal: "Renewable and Sustainable Energy Reviews",
      volume: "226",
      pages: "116155",
      doi: "https://doi.org/10.1016/j.rser.2025.116155",
      tags: ["Energy Policy", "EU", "Price Controls"],
    },
    {
      id: 2,
      authors: "Lücken gen. Klaßen, H.",
      year: 2025,
      title: "Exploring the System Security Veil: Uncovering Domestic Motivation to Establish Capacity Remuneration Mechanisms (CRMs)",
      journal: "dms – der moderne staat",
      volume: "18(1)",
      pages: "116–139",
      doi: "https://doi.org/10.3224/dms.v18i1.07",
      tags: ["CRM", "Energy Policy", "Regulatory Governance"],
    },
    {
      id: 3,
      authors: "Fink, S., Ruffing, E., Maschlanka, L., & Lücken gen. Klaßen, H.",
      year: 2025,
      title: "Self-enforcing path dependent trajectories? A comparison of the implementation of the EU energy packages in Germany and the Netherlands",
      journal: "Regulation & Governance",
      doi: "https://doi.org/10.1111/rego.12617",
      tags: ["Path Dependence", "EU Energy", "Implementation"],
    },
    {
      id: 4,
      authors: "Fink, S., Ruffing, E., Lücken gen. Klaßen, H., & Maschlanka, L.",
      year: 2022,
      title: "Konflikte und Handlungsspielraum von Akteuren in der Implementation europäischer Energiemarktrichtlinien – Das Beispiel Sicherheit der Stromnetze",
      journal: "dms – der moderne staat",
      volume: "15(2)",
      pages: "1–20",
      doi: "https://doi.org/10.3224/dms.v15i2.10",
      tags: ["EU Energy", "Implementation", "Network Security"],
    },
    {
      id: 5,
      authors: "Lücken gen. Klaßen, H., & Maschlanka, L.",
      year: 2022,
      title: "Bundesnetzagentur und Energiepolitik. Bedeutung und Perspektiven des EuGH-Urteils zur Unabhängigkeit der Behörde",
      journal: "Gesellschaft. Wirtschaft. Politik (GWP)",
      volume: "71(2)",
      pages: "168–178",
      doi: "https://doi.org/10.3224/gwp.v71i2.06",
      tags: ["Bundesnetzagentur", "Energy Policy", "Regulation"],
    },
  ],
  workingPapers: [
    {
      id: 6,
      authors: "Jevnaker, T., Fink, S., Taranger, K. K., Lücken gen. Klaßen, H., & Eikeland, P. O.",
      year: 2022,
      title: "Research Brief #3: Stocktaking of the adopted TCMs – towards harmonization or diversity?",
      publisher: "Fridtjof Nansen Institute",
      tags: ["TCMs", "EU Energy"],
    },
    {
      id: 7,
      authors: "Lücken gen. Klaßen, H.",
      year: 2020,
      title: "Europäischer Wirtschafts- und Sozialausschuss",
      publisher: "In: Weidenfeld, Wessels & Tekin (Hrsg.), Europa von A bis Z. Springer.",
      tags: ["EU Institutions"],
    },
    {
      id: 8,
      authors: "Plottka, J., & Lücken gen. Klaßen, H.",
      year: 2019,
      title: "Europäischer Wirtschafts- und Sozialausschuss",
      publisher: "In: Weidenfeld, Wessels & Tekin (Hrsg.), Europa von A bis Z. Springer.",
      tags: ["EU Institutions"],
    },
  ],
  workInProgress: [
    {
      id: 9,
      authors: "Lücken gen. Klaßen, H.",
      title: "Beyond Formal Competence: ACER's Unexpected Autonomy and the Paradox of Regional Disunity Driving EU Energy Integration",
      status: "Under review",
      presented: ["EUSA 2025 (Philadelphia)", "ECPR General Conference 2025 (Thessaloniki)"],
      tags: ["ACER", "EU Energy", "Regulatory Autonomy"],
    },
    {
      id: 10,
      authors: "Lücken gen. Klaßen, H., & Fink, S.",
      title: "Beyond Market Faith: Determinants of Governmental Intervention Timing During the European Energy Crisis",
      status: "Under review",
      presented: ["Biennial Conference of Regulatory Governance 2025 (Berlin)"],
      tags: ["Energy Crisis", "Government Intervention"],
    },
    {
      id: 11,
      authors: "Lücken gen. Klaßen, H.",
      title: "Electricity Grids as Club-Good: Regulatory Gaps and Implications for Further Interconnection",
      status: "In progress",
      presented: ["SGEU 2024 (Lisbon)"],
      tags: ["Electricity Grids", "Regulation", "Interconnection"],
    },
  ],
};

// ============================================================
// LEHRE
// ============================================================

export const teaching = {
  award: {
    title: "Best Practice Teaching Prize 2023",
    description: "Awarded for seminars with fewer than 30 participants, Georg-August-Universität Göttingen",
  },
  courses: [
    {
      title: "Analyse politischer Systeme",
      level: "MA",
      language: "DE",
      semester: "WiSe 2025/26",
      description: "Analyse moderner politischer Systeme im europäischen Vergleich.",
      youtubeId: "", // YouTube Video ID einfügen, z.B. "dQw4w9WgXcQ"
    },
    {
      title: "Empirical Analyses of the European Multilevel System – Introduction to R",
      level: "MA",
      language: "EN",
      semester: "WiSe 2024/25, WiSe 2023/24",
      description: "Introduction to empirical methods using R, applied to the European multilevel system.",
      youtubeId: "",
    },
    {
      title: "Market or State Governance? The Liberalisation of the 'Public Good'",
      level: "BA",
      language: "EN",
      semester: "SoSe 2024",
      description: "Examines the tension between market liberalisation and state intervention in public goods provision.",
      youtubeId: "",
    },
    {
      title: "Liberalization and Common Market Policy",
      level: "BA",
      language: "EN",
      semester: "SoSe 2023",
      description: "Overview of EU liberalization policy and common market frameworks.",
      youtubeId: "",
    },
    {
      title: "Forschungsmethodische Grundlagen am Beispiel der Europäischen Integration",
      level: "BA",
      language: "DE",
      semester: "WiSe 2022/23",
      description: "Einführung in sozialwissenschaftliche Methoden anhand der europäischen Integration.",
      youtubeId: "",
    },
    {
      title: "Banking Regulation in Germany within the European Multi-Level System",
      level: "BA",
      language: "EN",
      semester: "SoSe 2022",
      description: "Examines German banking regulation in the context of European multi-level governance.",
      youtubeId: "",
    },
    {
      title: "Bankenregulierung in Deutschland und der Europäischen Union",
      level: "BA",
      language: "DE",
      semester: "SoSe 2021",
      description: "Einführung in die Bankenregulierung in Deutschland und der EU (online).",
      youtubeId: "",
    },
  ],
  otherActivities: [
    "Euroculture Intensive Programme (Olomouc 2022, Strasbourg 2023): Coordination and assessment of a week-long student workshop with 60–100 participants",
    "Thesis supervision (2021–present): 23 Bachelor's theses (4 ongoing), 3 Master's theses",
  ],
};

// ============================================================
// CV DATEN
// ============================================================

export const cvData = {
  positions: [
    {
      title: "Research Associate & Lecturer",
      institution: "Institut für Politikwissenschaft, Georg-August-Universität Göttingen",
      period: "January 2021 – present",
      bullets: [
        "Design and delivery of seminars on energy policy and regulatory policy",
        "Doctoral research on energy policy",
      ],
    },
    {
      title: "Visiting Researcher",
      institution: "Florence School of Regulation (FSR), European University Institute",
      period: "April 2025",
      bullets: [],
    },
    {
      title: "Visiting Researcher",
      institution: "University of Osaka",
      period: "November 2024",
      bullets: [],
    },
    {
      title: "Research Associate",
      institution: "'Implementing Network Code (INC)' Project",
      period: "January 2021 – December 2022",
      bullets: [
        "Research on implementation of Terms, Conditions and Methodologies (TCMs) in the European electricity market",
        "Collaboration with EUI, University of Oslo, Statnett, Nordpool",
      ],
    },
  ],
  education: [
    {
      degree: "PhD in Political Science",
      institution: "Georg-August-Universität Göttingen",
      period: "April 2022 – April 2026",
      details: "Dissertation: The Political Economy of Regulatory Divergence in European Energy Markets: Institutional Power, Path Dependence, and the Persistence of State Intervention. Supervisors: Prof. Dr. Simon Fink, Prof. Dr. Eva Ruffing, Prof. Dr. Sandra Eckert",
    },
    {
      degree: "M.A. Global Politics: Structures and Boundaries",
      institution: "Georg-August-Universität Göttingen & Universiteit Gent",
      period: "October 2017 – December 2020",
      details: "Grade: 1.6 | Thesis: National convergence in the implementation of European banking regulation after the 2008 financial crisis (Grade: 1.1)",
    },
    {
      degree: "B.A. Political Science & Economics",
      institution: "Georg-August-Universität Göttingen",
      period: "September 2013 – January 2018",
      details: "Grade: 2.3 | Thesis: Differentiated Integration as a Tool to Enhance EU Capacity to Act (Grade: 1.7)",
    },
  ],
  funding: [
    { title: "UNIBund Funding for EUSA 2025 Conference, Philadelphia", year: "2025" },
    { title: "Euroculture Consortium Scholarship for Visiting Researcher Programme, University of Osaka", year: "2024" },
    { title: "DAAD Funding for ECPR General Conference", year: "2025" },
    { title: "GGG Funding for Research Stay in Florence and ECPR Conferences", year: "2023, 2024" },
  ],
  skills: {
    software: ["R/RStudio", "Markdown", "Obsidian", "Microsoft Word", "Photoshop", "FL Studio"],
    languages: ["German (native)", "English (fluent)", "French (basic)"],
  },
};

// ============================================================
// BLOG / SUBSTACK
// Hier deine Substack-URL und RSS-Feed eintragen sobald bereit
// ============================================================

export const blogConfig = {
  substackUrl: "",        // z.B. "https://hermanngk.substack.com"
  substackRSS: "",        // z.B. "https://hermanngk.substack.com/feed"
  showBlogPage: true,     // auf false setzen um die Seite zu verstecken
};
