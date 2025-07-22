import React from "react";
import { Header } from "./layouts/Header.jsx";
import { Footer } from "./layouts/Footer.jsx";
export function MainLayout({ children }) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}
