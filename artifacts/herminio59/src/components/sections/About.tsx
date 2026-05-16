import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto glass-panel p-8 md:p-16 rounded-xl gold-glow relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
          
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="aspect-square rounded-full border border-primary/20 bg-card/50 flex items-center justify-center p-8 relative"
            >
              <div className="absolute inset-0 rounded-full border border-primary/10 animate-[spin_10s_linear_infinite] border-dashed"></div>
              <div className="w-full h-full rounded-full bg-gradient-to-br from-card to-primary/10 flex items-center justify-center">
                <span className="font-serif text-5xl text-primary/50">H59</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                El Arquitecto.
              </h2>
              <div className="space-y-6 text-muted-foreground font-sans leading-relaxed text-lg">
                <p>
                  Herminio59 no es hype. Es precisión. Construí todo desde cero, con una obsesión por entender cómo funcionan los mercados por dentro — no desde afuera. Lecciones costosas, noches largas y eventualmente, claridad.
                </p>
                <p>
                  Hoy construyo el mapa para quienes piensan en serio. Sin ruido del casino cripto, sin atajos vacíos. Esto es un laboratorio de estrategia digital para quienes quieren entender wallets, protocolos DeFi y la psicología que mueve los mercados.
                </p>
                <p className="text-primary/90 font-serif italic text-xl border-l-2 border-primary/30 pl-6 mt-8">
                  "El capital en web3 no se encuentra siguiendo masas. Se construye entendiendo la arquitectura."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
