import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Coffee, Coins } from "lucide-react";
import { useLocation } from "wouter";

export default function DonationButton() {
  const [open, setOpen] = useState(false);
  const [, navigate] = useLocation();

  function handleClose() {
    setOpen(false);
  }

  function handleCrypto() {
    setOpen(false);
    navigate("/donaciones");
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(229,184,76,0.45)" }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-5 py-3 bg-black border border-primary/50 text-primary font-serif text-xs tracking-[0.18em] uppercase rounded-lg shadow-[0_0_16px_rgba(229,184,76,0.2)] transition-colors duration-300 hover:border-primary hover:bg-primary/5"
        aria-label="Apoya el Lab"
      >
        <Coffee size={14} className="text-primary shrink-0" />
        Apoya el Lab
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
              onClick={handleClose}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="fixed z-50 bottom-0 left-0 right-0 sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-[#080808] border border-primary/25 rounded-t-2xl sm:rounded-xl overflow-hidden shadow-[0_0_60px_rgba(229,184,76,0.18)]">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-10 text-white/25 hover:text-primary transition-colors duration-200"
                  aria-label="Cerrar"
                >
                  <X size={18} />
                </button>

                <div className="p-8">
                  {/* Icon */}
                  <div className="flex justify-center mb-5">
                    <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_20px_rgba(229,184,76,0.15)]">
                      <Coffee size={24} className="text-primary" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-center font-serif text-xl font-bold text-white tracking-[0.2em] uppercase mb-5">
                    Apoya el Laboratorio
                  </h3>

                  {/* Body */}
                  <p className="text-center text-muted-foreground font-sans text-sm leading-relaxed mb-8">
                    Si este contenido te ayuda, puedes apoyar el laboratorio HERMINIO59. Cada aporte ayuda a crear más análisis, guías y contenido cripto sin perder independencia.
                  </p>

                  {/* CTA buttons */}
                  <div className="flex flex-col gap-3">
                    <a
                      href="https://buymeacoffee.com/herminio59"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-serif font-bold uppercase tracking-[0.15em] px-6 py-3.5 rounded-md text-sm shadow-[0_0_20px_rgba(229,184,76,0.2)] hover:shadow-[0_0_35px_rgba(229,184,76,0.45)] transition-all duration-300"
                    >
                      <Coffee size={15} />
                      Invítame un café
                    </a>

                    <button
                      onClick={handleCrypto}
                      className="w-full flex items-center justify-center gap-2 border border-primary/35 text-primary font-serif uppercase tracking-[0.15em] px-6 py-3.5 rounded-md text-sm hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
                    >
                      <Coins size={15} />
                      Apoyar con crypto
                    </button>

                    <button
                      onClick={handleClose}
                      className="w-full text-white/25 font-sans text-xs uppercase tracking-widest hover:text-white/50 transition-colors duration-200 py-2"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
