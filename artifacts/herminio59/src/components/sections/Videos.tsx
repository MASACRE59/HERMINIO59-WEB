import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  {
    title: "Seguridad de Wallets: Cómo Blindar Tus Activos",
    duration: "18:45",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f4d2315?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Psicología del Mercado: Operar en el Bear sin Capitular",
    duration: "24:10",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Estrategias DeFi para Operadores Serios",
    duration: "32:20",
    image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=600&auto=format&fit=crop"
  }
];

export default function Videos() {
  return (
    <section id="videos" className="py-32 relative border-y border-white/5 bg-black/40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 uppercase tracking-widest">
              Inteligencia Reciente
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl">
              Análisis de alta señal. Sin relleno, sin ruido.
            </p>
          </motion.div>
          <motion.a
            href="#"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-primary hover:text-white font-serif uppercase tracking-widest text-sm flex items-center gap-2 group transition-colors"
          >
            Ver Todo el Archivo
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden glass-panel mb-6">
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-16 h-16 rounded-full bg-primary/80 text-background flex items-center justify-center pl-1 group-hover:scale-110 group-hover:bg-primary transition-all duration-300 shadow-[0_0_20px_rgba(229,184,76,0.3)]">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                </div>
                <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-gradient-to-br from-card via-black to-primary/20"></div>
                <div className="absolute bottom-3 right-3 z-20 bg-black/80 px-2 py-1 rounded text-xs font-mono text-white/90 border border-white/10">
                  {video.duration}
                </div>
              </div>
              <h3 className="text-lg font-serif font-bold text-white/90 group-hover:text-primary transition-colors line-clamp-2">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
