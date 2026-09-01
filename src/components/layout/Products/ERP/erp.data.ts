import { Boxes, FileText, Package, ShoppingCart, Users } from "lucide-react";

export const erpModules = [
  {
    title: "Clientes",
    description:
      "Centralize os dados dos seus clientes e tenha uma visão organizada de cada relacionamento.",
    icon: Users,
  },
  {
    title: "Vendas",
    description: "Acompanhe vendas, pedidos e operações comerciais num único lugar.",
    icon: ShoppingCart,
  },
  {
    title: "Stock",
    description: "Controle produtos, entradas, saídas e níveis de stock com maior precisão.",
    icon: Package,
  },
  {
    title: "Faturação",
    description:
      "Organize o processo de faturação e mantenha os documentos comerciais centralizados.",
    icon: FileText,
  },
  {
    title: "Gestão",
    description: "Tenha uma visão integrada das principais operações da sua empresa.",
    icon: Boxes,
  },
];
