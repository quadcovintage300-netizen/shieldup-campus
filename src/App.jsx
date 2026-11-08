import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ModuleList from "./components/ModuleList";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  // darkMode lives here because every section needs the theme
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode(!darkMode)} />
      <main>
        <Hero />
        <About />
        <ModuleList />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
