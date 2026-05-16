import { motion } from "framer-motion";
import logoPath from "@assets/ChatGPT_Image_11_may_2026,_11_59_11_p.m._1778562177732.png";
import { SiYoutube, SiX, SiTiktok, SiInstagram } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container relative z-10 px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mb-8 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border border-primary/40 shadow-[0_0_60px_rgba(229,184,76,0.35)] flex items-center justify-center"
        >
          <img
            src={logoPath}
            alt="HERMINIO59 Logo"
            data-testid="img-hero-logo"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-8xl font-serif font-black tracking-[0.15em] mb-6 gold-gradient-text"
        >
          HERMINIO59
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl font-serif tracking-[0.3em] text-primary/80 mb-8 uppercase"
        >
          Analiza &bull; Invierte &bull; Aprende &bull; Evoluciona
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground font-sans leading-relaxed mb-12"
        >
          Domina las narrativas del mercado, wallets, protocolos DeFi y psicología cripto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { Icon: SiYoutube, href: "#", label: "YouTube" },
            { Icon: SiX, href: "#", label: "X / Twitter" },
            { Icon: SiTiktok, href: "#", label: "TikTok" },
            { Icon: SiInstagram, href: "#", label: "Instagram" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              data-testid={`link-social-${social.label.toLowerCase().replace(/[^a-z]/g, "")}`}
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary/70 hover:text-primary transition-all duration-300 gold-glow-hover hover:-translate-y-1"
            >
              <social.Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
