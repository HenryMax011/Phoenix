export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  applications: string[];
  materials: string[];
  image: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "o-rings",
    name: "O-Rings",
    category: "Anéis de vedação",
    summary:
      "Anéis toroidais em NBR, Viton, EPDM e silicone para vedação estática e dinâmica.",
    description:
      "Linha completa de O-Rings dimensionados conforme normas AS568, ISO 3601 e métricas. Indicados para sistemas hidráulicos, pneumáticos e equipamentos industriais que exigem estanqueidade confiável sob pressão e temperatura variáveis.",
    applications: [
      "Cilindros hidráulicos",
      "Válvulas e conexões",
      "Bombas e compressores",
      "Equipamentos de processo",
    ],
    materials: ["NBR", "FKM (Viton)", "EPDM", "Silicone", "PTFE"],
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    slug: "gaxetas",
    name: "Gaxetas",
    category: "Vedação dinâmica",
    summary:
      "Gaxetas trançadas e moldadas para bombas, agitadores e eixos rotativos.",
    description:
      "Gaxetas industriais em grafite, PTFE, aramida e combinações híbridas. Projetadas para reduzir vazamentos, aumentar a vida útil do equipamento e operar em condições agressivas de temperatura e produto químico.",
    applications: [
      "Bombas centrífugas",
      "Agitadores industriais",
      "Válvulas gaveta",
      "Eixos rotativos",
    ],
    materials: ["Grafite", "PTFE", "Aramida", "Fibra de carbono"],
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    slug: "retentores",
    name: "Retentores",
    category: "Vedação rotativa",
    summary:
      "Retentores de óleo e graxa para eixos, redutores e motores industriais.",
    description:
      "Retentores com lábio simples ou duplo, metalizados ou com mola, para retenção de lubrificantes e exclusão de contaminantes. Compatíveis com eixos de diversos diâmetros e regimes de rotação.",
    applications: [
      "Redutores",
      "Motores elétricos",
      "Caixas de engrenagens",
      "Rolamentos industriais",
    ],
    materials: ["NBR", "FKM", "ACM", "Metal + elastômero"],
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    slug: "juntas-planas",
    name: "Juntas Planas",
    category: "Vedação estática",
    summary:
      "Juntas planas cortadas sob medida para flanges, trocadores e vasos.",
    description:
      "Juntas em papelão hidráulico, grafite expandido, PTFE e elastômeros. Produzidas sob desenho ou amostra, com tolerâncias adequadas para flanges ASME, DIN e normas brasileiras.",
    applications: [
      "Flanges de tubulação",
      "Trocadores de calor",
      "Vasos de pressão",
      "Tampas e carcaças",
    ],
    materials: ["Papelão hidráulico", "Grafite", "PTFE", "EPDM", "NBR"],
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112c4e5190?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    slug: "vedacoes-hidraulicas",
    name: "Vedações Hidráulicas",
    category: "Hidráulica",
    summary:
      "Kits e componentes para cilindros: anéis de pistão, guia e raspadores.",
    description:
      "Conjuntos de vedação hidráulica para cilindros de simples e dupla ação. Incluem anéis de pistão, anéis guia, raspadores e bufas, com materiais selecionados conforme pressão de trabalho e fluido.",
    applications: [
      "Cilindros hidráulicos",
      "Prensas",
      "Máquinas de injeção",
      "Equipamentos móveis",
    ],
    materials: ["PU", "NBR", "PTFE", "POM", "FKM"],
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "perfis-extrudados",
    name: "Perfis Extrudados",
    category: "Perfis e cordões",
    summary:
      "Cordões, perfis e mangueiras em elastômero para vedação perimetral.",
    description:
      "Perfis extrudados sob medida para portas, tampas, painéis e vedação perimetral. Disponíveis em diversas seções geométricas e compostos para resistência a ozônio, óleo e intempéries.",
    applications: [
      "Portas industriais",
      "Painéis elétricos",
      "Cabines e enclausuramentos",
      "Equipamentos OEM",
    ],
    materials: ["EPDM", "NBR", "Silicone", "Neoprene"],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export const productCategories = [
  ...new Set(products.map((p) => p.category)),
];
