import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import Services from "@/pages/Services/Services";
import Products from "@/pages/Products/Products";
import Sectors from "@/pages/Sectors/Sectors";
import Portfolio from "@/pages/Portfolio/Portfolio";
import Blog from "@/pages/Blog/Blog";
import Contact from "@/pages/Contact/Contact";
import ERP from "@/pages/Products/ERP/ERP";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "sobre",
        element: <About />,
      },

      {
        path: "servicos",
        element: <Services />,
      },

      {
        path: "produtos",
        element: <Products />,
      },

      {
        path: "setores",
        element: <Sectors />,
      },

      {
        path: "portfolio",
        element: <Portfolio />,
      },

      {
        path: "blog",
        element: <Blog />,
      },

      {
        path: "contacto",
        element: <Contact />,
      },

      {
        path: "produtos/erp",
        element: <ERP />,
      },
    ],
  },
]);
