import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import FloatingParticles from "./FloatingParticles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero-overlay)" }}
      />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Ornamental top border */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "var(--gradient-gold)" }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-20 max-w-3xl mx-auto">

        {/* Top ornament */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="mb-6"
        >
          <svg width="120" height="30" viewBox="0 0 120 30" fill="none" className="opacity-80">
            <path d="M0 15 Q30 5 60 15 Q90 25 120 15" stroke="hsl(48,95%,68%)" strokeWidth="1.5" fill="none"/>
            <circle cx="60" cy="15" r="4" fill="hsl(48,95%,68%)" />
            <circle cx="20" cy="13" r="2" fill="hsl(48,95%,68%)" opacity="0.6"/>
            <circle cx="100" cy="17" r="2" fill="hsl(48,95%,68%)" opacity="0.6"/>
          </svg>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="font-script text-xl md:text-2xl mb-4 tracking-wide"
          style={{ color: "hsl(40,90%,90%)" }}
        >
          With the blessings of our parents &amp; elders
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.6, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="w-48 h-px mb-8"
          style={{ background: "var(--gradient-gold)" }}
        />

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center gap-2"
        >
          <h1
            className="font-serif-display font-bold tracking-widest text-gold-gradient leading-tight"
            style={{ fontSize: "clamp(2.5rem, 10vw, 5rem)" }}
          >
            Saipavan Rangu
          </h1>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6, type: "spring" }}
            className="font-script my-1"
            style={{ fontSize: "clamp(1.8rem, 6vw, 3rem)", color: "hsl(40,90%,85%)" }}
          >
            &amp;
          </motion.div>

          <h1
            className="font-serif-display font-bold tracking-widest text-gold-gradient leading-tight"
            style={{ fontSize: "clamp(2.5rem, 10vw, 5rem)" }}
          >
            Kavya
          </h1>
        </motion.div>

        {/* Sub tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <div className="w-32 h-px opacity-50" style={{ background: "var(--gradient-gold)" }} />
          <p className="font-elegant italic text-lg md:text-xl tracking-widest font-light mt-2" style={{ color: "hsl(40,80%,88%)" }}>
            Engagement Ceremony
          </p>
          <p className="font-serif-display text-sm tracking-[0.3em] font-light uppercase" style={{ color: "hsl(40,85%,78%)" }}>
            25 · February · 2026
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-elegant text-xs tracking-widest uppercase opacity-70" style={{ color: "hsl(40,80%,85%)" }}>
            Scroll
          </span>
          <div className="w-px h-10 animate-scroll-bounce" style={{ background: "linear-gradient(to bottom, hsl(48,95%,68%), transparent)" }} />
        </motion.div>
      </div>

      {/* Ornamental bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "var(--gradient-gold)" }} />
    </section>
  );
};

export default HeroSection;
