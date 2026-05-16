import { SiYoutube, SiX, SiTiktok, SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xl font-serif font-bold tracking-[0.2em] text-white/50">
          HERMINIO59
        </div>
        
        <div className="flex items-center gap-6">
          {[SiYoutube, SiX, SiTiktok, SiInstagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="text-white/40 hover:text-primary transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        
        <div className="text-xs font-sans text-white/30 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Herminio59. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
