import { motion } from "framer-motion";

export default function Community() {
  return (
    <section id="community" className="py-40 relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-serif font-black tracking-widest text-white mb-8">
            ACCEDE AL <span className="gold-gradient-text">SINDICATO</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-sans mb-12 leading-relaxed">
            Deja de navegar solo en las trincheras. Únete a un colectivo disciplinado de operadores, constructores e inversores que piensan en serio.
          </p>
          
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary text-primary-foreground font-serif font-bold uppercase tracking-[0.2em] px-12 py-5 rounded-sm shadow-[0_0_30px_rgba(229,184,76,0.3)] hover:shadow-[0_0_50px_rgba(229,184,76,0.5)] transition-all duration-300"
          >
            Solicitar Acceso
          </motion.a>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-sm font-sans tracking-widest text-white/40 uppercase">
            <div>
              <strong className="text-primary block text-lg mb-1">5,000+</strong>
              Miembros
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div>
              <strong className="text-primary block text-lg mb-1">24/7</strong>
              Inteligencia
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div>
              <strong className="text-primary block text-lg mb-1">Elite</strong>
              Red
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
