import { Code2, Globe2, Smartphone, Boxes, Lightbulb } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";

import { ServiceCard } from "./ServiceCard";

const services = [
  {
    number: "01",
    icon: <Code2 size={24} />,
    title: "Desenvolvimento de Software",
    description:
      "Criamos sistemas personalizados para responder às necessidades específicas e aos processos do seu negócio.",
  },
  {
    number: "02",
    icon: <Boxes size={24} />,
    title: "Sistemas ERP",
    description:
      "Centralize operações, dados e processos empresariais numa única plataforma de gestão.",
  },
  {
    number: "03",
    icon: <Globe2 size={24} />,
    title: "Aplicações Web",
    description:
      "Desenvolvemos aplicações web modernas, responsivas e preparadas para oferecer uma excelente experiência aos utilizadores.",
  },
  {
    number: "04",
    icon: <Smartphone size={24} />,
    title: "Aplicações Mobile",
    description:
      "Transformamos ideias em aplicações móveis intuitivas e funcionais para aproximar empresas dos seus clientes.",
  },
  {
    number: "05",
    icon: <Lightbulb size={24} />,
    title: "Consultoria Tecnológica",
    description:
      "Ajudamos empresas a identificar oportunidades, melhorar processos e utilizar a tecnologia de forma estratégica.",
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-24
        sm:py-28
        lg:py-32
      "
    >
      <ZContainer>
        {/* Cabeçalho */}
        <div className="max-w-2xl">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-blue-100
              bg-blue-50
              px-3
              py-1
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-blue-700
            "
          >
            Nossos serviços
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              tracking-tight
              text-slate-950
              sm:text-4xl
              lg:text-5xl
              lg:leading-[1.1]
            "
          >
            Tecnologia pensada para
            <br />
            <span className="text-[#0F4C81]">fazer o seu negócio avançar.</span>
          </h2>

          <p
            className="
              mt-6
              max-w-xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
            "
          >
            Desenvolvemos soluções digitais que simplificam processos, aumentam a eficiência e
            ajudam empresas a crescer de forma sustentável.
          </p>
        </div>

        {/* Serviços */}
        <div
          className="
            mt-14
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </ZContainer>
    </section>
  );
}
