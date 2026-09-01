import { useState } from "react";

import { ZButton } from "@/components/common/ZButton";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-7
        shadow-xl
        shadow-slate-200/30

        sm:p-9

        lg:p-10
      "
    >
      <div>
        <h2
          className="
            text-2xl
            font-bold
            tracking-tight
            text-slate-950
          "
        >
          Envie uma mensagem
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Preencha o formulário e entraremos em contacto consigo.
        </p>
      </div>

      {submitted ? (
        <div
          className="
            mt-8
            rounded-2xl
            border
            border-green-100
            bg-green-50
            p-6
          "
        >
          <h3 className="font-semibold text-green-800">Mensagem recebida.</h3>

          <p className="mt-2 text-sm leading-6 text-green-700">
            Obrigado pelo contacto. A nossa equipa irá analisar a sua mensagem.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-slate-800">
                Nome
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="O seu nome"
                className="
                  mt-2
                  w-full
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-3
                  text-sm
                  text-slate-900
                  outline-none
                  transition-all

                  placeholder:text-slate-400

                  focus:border-[#0F4C81]
                  focus:ring-4
                  focus:ring-blue-500/10
                "
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-slate-800">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="seu@email.com"
                className="
                  mt-2
                  w-full
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-3
                  text-sm
                  text-slate-900
                  outline-none
                  transition-all

                  placeholder:text-slate-400

                  focus:border-[#0F4C81]
                  focus:ring-4
                  focus:ring-blue-500/10
                "
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="text-sm font-medium text-slate-800">
              Empresa
            </label>

            <input
              id="company"
              name="company"
              type="text"
              placeholder="Nome da empresa"
              className="
                mt-2
                w-full
                rounded-xl
                border
                border-slate-200
                bg-white
                px-4
                py-3
                text-sm
                text-slate-900
                outline-none
                transition-all

                placeholder:text-slate-400

                focus:border-[#0F4C81]
                focus:ring-4
                focus:ring-blue-500/10
              "
            />
          </div>

          <div>
            <label htmlFor="service" className="text-sm font-medium text-slate-800">
              Como podemos ajudar?
            </label>

            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className="
                mt-2
                w-full
                rounded-xl
                border
                border-slate-200
                bg-white
                px-4
                py-3
                text-sm
                text-slate-900
                outline-none
                transition-all

                focus:border-[#0F4C81]
                focus:ring-4
                focus:ring-blue-500/10
              "
            >
              <option value="" disabled>
                Selecione uma opção
              </option>

              <option value="software">Desenvolvimento de Software</option>

              <option value="erp">Zenda ERP</option>

              <option value="web">Desenvolvimento Web</option>

              <option value="mobile">Desenvolvimento Mobile</option>

              <option value="consultoria">Consultoria</option>

              <option value="outro">Outro</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-slate-800">
              Mensagem
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Conte-nos um pouco sobre o seu projeto..."
              className="
                mt-2
                w-full
                resize-none
                rounded-xl
                border
                border-slate-200
                bg-white
                px-4
                py-3
                text-sm
                text-slate-900
                outline-none
                transition-all

                placeholder:text-slate-400

                focus:border-[#0F4C81]
                focus:ring-4
                focus:ring-blue-500/10
              "
            />
          </div>

          <ZButton type="submit" size="lg" className="w-full">
            Enviar mensagem
          </ZButton>

          <p className="text-center text-xs leading-5 text-slate-500">
            Ao enviar este formulário, os dados serão utilizados apenas para responder ao seu pedido
            de contacto.
          </p>
        </form>
      )}
    </div>
  );
}
