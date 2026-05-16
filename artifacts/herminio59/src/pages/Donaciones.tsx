import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import lionBg from "@assets/ChatGPT_Image_11_may_2026,_11_59_11_p.m._1778562177732.png";
import { useLocation } from "wouter";

const cryptos = [
  { name: "ETHEREUM",  ticker: "ETH",       color: "#627eea", emoji: "⟠",  route: "/donaciones/ethereum",  available: true  },
  { name: "LINEA",     ticker: "LINEA",      color: "#61D4F8", emoji: "L",  route: "/donaciones/linea",     available: true  },
  { name: "ARBITRUM",  ticker: "ARB",        color: "#28A0F0", emoji: "A",  route: "/donaciones/arbitrum",  available: true  },
  { name: "POLYGON",   ticker: "MATIC",      color: "#8247E5", emoji: "P",  route: "/donaciones/polygon",   available: true  },
  { name: "OP",        ticker: "OPTIMISM",   color: "#FF0420", emoji: "⊙",  route: "/donaciones/optimism",  available: true  },
  { name: "BNB CHAIN", ticker: "BEP-20",     color: "#F0B90B", emoji: "B",  route: "/donaciones/bnb",       available: true  },
  { name: "AVALANCHE", ticker: "AVAX",       color: "#E84142", emoji: "A",  route: "/donaciones/avalanche", available: true  },
  { name: "ZKSYNC",    ticker: "ERA",        color: "#1755F4", emoji: "⇆",  route: "/donaciones/zksync",    available: true  },
  { name: "MONAD",     ticker: "MON",        color: "#836EF9", emoji: "◈",  route: "/donaciones/monad",     available: true  },
  { name: "MEGAETH",   ticker: "MEGA",       color: "#6B7280", emoji: "M",  route: "/donaciones/megaeth",   available: true  },
  { name: "HYPEREVM",  ticker: "HYPE",       color: "#00C4B4", emoji: "H",  route: "/donaciones/hyperevm",  available: true  },
  { name: "SONEIUM",   ticker: "SONE",       color: "#9CA3AF", emoji: "S",  route: "/donaciones/soneium",   available: true  },
  { name: "SEI",       ticker: "SEI EVM",    color: "#9B1C1C", emoji: "S",  route: "/donaciones/sei",       available: true  },
  { name: "BASE",      ticker: "BASE",       color: "#0052FF", emoji: "B",  route: "/donaciones/base",      available: true  },
  { name: "UNICHAIN",  ticker: "UNI",        color: "#FF007A", emoji: "✦",  route: "/donaciones/unichain",  available: true  },
  { name: "INK",       ticker: "INK",        color: "#7B2BF9", emoji: "i",  route: "/donaciones/ink",       available: true  },
];

export default function Donaciones() {
  const [, navigate] = useLocation();

  return (
    <div className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-black py-10 px-4">
      {/* Lion background */}
      <img
        src={lionBg}
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 h-[90%] max-h-[700px] w-auto object-contain opacity-15 pointer-events-none select-none"
        style={{ filter: "grayscale(20%) sepia(20%) brightness(0.7)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />

      {/* Back button */}
      <a
        href="/"
        className="absolute top-5 left-5 z-20 flex items-center gap-2 px-3 py-2 rounded-lg border border-primary/30 bg-black/60 text-primary/70 hover:text-primary hover:border-primary/60 transition-all duration-200"
      >
        <ArrowLeft size={15} />
        <span className="hidden sm:inline font-sans uppercase tracking-widest text-xs">Volver</span>
      </a>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center gap-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-white/35 mb-2">
            HERMINIO59
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-wider text-white mb-3">
            APOYA EL <span className="text-primary">LABORATORIO</span>
          </h1>
          <p className="font-sans text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Cada aporte impulsa más contenido, análisis y herramientas para seguir construyendo la comunidad.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/30" />
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-primary/60">
              Elige tu red para apoyar
            </p>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/30" />
          </div>
        </motion.div>

        {/* Crypto grid */}
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-3">
          {cryptos.map((crypto, i) => (
            <motion.button
              key={crypto.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              onClick={() => crypto.route && navigate(crypto.route)}
              className="relative flex flex-col items-center gap-2 p-4 rounded-xl border border-primary/25 bg-white/3 hover:border-primary/60 hover:bg-primary/8 hover:shadow-[0_0_24px_rgba(229,184,76,0.12)] transition-all duration-300 cursor-pointer group"
            >
              {/* Icon circle */}
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-base font-bold border-2 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${crypto.color}22`,
                  borderColor: `${crypto.color}55`,
                  color: crypto.color,
                }}
              >
                {crypto.emoji}
              </div>

              <div>
                <p className="font-serif font-bold text-[11px] tracking-widest text-white uppercase leading-tight">
                  {crypto.name}
                </p>
                <p className="font-sans text-[9px] text-white/35 tracking-widest uppercase mt-0.5">
                  {crypto.ticker}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full grid grid-cols-3 gap-4 border-t border-white/5 pt-6"
        >
          {[
            { label: "100% Seguro",    sub: "Tú decides cuánto y cómo apoyar." },
            { label: "Transparente",   sub: "Todo apoyo se reinvierte en contenido." },
            { label: "Comunidad",      sub: "Esto no es solo mío, esto es nuestro." },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-serif text-xs text-primary uppercase tracking-widest mb-1">{item.label}</p>
              <p className="font-sans text-[10px] text-white/25 leading-relaxed">{item.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
