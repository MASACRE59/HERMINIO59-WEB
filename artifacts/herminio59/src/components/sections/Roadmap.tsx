import { motion } from "framer-motion";
import { CheckCircle2, Lock } from "lucide-react";

const phases = [
  {
    phase: "Fase I",
    title: "Los Cimientos",
    description: "Construcción de la identidad de marca y publicación del marco estratégico inicial.",
    status: "completed"
  },
  {
    phase: "Fase II",
    title: "Apertura del Colectivo",
    description: "Acceso al Discord privado para los primeros operadores y constructores comprometidos.",
    status: "active"
  },
  {
    phase: "Fase III",
    title: "Protocolo Avanzado",
    description: "La guía definitiva para operar con precisión y rentabilidad dentro del ecosistema DeFi.",
    status: "upcoming"
  },
  {
    phase: "Fase IV",
    title: "Iniciativa Clasificada",
    description: "Herramientas exclusivas para los miembros del círculo interno.",
    status: "locked"
  },
  {
    phase: "Fase V",
    title: "Proyecto Obsidiana",
    description: "Redefiniendo la mecánica del seguimiento de portafolio.",
    status: "locked"
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-widest">
            Roadmap
          </h2>
          <p className="text-xl text-primary/80 font-serif tracking-widest">Ejecución Estratégica</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>

          {phases.map((phase, i) => {
            const isLocked = phase.status === "locked";
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-2 border-background bg-primary top-6 -translate-x-1/2 md:translate-x-0 md:-ml-2 z-10 shadow-[0_0_15px_rgba(229,184,76,0.5)]"></div>

                {/* Content */}
                <div className={`pl-20 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                  <div className={`glass-panel p-8 rounded-lg relative overflow-hidden transition-all duration-500 ${
                    isLocked ? "border-white/5 opacity-80" : "hover:border-primary/30"
                  }`}>
                    {isLocked && (
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10 flex items-center justify-center">
                        <Lock className="w-12 h-12 text-primary/40 animate-pulse" />
                      </div>
                    )}
                    
                    <div className={isLocked ? "blur-sm" : ""}>
                      <div className="flex items-center gap-3 mb-2 justify-start md:justify-start">
                        <span className="text-primary font-serif font-bold tracking-widest text-sm uppercase">
                          {isLocked ? "???" : phase.phase}
                        </span>
                        {phase.status === "completed" && <CheckCircle2 className="w-4 h-4 text-primary" />}
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-white mb-4">
                        {isLocked ? "CLASIFICADO" : phase.title}
                      </h3>
                      <p className="text-muted-foreground font-sans">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
