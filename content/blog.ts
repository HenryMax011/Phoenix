export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "como-escolher-o-ring-correto",
    title: "Como escolher o O-Ring correto para sua aplicação",
    excerpt:
      "Guia prático sobre materiais, dureza, normas dimensionais e erros comuns na especificação de O-Rings.",
    date: "2026-06-12",
    readTime: "6 min",
    category: "Especificação",
    content: [
      "A escolha do O-Ring certo começa pela compreensão do fluido, da pressão e da faixa de temperatura do sistema. Um anel inadequado pode gerar vazamento, inchamento do elastômero ou falha prematura.",
      "Materiais como NBR são indicados para óleos minerais; FKM (Viton) para altas temperaturas e agressividade química; EPDM para água quente, vapor e fluidos polares; silicone para faixas térmicas amplas com baixa resistência a óleos.",
      "Além do material, verifique a norma dimensional (AS568, ISO 3601 ou métrica), a dureza Shore A e se a aplicação é estática ou dinâmica. Em dúvida, envie as condições de operação para nossa equipe técnica.",
    ],
  },
  {
    slug: "gaxetas-vs-selos-mecanicos",
    title: "Gaxetas ou selos mecânicos: quando usar cada um",
    excerpt:
      "Comparativo objetivo para manutenção industrial: custo, confiabilidade e cenários ideais de cada solução.",
    date: "2026-05-28",
    readTime: "5 min",
    category: "Manutenção",
    content: [
      "Gaxetas e selos mecânicos resolvem a vedação de eixos, mas com trade-offs distintos de custo, vazamento controlado e complexidade de instalação.",
      "Gaxetas costumam ser mais simples de trocar e adequadas quando um pequeno vazamento controlado é aceitável. Selos mecânicos oferecem estanqueidade superior, porém exigem alinhamento, acabamento de eixo e manutenção especializada.",
      "A decisão deve considerar o fluido, a criticidade ambiental, o histórico de falhas e o custo total de propriedade — não apenas o preço da peça.",
    ],
  },
  {
    slug: "falhas-comuns-em-juntas-de-flange",
    title: "5 falhas comuns em juntas de flange e como evitá-las",
    excerpt:
      "Torque irregular, material inadequado e reuso de juntas estão entre as causas mais frequentes de vazamento.",
    date: "2026-04-15",
    readTime: "7 min",
    category: "Boas práticas",
    content: [
      "Vazamentos em flanges raramente são aleatórios. Na maioria dos casos, a causa está na especificação, no torque ou na preparação da face de vedação.",
      "Entre as falhas mais comuns: junta reutilizada, material incompatível com o fluido, superfície danificada, sequência de aperto incorreta e torque insuficiente ou excessivo.",
      "Padronizar o procedimento de montagem e registrar o histórico de intervenções reduz drasticamente retrabalho e paradas não planejadas.",
    ],
  },
  {
    slug: "vedacao-industrial-e-reducao-de-paradas",
    title: "Vedação industrial como estratégia para reduzir paradas",
    excerpt:
      "Por que tratar vedação como item crítico de confiabilidade — e não apenas como consumo de manutenção.",
    date: "2026-03-20",
    readTime: "5 min",
    category: "Confiabilidade",
    content: [
      "Em plantas industriais, falhas de vedação geram perdas de produto, riscos ambientais e horas de máquina parada que superam o custo do componente.",
      "Uma abordagem preventiva inclui mapeamento dos pontos críticos, estoque mínimo de itens estratégicos e parceria com fornecedor capaz de especificar e entregar sob urgência.",
      "A PhoenixBor apoia times de manutenção e engenharia com orientação técnica e fornecimento ágil de O-Rings, gaxetas, retentores e juntas sob medida.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
