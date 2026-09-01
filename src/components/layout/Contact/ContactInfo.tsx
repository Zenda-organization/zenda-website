import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <span
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.18em]
            text-[#0F4C81]
          "
        >
          Fale connosco
        </span>

        <h2
          className="
            mt-3
            text-3xl
            font-bold
            tracking-tight
            text-slate-950

            sm:text-4xl
          "
        >
          Estamos prontos para
          <span className="text-[#0F4C81]"> ouvir a sua ideia.</span>
        </h2>

        <p
          className="
            mt-5
            max-w-lg
            text-base
            leading-7
            text-slate-600
          "
        >
          Entre em contacto com a nossa equipa para falar sobre desenvolvimento de software,
          sistemas de gestão ou transformação digital.
        </p>
      </div>

      <div className="space-y-5">
        <a
          href="mailto:contacto@zenda.ao"
          className="
            group
            flex
            items-center
            gap-4
          "
        >
          <span
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-blue-50
              text-[#0F4C81]
              transition-colors
              duration-300

              group-hover:bg-[#0F4C81]
              group-hover:text-white
            "
          >
            <Mail size={20} />
          </span>

          <div>
            <p className="text-xs font-medium text-slate-500">Email</p>

            <p className="mt-1 text-sm font-semibold text-slate-900">contacto@zenda.ao</p>
          </div>
        </a>

        <a
          href="tel:+244000000000"
          className="
            group
            flex
            items-center
            gap-4
          "
        >
          <span
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-blue-50
              text-[#0F4C81]
              transition-colors
              duration-300

              group-hover:bg-[#0F4C81]
              group-hover:text-white
            "
          >
            <Phone size={20} />
          </span>

          <div>
            <p className="text-xs font-medium text-slate-500">Telefone</p>

            <p className="mt-1 text-sm font-semibold text-slate-900">+244 000 000 000</p>
          </div>
        </a>

        <div className="flex items-center gap-4">
          <span
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-blue-50
              text-[#0F4C81]
            "
          >
            <MapPin size={20} />
          </span>

          <div>
            <p className="text-xs font-medium text-slate-500">Localização</p>

            <p className="mt-1 text-sm font-semibold text-slate-900">Angola</p>
          </div>
        </div>
      </div>
    </div>
  );
}
