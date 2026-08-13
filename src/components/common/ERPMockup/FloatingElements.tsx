import { Bot, CheckCircle2, Cloud } from "lucide-react";

import { FloatingBadge } from "./FloatingBadge";
import { FloatingPhone } from "./FloatingPhone";

export function FloatingElements() {
  return (
    <>
      <FloatingBadge
        icon={<CheckCircle2 size={20} className="text-emerald-500" />}
        title="Sistema Online"
        description="99.9% disponível"
        className="-left-6 top-16 hidden lg:flex"
        delay={0.2}
      />

      <FloatingBadge
        icon={<Cloud size={20} className="text-blue-500" />}
        title="Cloud"
        description="Seguro e escalável"
        className="-right-4 top-8 hidden xl:flex"
        delay={0.5}
      />

      <FloatingBadge
        icon={<Bot size={20} className="text-violet-500" />}
        title="Inteligência Artificial"
        description="Dados mais inteligentes"
        className="-right-10 bottom-24 hidden lg:flex"
        delay={0.8}
      />

      <FloatingPhone />
    </>
  );
}
