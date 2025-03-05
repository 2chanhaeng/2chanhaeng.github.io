import "./globals.css";
import About from "./components/About";
import PortfolioFooter from "./components/PortfolioFooter";
import PortfolioHeader from "./components/PortfolioHeader";
import PortfolioNavigation from "./components/PortfolioNavigation";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

export default async function PortfolioPage() {
  return (
    <main>
      <PortfolioNavigation />
      <PortfolioHeader />
      <About />
      <TechStack />
      <Projects />
      <PortfolioFooter />
    </main>
  );
}
