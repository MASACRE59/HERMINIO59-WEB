import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  LineChart, 
  Wallet, 
  Brain, 
  Layers, 
  Cpu
} from "lucide-react";

const topics = [
  {
    title: "Fundamentos de Blockchain",
    description: "Comprende la mecánica real: consenso, descentralización y por qué cambia las reglas del juego financiero.",
    icon: Layers
  },
  {
    title: "Seguridad Operacional",
    description: "Blindaje total. Cold storage, gestión de seed phrases y navegación on-chain sin exponer activos.",
    icon: ShieldCheck
  },
  {
    title: "DeFi & Generación de Yield",
    description: "Extrae valor real. Pools de liquidez, staking avanzado y estrategias de rendimiento sofisticadas.",
    icon: Wallet
  },
  {
    title: "NFT & Cultura Web3",
    description: "Más allá del JPEG. Propiedad digital, utilidad real y cómo leer el tejido social de los ecosistemas.",
    icon: Cpu
  },
  {
    title: "Gestión de Portafolio",
    description: "Evaluación de riesgo, dimensionamiento de posiciones y rebalanceo disciplinado para sobrevivir ciclos.",
    icon: LineChart
  },
  {
    title: "Psicología del Mercado",
    description: "Domina tu mente antes que el mercado. Volatilidad extrema, sesgos cognitivos y capitalización emocional.",
    icon: Brain
  }
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-32 relative border-y border-white/5 bg-black/40">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-widest">
            El Análisis
          </h2>
          <p className="text-xl text-primary/80 font-serif tracking-widest">Lo Que Aquí Se Domina</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-lg group hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_0_30px_rgba(229,184,76,0.15)]"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <topic.icon className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-white mb-4">
                {topic.title}
              </h3>
              <p className="text-muted-foreground font-sans leading-relaxed">
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
