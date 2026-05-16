import { motion } from "framer-motion";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre Mí", href: "#about" },
    { name: "Análisis", href: "#curriculum" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Contenido", href: "#videos" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/">
          <div className="text-xl md:text-2xl font-serif font-bold tracking-[0.2em] gold-gradient-text cursor-pointer">
            HERMINIO59
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-sans tracking-wider text-muted-foreground hover:text-primary transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#community"
            className="px-6 py-2 border border-primary/50 text-primary hover:bg-primary/10 rounded-sm font-sans text-sm tracking-wider uppercase transition-all gold-glow-hover"
          >
            Entrar
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-panel border-t-0 border-x-0 absolute top-full left-0 w-full"
        >
          <div className="flex flex-col items-center py-8 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-sans tracking-wider text-foreground hover:text-primary transition-colors uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#community"
              className="px-8 py-3 border border-primary/50 text-primary bg-primary/5 rounded-sm font-sans text-sm tracking-wider uppercase transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Entrar
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
