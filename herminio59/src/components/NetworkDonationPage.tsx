import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, ExternalLink, ShieldCheck, ArrowLeft } from "lucide-react";
import QRCode from "react-qr-code";
import lionBg from "@assets/ChatGPT_Image_11_may_2026,_11_59_11_p.m._1778562177732.png";

const WALLET = "0xC83358e435119c4B5A85e060AfAFb29768Cfe955";

export interface NetworkConfig {
  name: string;
  badgeLabel: string;
  badgeColor: string;
  explorerUrl: string;
  explorerLabel: string;
  warningText: string;
}

export default function NetworkDonationPage({ config }: { config: NetworkConfig }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(WALLET);
    } catch {
      const el = document.createElement("textarea");
      el.value = WALLET;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  }

  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black">
      {/* Lion background */}
      <img
        src={lionBg}
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 h-[90%] max-h-[700px] w-auto object-contain opacity-20 pointer-events-none select-none"
        style={{ filter: "grayscale(30%) sepia(30%) brightness(0.8)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />

      {/* Back button */}
      <a
        href="/donaciones"
        className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-primary/30 bg-black/60 text-primary/70 hover:text-primary hover:border-primary/60 transition-all duration-200"
      >
        <ArrowLeft size={13} />
        <span className="hidden sm:inline font-sans uppercase tracking-widest text-[10px]">Volver</span>
      </a>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[22rem] mx-4 sm:mx-auto"
      >
        <div className="relative rounded-2xl border border-primary/25 bg-black/75 backdrop-blur-xl shadow-[0_0_60px_rgba(229,184,76,0.18)] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

          <div className="px-5 pt-4 pb-3 flex flex-col items-center gap-2.5">

            {/* Title */}
            <div className="text-center leading-tight">
              <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-white/30">
                DONACIONES
              </p>
              <h1 className="font-serif text-lg font-bold tracking-wide mt-0.5">
                <span className="text-white">DONACIONES /</span>
                <span className="text-primary"> {config.name}</span>
              </h1>
            </div>

            {/* QR Code */}
            <div className="relative">
              <div className="w-44 h-44 bg-white rounded-xl p-2.5 shadow-[0_0_30px_rgba(229,184,76,0.2)]">
                <QRCode
                  value={WALLET}
                  size={256}
                  style={{ width: "100%", height: "100%" }}
                  viewBox="0 0 256 256"
                  bgColor="#ffffff"
                  fgColor="#000000"
                  level="M"
                />
              </div>
              {/* Network badge */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center shadow-lg text-white font-bold text-[9px] tracking-tight"
                  style={{ backgroundColor: config.badgeColor }}
                >
                  {config.badgeLabel}
                </div>
              </div>
            </div>

            {/* Address label */}
            <p className="font-sans text-xs text-white/50 tracking-wider">
              Dirección de {config.name}
            </p>

            {/* Wallet address box */}
            <div className="w-full flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
              <p className="font-mono text-[11px] text-white/60 break-all leading-snug flex-1 select-all">
                {WALLET}
              </p>
              <button
                onClick={handleCopy}
                className="shrink-0 text-primary/60 hover:text-primary transition-colors duration-200"
                aria-label="Copiar dirección"
              >
                {copied ? <Check size={15} className="text-green-400" /> : <Copy size={15} />}
              </button>
            </div>

            {/* Copy button */}
            <motion.button
              onClick={handleCopy}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 border border-primary/50 text-primary font-serif uppercase tracking-[0.15em] px-4 py-2.5 rounded-xl text-xs hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-green-400" />
                  <span className="text-green-400">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  Copiar dirección
                </>
              )}
            </motion.button>

            {/* Network warning */}
            <div className="w-full flex items-start gap-2.5 bg-primary/5 border border-primary/20 rounded-xl px-3 py-2">
              <ShieldCheck size={14} className="text-primary shrink-0 mt-px" />
              <p className="font-sans text-[11px] text-white/45 leading-snug">
                <span className="text-primary font-semibold">Importante — </span>
                {config.warningText}
              </p>
            </div>

            {/* Explorer button */}
            <a
              href={config.explorerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 border border-primary/40 text-primary font-serif uppercase tracking-[0.15em] px-4 py-2.5 rounded-xl text-xs hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              <ExternalLink size={13} />
              {config.explorerLabel}
            </a>
          </div>

          {/* Footer */}
          <div className="border-t border-white/5 px-5 py-2.5 text-center">
            <p className="font-sans text-[10px] text-white/25 tracking-wide">
              Gracias por apoyar el laboratorio HERMINIO59 ♡
            </p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}
