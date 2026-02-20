import { motion } from "framer-motion";
import heroBgMobile from "@/assets/hero-bg.mp4";
import heroBgDesktop from "@/assets/hero-bg-desktop.mp4";
import heroBgImg from "@/assets/hero-bg.jpg";
import FloatingParticles from "./FloatingParticles";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const videoSrc = isMobile ? heroBgMobile : heroBgDesktop;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        key={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={heroBgImg}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Gradient overlay — dark top + bottom, light middle */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.25) 65%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* Warm color tint overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{ background: "linear-gradient(135deg, hsl(38 80% 30% / 0.4), hsl(340 40% 30% / 0.3))" }}
      />

      {/* Floating gold particles */}
      <FloatingParticles />

      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "var(--gradient-gold)" }} />

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-24 max-w-4xl mx-auto w-full">

        {/* ❖ Top decorative ornament ❖ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
          className="mb-10"
        >
          <svg width="160" height="36" viewBox="0 0 160 36" fill="none">
            <line x1="0" y1="18" x2="60" y2="18" stroke="hsl(48,95%,68%)" strokeWidth="0.8" opacity="0.7"/>
            <circle cx="70" cy="18" r="2" fill="hsl(48,95%,68%)" opacity="0.7"/>
            <circle cx="80" cy="18" r="5" fill="hsl(48,95%,68%)" />
            <circle cx="80" cy="18" r="3" fill="hsl(38,80%,30%)" />
            <circle cx="90" cy="18" r="2" fill="hsl(48,95%,68%)" opacity="0.7"/>
            <line x1="100" y1="18" x2="160" y2="18" stroke="hsl(48,95%,68%)" strokeWidth="0.8" opacity="0.7"/>
            <path d="M80 6 L83 13 L80 10 L77 13 Z" fill="hsl(48,95%,68%)" opacity="0.8"/>
          </svg>
        </motion.div>

        {/* Blessing tagline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-oldstyle)",
            color: "hsl(42,80%,88%)",
            fontSize: "clamp(1rem, 3.5vw, 1.35rem)",
            fontStyle: "italic",
            letterSpacing: "0.08em",
          }}
          className="mb-2"
        >
          With the blessings of our parents &amp; elders
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-script)",
            color: "hsl(40,90%,80%)",
            fontSize: "clamp(1.1rem, 4vw, 1.6rem)",
          }}
          className="mb-12"
        >
          we joyfully request your presence at our
        </motion.p>

        {/* ── COUPLE NAMES ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center gap-0 w-full"
        >
          {/* Groom */}
          <h1
            className="text-gold-gradient leading-none tracking-wide"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              fontSize: "clamp(3rem, 13vw, 7rem)",
              lineHeight: 1.05,
            }}
          >
            Saipavan
          </h1>
          <h1
            className="text-gold-gradient leading-none tracking-wide"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 10vw, 5.5rem)",
              lineHeight: 1.1,
              fontStyle: "italic",
            }}
          >
            Rangu
          </h1>

          {/* Ampersand */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8, type: "spring", stiffness: 120 }}
            className="my-6"
          >
            <span
              style={{
                fontFamily: "var(--font-script)",
                fontSize: "clamp(2.5rem, 10vw, 5rem)",
                color: "hsl(48,90%,80%)",
                display: "block",
                lineHeight: 1,
              }}
            >
              &amp;
            </span>
          </motion.div>

          {/* Bride */}
          <h1
            className="text-gold-gradient leading-none tracking-wide"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "clamp(3rem, 13vw, 7rem)",
              lineHeight: 1.05,
            }}
          >
            Kavya
          </h1>
        </motion.div>

        {/* ── Ceremony label ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.4, ease: "easeOut" }}
          className="mt-14 flex flex-col items-center gap-4"
        >
          {/* thin gold line */}
          <div className="w-40 h-px opacity-60" style={{ background: "var(--gradient-gold)" }} />

          <p
            style={{
              fontFamily: "var(--font-oldstyle)",
              color: "hsl(40,80%,88%)",
              fontSize: "clamp(0.85rem, 3vw, 1.1rem)",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
            }}
          >
            Engagement Ceremony
          </p>

          <p
            style={{
              fontFamily: "var(--font-serif)",
              color: "hsl(48,90%,76%)",
              fontSize: "clamp(1rem, 4vw, 1.4rem)",
              fontWeight: 500,
              letterSpacing: "0.15em",
            }}
          >
            25 · February · 2026
          </p>

          <p
            style={{
              fontFamily: "var(--font-elegant)",
              color: "hsl(40,75%,82%)",
              fontSize: "clamp(0.9rem, 3vw, 1.1rem)",
              fontStyle: "italic",
              letterSpacing: "0.1em",
            }}
          >
            9:00 AM — 2:00 PM &nbsp;·&nbsp; Lunch to Follow
          </p>

          <div className="w-40 h-px opacity-60 mt-2" style={{ background: "var(--gradient-gold)" }} />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <p
            style={{
              fontFamily: "var(--font-elegant)",
              color: "hsl(40,75%,80%)",
              fontSize: "0.65rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              opacity: 0.7,
            }}
          >
            Scroll
          </p>
          <div
            className="w-px h-12 animate-scroll-bounce"
            style={{ background: "linear-gradient(to bottom, hsl(48,95%,68%), transparent)" }}
          />
        </motion.div>
      </div>

      {/* Gold bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: "var(--gradient-gold)" }} />
    </section>
  );
};

export default HeroSection;
