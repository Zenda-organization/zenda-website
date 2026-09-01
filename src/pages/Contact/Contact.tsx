import { ContactHero } from "@/components/layout/Contact/ContactHero";
import { ContactInfo } from "@/components/layout/Contact/ContactInfo";
import { ContactForm } from "@/components/layout/Contact/ContactForm";

export default function Contact() {
  return (
    <>
      <ContactHero />

      <section className="pb-20 sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="
              grid
              items-start
              gap-12

              lg:grid-cols-[0.8fr_1.2fr]
              lg:gap-20
            "
          >
            <ContactInfo />

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
