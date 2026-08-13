import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { ZContainer } from "@/components/common/ZContainer";

const navigation = {
  empresa: [
    { label: "Sobre nós", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Portfólio", href: "/portfolio" },
    { label: "Contacto", href: "/contacto" },
  ],
  soluções: [
    { label: "Zenda ERP", href: "/produtos/erp" },
    { label: "Comércio", href: "/setores/comercio" },
    { label: "Saúde", href: "/setores/saude" },
    { label: "Educação", href: "/setores/educacao" },
  ],
};

export function ZFooter() {
  return (
    <footer className="bg-[#001734] text-white">
      <ZContainer>
        {/* Área principal */}
        <div
          className="
            grid
            gap-12
            py-16

            lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]
            lg:gap-16
            lg:py-20
          "
        >
          {/* Marca */}
          <div className="max-w-sm">
            <a
              href="/"
              className="
                inline-flex
                items-center
                text-2xl
                font-bold
                tracking-tight
                text-white
              "
            >
              Zenda
              <span className="text-blue-200">.</span>
            </a>

            <p
              className="
                mt-5
                text-sm
                leading-6
                text-blue-100
              "
            >
              Tecnologia que simplifica negócios, transforma processos e cria novas possibilidades.
            </p>

            <div className="mt-7 space-y-3">
              <a
                href="mailto:contacto@zenda.ao"
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-blue-100
                  transition-colors
                  hover:text-white
                "
              >
                <Mail size={17} />
                contacto@zenda.ao
              </a>

              <a
                href="tel:+244000000000"
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-blue-100
                  transition-colors
                  hover:text-white
                "
              >
                <Phone size={17} />
                +244 000 000 000
              </a>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-blue-100
                "
              >
                <MapPin size={17} />
                Angola
              </div>
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-sm font-semibold text-white">Empresa</h3>

            <ul className="mt-5 space-y-3">
              {navigation.empresa.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="
                      text-sm
                      text-blue-100
                      transition-colors
                      hover:text-white
                    "
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Soluções */}
          <div>
            <h3 className="text-sm font-semibold text-white">Soluções</h3>

            <ul className="mt-5 space-y-3">
              {navigation.soluções.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="
                      text-sm
                      text-blue-100
                      transition-colors
                      hover:text-white
                    "
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold text-white">Vamos conversar?</h3>

            <p
              className="
                mt-5
                text-sm
                leading-6
                text-blue-100
              "
            >
              Tem um projeto ou desafio que gostaria de transformar numa solução digital?
            </p>

            <a
              href="/contacto"
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-white
                transition-colors
                hover:text-blue-200
              "
            >
              Falar com a Zenda
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-white/15
            py-6
            text-sm
            text-blue-100

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>© {new Date().getFullYear()} Zenda. Todos os direitos reservados.</p>

          <div className="flex gap-5">
            <a
              href="/privacidade"
              className="
                transition-colors
                hover:text-white
              "
            >
              Privacidade
            </a>

            <a
              href="/termos"
              className="
                transition-colors
                hover:text-white
              "
            >
              Termos
            </a>
          </div>
        </div>
      </ZContainer>
    </footer>
  );
}
