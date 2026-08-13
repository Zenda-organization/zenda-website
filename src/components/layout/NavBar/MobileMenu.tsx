import { Menu } from "lucide-react";

import { ZButton } from "@/components/common/ZButton";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { navigation } from "./navigation";
import { NavigationItem } from "./NavigationItem";

export function MobileMenu() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger render={<ZButton variant="ghost" size="icon" aria-label="Abrir menu" />}>
          <Menu size={22} strokeWidth={2} />
        </SheetTrigger>

        <SheetContent side="right">
          <div className="mt-10 flex flex-col gap-6">
            {navigation.map((item) => (
              <NavigationItem key={item.href} item={item} />
            ))}

            <ZButton className="mt-6">Solicitar Demonstração</ZButton>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
