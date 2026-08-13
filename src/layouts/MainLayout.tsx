import { Outlet } from "react-router-dom";

import { Navbar } from "@/components/layout/NavBar";
import { ZFooter } from "@/components/common/ZFooter";

export function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <ZFooter />
    </div>
  );
}

export default MainLayout;
