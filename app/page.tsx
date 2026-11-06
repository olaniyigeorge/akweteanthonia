import SiteNav from "./components/site-nav";
import SiteFooter from "./components/site-footer";
import AboutSection from "./components/sections/about";
import Approach from "./components/sections/approach";
import Capabilities from "./components/sections/capabilities";
import ContactSection from "./components/sections/contact";
import Experience from "./components/sections/experience";
import FocusStrip from "./components/sections/focus-strip";
import HeroSection from "./components/sections/hero";
import ProofStrip from "./components/sections/proof-strip";
import SelectedWork from "./components/sections/selected-work";

export default function Home() {
  return (
    <main className="site-theme">
      <SiteNav />
      <HeroSection />
      <FocusStrip />
      <SelectedWork />
      <ProofStrip />
      <AboutSection />
      <Capabilities />
      <Experience />
      <Approach />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
