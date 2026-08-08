import { cn } from "@/lib/utils";

import { ZButton } from "@/components/common/ZButton";
import { ZContainer } from "@/components/common/ZContainer";
import { ZLogo } from "@/components/common/ZLogo";

import { navigation } from "./navigation";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { useNavbar } from "./useNavbar";

export function Navbar() {
  const { isScrolled } = useNavbar();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",

        isScrolled ? "bg-white/80 backdrop-blur-xl shadow-sm" : "bg-transparent",
      )}
    >
      <ZContainer>
        <div className="flex h-20 items-center justify-between">
          <ZLogo />

          <DesktopMenu items={navigation} />

          <div className="hidden lg:block">
            <ZButton>Solicitar Demonstração</ZButton>
          </div>

          <MobileMenu />
        </div>
      </ZContainer>
    </header>
  );
}
