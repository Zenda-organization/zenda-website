import type { LucideIcon } from "lucide-react";
import { Building2, ShoppingCart, Stethoscope } from "lucide-react";

export type PortfolioCategory = "todos" | "gestao" | "saude" | "comercio";

export interface PortfolioProject {
  title: string;
  category: string;
  categoryId: Exclude<PortfolioCategory, "todos">;
  description: string;
  icon: LucideIcon;
  technologies: string[];
  featured?: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Kimuando Kia Soko",
    category: "Saúde",
    categoryId: "saude",
    description:
      "Sistema de gestão hospitalar desenvolvido para centralizar processos, informação clínica e operações administrativas.",
    icon: Stethoscope,
    technologies: ["React", "Laravel", "MySQL"],
    featured: true,
  },

  {
    title: "Zenda ERP",
    category: "Gestão empresarial",
    categoryId: "gestao",
    description:
      "Plataforma de gestão empresarial concebida para centralizar clientes, vendas, stock, faturação e outras operações.",
    icon: Building2,
    technologies: ["React", "TypeScript", "Node.js"],
    featured: true,
  },

  {
    title: "Solução para Comércio",
    category: "Comércio",
    categoryId: "comercio",
    description:
      "Conceito de solução digital para apoiar empresas comerciais na gestão de vendas, produtos, clientes e stock.",
    icon: ShoppingCart,
    technologies: ["React", "TypeScript", "Node.js"],
  },
];
