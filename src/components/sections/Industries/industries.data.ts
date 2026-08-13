import { Building2, GraduationCap, HeartPulse, ShoppingCart, Truck } from "lucide-react";

import type { Industry } from "./Industries.types";

export const industries: Industry[] = [
  {
    title: "Comércio",
    description: "Soluções para gestão, vendas, stock e operações comerciais.",
    icon: ShoppingCart,
  },
  {
    title: "Saúde",
    description: "Tecnologia para otimizar processos e melhorar a gestão dos serviços de saúde.",
    icon: HeartPulse,
  },
  {
    title: "Educação",
    description: "Sistemas que simplificam a gestão académica e administrativa.",
    icon: GraduationCap,
  },
  {
    title: "Construção",
    description: "Ferramentas para acompanhar projetos, equipas, recursos e operações.",
    icon: Building2,
  },
  {
    title: "Logística",
    description: "Soluções para organizar operações, transporte e distribuição.",
    icon: Truck,
  },
];
