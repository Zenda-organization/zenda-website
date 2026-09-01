export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Como a tecnologia pode simplificar a gestão de uma empresa",
    excerpt:
      "Descubra como ferramentas digitais podem centralizar processos, reduzir tarefas manuais e melhorar a tomada de decisão.",
    category: "Gestão",
    date: "25 Ago 2026",
    readTime: "5 min",
    featured: true,
  },

  {
    title: "O papel dos sistemas ERP na transformação digital",
    excerpt:
      "Entenda como um ERP pode integrar diferentes áreas de uma empresa numa única plataforma.",
    category: "Tecnologia",
    date: "18 Ago 2026",
    readTime: "6 min",
  },

  {
    title: "Por que digitalizar os processos da sua empresa?",
    excerpt:
      "Da organização dos dados à automatização de tarefas, a transformação digital pode trazer ganhos significativos.",
    category: "Transformação Digital",
    date: "11 Ago 2026",
    readTime: "4 min",
  },

  {
    title: "Tecnologia aplicada ao setor da saúde",
    excerpt:
      "Como soluções digitais podem melhorar a organização, acessibilidade e gestão da informação nas instituições de saúde.",
    category: "Saúde",
    date: "04 Ago 2026",
    readTime: "5 min",
  },

  {
    title: "Como preparar uma empresa para crescer com tecnologia",
    excerpt:
      "Conheça alguns princípios para escolher soluções tecnológicas capazes de acompanhar o crescimento do negócio.",
    category: "Gestão",
    date: "28 Jul 2026",
    readTime: "5 min",
  },

  {
    title: "Da ideia ao produto digital",
    excerpt:
      "As principais etapas para transformar uma ideia de negócio numa solução digital funcional e escalável.",
    category: "Desenvolvimento",
    date: "21 Jul 2026",
    readTime: "7 min",
  },
];
