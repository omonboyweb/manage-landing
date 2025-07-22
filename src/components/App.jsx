import { MainLayout } from "../main_layout";
import { Hero } from "../layouts/Hero";
import { About } from "../layouts/About";
import { What } from "../layouts/What";
import { Team } from "../layouts/Team";
import { motion, useScroll } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#f3603c ",
        }}
      />
      <Content />
    </>
  );
  function Content() {
    return (
      <MainLayout>
        <article
          style={{
            maxWidth: 0,
            padding: "0px 0px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        ></article>
        <Hero></Hero>
        <About></About>
        <What></What>
        <Team></Team>
      </MainLayout>
    );
  }
}
