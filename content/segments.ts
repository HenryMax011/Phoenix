export type Segment = {
  slug: string;
  name: string;
  summary: string;
  challenges: string[];
};

export const segments: Segment[] = [
  {
    slug: "oleo-gas",
    name: "Óleo e Gás",
    summary:
      "Vedações para ambientes de alta pressão, temperatura e exposição a hidrocarbonetos.",
    challenges: [
      "Compatibilidade química com derivados de petróleo",
      "Resistência a alta pressão e temperatura",
      "Conformidade com normas de segurança",
    ],
  },
  {
    slug: "quimica-petroquimica",
    name: "Química e Petroquímica",
    summary:
      "Soluções para fluidos agressivos, ácidos, bases e solventes industriais.",
    challenges: [
      "Ataque químico a elastômeros convencionais",
      "Ciclos térmicos severos",
      "Redução de paradas não programadas",
    ],
  },
  {
    slug: "alimentos-bebidas",
    name: "Alimentos e Bebidas",
    summary:
      "Materiais aprovados para contato com alimentos e processos sanitários.",
    challenges: [
      "Conformidade FDA / food grade",
      "Limpeza CIP/SIP",
      "Resistência a vapor e sanitizantes",
    ],
  },
  {
    slug: "siderurgia-mineracao",
    name: "Siderurgia e Mineração",
    summary:
      "Vedações robustas para poeira, abrasão, impacto e cargas pesadas.",
    challenges: [
      "Abrasão e contaminantes sólidos",
      "Ambientes com vibração intensa",
      "Longos intervalos entre manutenções",
    ],
  },
  {
    slug: "papel-celulose",
    name: "Papel e Celulose",
    summary:
      "Componentes para bombas, digesters e linhas de processo úmido.",
    challenges: [
      "Umidade contínua e vapor",
      "Fluidos alcalinos",
      "Desgaste em eixos e flanges",
    ],
  },
  {
    slug: "automotivo-oem",
    name: "Automotivo e OEM",
    summary:
      "Peças sob especificação para montadoras e fabricantes de equipamentos.",
    challenges: [
      "Tolerâncias dimensionais rigorosas",
      "Volumes e prazos de entrega",
      "Rastreabilidade de lotes",
    ],
  },
];
